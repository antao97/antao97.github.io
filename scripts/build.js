const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');
const outputFile = path.join(__dirname, '../data.js');

// Load JSON data
const me = JSON.parse(fs.readFileSync(path.join(dataDir, 'content/me.json'), 'utf8'));
const my_link = JSON.parse(fs.readFileSync(path.join(dataDir, 'content/links.json'), 'utf8'));
const institute = JSON.parse(fs.readFileSync(path.join(dataDir, 'db/institutes.json'), 'utf8'));
const person = JSON.parse(fs.readFileSync(path.join(dataDir, 'db/people.json'), 'utf8'));
const preprint = JSON.parse(fs.readFileSync(path.join(dataDir, 'db/preprint.json'), 'utf8'));
const journal = JSON.parse(fs.readFileSync(path.join(dataDir, 'db/journal.json'), 'utf8'));
const conference = JSON.parse(fs.readFileSync(path.join(dataDir, 'db/conference.json'), 'utf8'));
const paper = JSON.parse(fs.readFileSync(path.join(dataDir, 'content/papers.json'), 'utf8'));
const selected_pub_ids = JSON.parse(fs.readFileSync(path.join(dataDir, 'content/selected_pub.json'), 'utf8'));
const about = JSON.parse(fs.readFileSync(path.join(dataDir, 'content/about.json'), 'utf8'));
const break_news = JSON.parse(fs.readFileSync(path.join(dataDir, 'content/break_news.json'), 'utf8'));
const news = JSON.parse(fs.readFileSync(path.join(dataDir, 'content/news.json'), 'utf8'));
const experience = JSON.parse(fs.readFileSync(path.join(dataDir, 'content/experience.json'), 'utf8'));
const hornor = JSON.parse(fs.readFileSync(path.join(dataDir, 'content/honors.json'), 'utf8'));
const activity = JSON.parse(fs.readFileSync(path.join(dataDir, 'content/activities.json'), 'utf8'));
const misc = JSON.parse(fs.readFileSync(path.join(dataDir, 'content/misc.json'), 'utf8'));
const contact = JSON.parse(fs.readFileSync(path.join(dataDir, 'content/contact.json'), 'utf8'));
const last_update = JSON.parse(fs.readFileSync(path.join(dataDir, 'content/last_update.json'), 'utf8'));

// Helper to convert template strings with ${...} to backtick strings
function toTemplateString(str) {
  // Escape backticks and ${ in the string to avoid breaking template
  return '`' + str.replace(/`/g, '\\`').replace(/\\\$/g, '\\\\$') + '`';
}

// Process papers: convert author_ids and pub_type/pub_id to actual references
const paperProcessed = {};
for (const [id, p] of Object.entries(paper)) {
  const authors = p.author_ids.map(aid => {
    if (aid === 'me') return 'me';
    return `person.${aid}`;
  });
  let pubRef;
  if (p.pub_type === 'journal') {
    pubRef = `journal.${p.pub_id}`;
  } else if (p.pub_type === 'conference') {
    pubRef = `conference.${p.pub_id}`;
  } else if (p.pub_type === 'preprint') {
    pubRef = `preprint.${p.pub_id}`;
  } else {
    pubRef = 'null';
  }
  paperProcessed[id] = {
    ...p,
    author: authors,
    pub: pubRef,
    type: p.pub_type, // map pub_type to type
    author_display_in_chinese: p.author_display_in_chinese !== undefined ? p.author_display_in_chinese : true
  };
  delete paperProcessed[id].author_ids;
  delete paperProcessed[id].pub_type;
  delete paperProcessed[id].pub_id;
}

// Process selected_pub: convert ids to references
const selected_pub = selected_pub_ids.map(id => `paper.${id}`);

// Process experience: convert institute_id and department_id to references
const experienceProcessed = experience.map(exp => ({
  ...exp,
  institute: `institute.${exp.institute_id}`,
  department: `institute.${exp.department_id}`
}));
experienceProcessed.forEach(exp => {
  delete exp.institute_id;
  delete exp.department_id;
});

// Process activity: convert conference_id to references
const activityProcessed = {};
for (const [key, val] of Object.entries(activity)) {
  activityProcessed[key] = {
    ...val,
    list: val.list.map(item => ({
      name: `conference.${item.conference_id}`,
      year: item.year
    }))
  };
}

// Process about, misc: convert template strings
const aboutProcessed = about;
const miscProcessed = misc;

// Generate JavaScript code
const lines = [];

lines.push(`function href(dict, name) {
  if (typeof name === "undefined") {
    return \`<a href=\${dict.link}>\${dict.name}</a>\`;
  }else{
    return \`<a href=\${dict.link}>\${name}</a>\`;
  }
};`);

lines.push(`function href_zh(dict, name) {
  var link = dict.link_zh;
  if (typeof link === "undefined") {
    link = dict.link;
  }
  if (typeof name === "undefined") {
    return \`<a href=\${link}>\${dict.name_zh}</a>\`;
  }else{
    return \`<a href=\${link}>\${name}</a>\`;
  }
};`);

lines.push(`function pub(paper, zh) {
  var str = "";
  str += \`<table><td style="width:15px"></td><td valign="middle"><div>\`;
  str += \`<b>\${paper.name}</b><br>\`;
  for (var i = 0; i < paper.author.length; i++) {
    var author = paper.author[i];
    var displayChinese = zh === "Yes" && paper.author_display_in_chinese !== false;
    if (author.is_me === "Yes") {
      if (displayChinese) {
        str += \`<u>\${author.name_zh}</u>\`;
      } else {
        str += \`<u>\${author.name}</u>\`;
      }
    } else {
      if (displayChinese) {
        str += \`\${href_zh(author)}\`;
      } else {
        str += \`\${href(author)}\`;
      }
    }
    if (i != (paper.author.length-1)){
      str += ", ";
    }
  }
  str += \`<br>\`;
  if (paper.pub.name === "arXiv"){
    str += \`<i>\${paper.pub.name}, \${paper.year}</i><br>\`;
  }else{
    if (paper.pub.short_name) {
      str += \`<i>\${paper.pub.name} (<b>\${paper.pub.short_name}</b>), \${paper.year}</i><br>\`;
    } else {
      str += \`<i>\${paper.pub.name}, \${paper.year}</i><br>\`;
    }
  }
  for (var i = 0; i < paper.extra_link.length; i++) {
    if (zh === "Yes") {
      str += \`[\${href_zh(paper.extra_link[i])}] \`;
    }else {
      str += \`[\${href(paper.extra_link[i])}] \`;
    }

  }
  str += \`<br><br>\`;
  str += \`</div></td></table><br>\`;
  return str
};`);

lines.push(`// 个人信息`);
lines.push(`var me = ${JSON.stringify(me, null, '\t')};`);

lines.push(`// 个人链接`);
lines.push(`var my_link = ${JSON.stringify(my_link, null, '\t')};`);

lines.push(`// 使用到的机构信息`);
lines.push(`var institute = ${JSON.stringify(institute, null, '\t')};`);

lines.push(`// 使用到的人物信息`);
lines.push(`var person = ${JSON.stringify(person, null, '\t')};`);

lines.push(`// 使用到的期刊和会议信息`);
lines.push(`var preprint = ${JSON.stringify(preprint, null, '\t')};`);
lines.push(`var journal = ${JSON.stringify(journal, null, '\t')};`);
lines.push(`var conference = ${JSON.stringify(conference, null, '\t')};`);

lines.push(`// 我的文章信息`);
// Need to output paperProcessed with references as strings, but we need to output JS code that references variables.
// Instead of stringifying, we construct JS object literals with variable references.
let paperCode = 'var paper = {\n';
for (const [id, p] of Object.entries(paperProcessed)) {
  paperCode += `\t${id}: {\n`;
  if (p.short_name !== undefined) {
    paperCode += `\t\tshort_name: ${JSON.stringify(p.short_name)},\n`;
  }
  paperCode += `\t\tname: ${JSON.stringify(p.name)},\n`;
  paperCode += `\t\tlink: ${JSON.stringify(p.link)},\n`;
  if (p.img !== undefined) {
    paperCode += `\t\timg: ${JSON.stringify(p.img)},\n`;
  }
  paperCode += `\t\tauthor: [${p.author.join(', ')}],\n`;
  paperCode += `\t\tpub: ${p.pub},\n`;
  paperCode += `\t\ttype: ${JSON.stringify(p.type)},\n`;
  paperCode += `\t\tyear: ${p.year},\n`;
  paperCode += `\t\textra_link: ${JSON.stringify(p.extra_link, null, '\t')},\n`;
  if (p.intro) {
    paperCode += `\t\tintro: ${JSON.stringify(p.intro, null, '\t')},\n`;
    paperCode += `\t\tintro_zh: ${JSON.stringify(p.intro_zh, null, '\t')},\n`;
  }
  // Add author_display_in_chinese field
  if (p.author_display_in_chinese !== undefined) {
    paperCode += `\t\tauthor_display_in_chinese: ${p.author_display_in_chinese},\n`;
  }
  // Remove trailing comma
  paperCode = paperCode.replace(/,\n$/, '\n');
  paperCode += '\t},\n';
}
paperCode += '};';
lines.push(paperCode);

lines.push(`// 精选文章信息`);
lines.push(`var selected_pub = [${selected_pub.join(', ')}];`);

lines.push(`// 个人介绍`);
// aboutProcessed contains template strings, need to output as template literals
let aboutCode = 'var about = [\n';
aboutProcessed.en.forEach(paragraph => {
  aboutCode += '\t[';
  aboutCode += paragraph.map(s => toTemplateString(s)).join(', ');
  aboutCode += '],\n';
});
aboutCode += '];';
lines.push(aboutCode);

let aboutZhCode = 'var about_zh = [\n';
aboutProcessed.zh.forEach(paragraph => {
  aboutZhCode += '\t[';
  aboutZhCode += paragraph.map(s => toTemplateString(s)).join(', ');
  aboutZhCode += '],\n';
});
aboutZhCode += '];';
lines.push(aboutZhCode);

lines.push(`// 新闻`);
lines.push(`var break_news = ${toTemplateString(break_news.en)};`);
lines.push(`var break_news_zh = ${toTemplateString(break_news.zh)};`);

let newsCode = 'var news = [\n';
news.forEach(item => {
  newsCode += '\t{\n';
  newsCode += `\t\tdate: ${JSON.stringify(item.date)},\n`;
  newsCode += `\t\tcontent: ${toTemplateString(item.content)},\n`;
  newsCode += `\t\tcontent_zh: ${toTemplateString(item.content_zh)},\n`;
  newsCode += '\t},\n';
});
newsCode += '];';
lines.push(newsCode);

lines.push(`// 经历`);
// experienceProcessed contains references as strings
let expCode = 'var experience = [\n';
experienceProcessed.forEach(exp => {
  expCode += '\t{\n';
  expCode += `\t\tinstitute: ${exp.institute},\n`;
  expCode += `\t\tdepartment: ${exp.department},\n`;
  expCode += `\t\tjob: ${JSON.stringify(exp.job)},\n`;
  expCode += `\t\tjob_zh: ${JSON.stringify(exp.job_zh)},\n`;
  expCode += `\t\ttime: ${JSON.stringify(exp.time, null, '\t')},\n`;
  expCode += '\t},\n';
});
expCode += '];';
lines.push(expCode);

lines.push(`// 荣誉`);
lines.push(`var hornor = ${JSON.stringify(hornor, null, '\t')};`);

lines.push(`// 活动`);
// activityProcessed
let activityCode = 'var activity = {\n';
for (const [key, val] of Object.entries(activityProcessed)) {
  activityCode += `\t${key}: {\n`;
  activityCode += `\t\tname: ${JSON.stringify(val.name)},\n`;
  activityCode += `\t\tname_zh: ${JSON.stringify(val.name_zh)},\n`;
  activityCode += `\t\tlist: [\n`;
  val.list.forEach(item => {
    activityCode += '\t\t\t{\n';
    activityCode += `\t\t\t\tname: ${item.name},\n`;
    activityCode += `\t\t\t\tyear: ${JSON.stringify(item.year)},\n`;
    activityCode += '\t\t\t},\n';
  });
  activityCode += '\t\t],\n';
  activityCode += '\t},\n';
}
activityCode += '};';
lines.push(activityCode);

lines.push(`// 其他方面`);
let miscCode = 'var misc = [\n';
miscProcessed.en.forEach(paragraph => {
  miscCode += '\t[';
  miscCode += paragraph.map(s => toTemplateString(s)).join(', ');
  miscCode += '],\n';
});
miscCode += '];';
lines.push(miscCode);

let miscZhCode = 'var misc_zh = [\n';
miscProcessed.zh.forEach(paragraph => {
  miscZhCode += '\t[';
  miscZhCode += paragraph.map(s => toTemplateString(s)).join(', ');
  miscZhCode += '],\n';
});
miscZhCode += '];';
lines.push(miscZhCode);

lines.push(`// 联系方式`);
lines.push(`var contact = ${JSON.stringify(contact, null, '\t')};`);

lines.push(`// 版权`);
lines.push(`var last_update = ${JSON.stringify(last_update, null, '\t')};`);

// Now generate the HTML string variables (selected_pub_html, about_html, etc.)
// This part is lengthy; we can copy the original generation logic from data.js
// For simplicity, we can output the original generation code as is, assuming variables are defined.
// However, we need to ensure the generated strings use the variables we just defined.
// Instead of regenerating, we can just output the original generation code from data.js (lines 641 onward).
// But that code is static and references the same variable names, which we have defined.
// So we can copy the rest of data.js (from line 641 to end) as is.
// Let's read that part from the original data.js and append.
const originalData = fs.readFileSync(path.join(__dirname, '../data.js'), 'utf8');
const splitIndex = originalData.indexOf('// index_en.html');
if (splitIndex === -1) {
  throw new Error('Could not find split point');
}
const rest = originalData.substring(splitIndex);
lines.push(rest);

// Write to file
fs.writeFileSync(outputFile, lines.join('\n\n'), 'utf8');
console.log('Generated data.js');