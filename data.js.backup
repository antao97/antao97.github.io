function href(dict, name) {  
	if (typeof name === "undefined") {  
		return `<a href=${dict.link}>${dict.name}</a>`;
	}else{
		return `<a href=${dict.link}>${name}</a>`;
	}
};

function href_zh(dict, name) {  
	var link = dict.link_zh;
	if (typeof link === "undefined") {
		link = dict.link;
	}
	if (typeof name === "undefined") {  
		return `<a href=${link}>${dict.name_zh}</a>`;
	}else{
		return `<a href=${link}>${name}</a>`;
	}
};

function pub(paper, zh) {
	var str = "";
	str += `<table><td style="width:15px"></td><td valign="middle"><div>`;
	str += `<b>${paper.name}</b><br>`;
	for (var i = 0; i < paper.author.length; i++) {  
		if (paper.author[i].is_me === "Yes") {  
			str += `<u>${paper.author[i].name}</u>`;
		}else{
			str += `${href(paper.author[i])}`;
		}
		if (i != (paper.author.length-1)){
			str += ", ";
		}
	} 
	str += `<br>`;
	if (paper.pub.name === "arXiv"){
		str += `<i>${paper.pub.name}, ${selected_pub[i].year}</i><br>`;
	}else{
		str += `<i>${paper.pub.name} (<b>${paper.pub.short_name}</b>), ${paper.year}</i><br>`;
	}
	for (var i = 0; i < paper.extra_link.length; i++) {
		if (zh === "Yes") {
			str += `[${href_zh(paper.extra_link[i])}] `;
		}else {
			str += `[${href(paper.extra_link[i])}] `;
		}
		
	}
	str += `<br><br>`;
	str += `</div></td></table><br>`;
	return str
};

// 个人信息
var me = {  
	name: "An Tao", 
	name_zh: "陶安", 
	img: "image/An_Tao.jpg",
	job: "Postdoctoral Research Fellow",
	job_zh: "博士后研究员",
	institute: "Nanyang Technological University",
	institute_zh: "新加坡南洋理工大学",
	email: "an.tao@ntu.edu.sg",
	address: "Centre for Advanced Robotics Technology Innovation (CARTIN), Singapore 639798",
	address_zh: "新加坡南洋理工大学CARTIN实验室，邮编：639798",
	is_me: "Yes",
	icon: "image/icon.jpg"
};

// 个人链接
var my_link = [
	{
		name: "Google Scholar",
		name_zh: "谷歌学术",
		link: "https://scholar.google.com/citations?user=0FyWZPMAAAAJ&hl=en",
		link_zh: "https://scholar.google.com.hk/citations?hl=zh-CN&user=0FyWZPMAAAAJ",
	},
	{
		name: "Github",
		name_zh: "GitHub代码库",
		link: "https://github.com/antao97",
	}
]; 

// 使用到的机构信息
var institute = {
	ivg: {
		name: "i-VisionGroup",
		name_zh: "IVG视觉组",
		link: "http://ivg.au.tsinghua.edu.cn/index.php",
	},
	auto: {
		name: "Department of Automation",
		name_zh: "自动化系",
		link: "http://www.au.tsinghua.edu.cn"
	},
	tsinghua: {
		name: "Tsinghua University",
		name_zh: "清华大学",
		link: "https://www.tsinghua.edu.cn/publish/thu2018en/index.html",
		link_zh: "https://www.tsinghua.edu.cn",
		img: "image/tsinghua.png",
		nation: "China",
		nation_zh: "中国"
	},
	seu: {
		name: "Southeast University",
		name_zh: "东南大学",
		link: "http://www.seu.edu.cn/english/main.html",
		link_zh: "http://www.seu.edu.cn",
		img: "image/seu.jpg",
		nation: "China",
		nation_zh: "中国"
	},
	radio: {
		name: "School of Information Science and Engineering",
		name_zh: "信息科学与工程学院",
		link: "http://radio.seu.edu.cn",
	},
	cartin: {
		name: "Centre for Advanced Robotics Technology Innovation",
		short_name: "CARTIN",
		name_zh: "先进机器人技术创新中心",
		link: "https://www.ntu.edu.sg/cartin",
	},
	ntu_eee: {
		name: "School of Electrical and Electronic Engineering",
		short_name: "School of EEE",
		name_zh: "电气与电子工程学院",
		link: "https://www.ntu.edu.sg/eee",
	},
	ntu: {
		name: "Nanyang Technological University",
		short_name: "NTU",
		name_zh: "南洋理工大学",
		img: "image/ntu.webp",
		link: "https://www.ntu.edu.sg/",
		link_zh: "https://www.ntu.edu.sg/main/cn",
		nation: "Singapore",
		nation_zh: "新加坡",
	}
};

// 使用到的人物信息
var person = {
	yueqi_duan: {
		name: "Yueqi Duan",
		name_zh: "段岳圻",
		link: "https://duanyueqi.github.io/",
		link_zh: "http://web.ee.tsinghua.edu.cn/duanyueqi/zh_CN/index.htm"
	},
	jiwen_lu: {
		name: "Jiwen Lu",
		name_zh: "鲁继文",
		link: "http://ivg.au.tsinghua.edu.cn/Jiwen_Lu/",
		link_zh: "https://www.au.tsinghua.edu.cn/info/1078/2330.htm"
	},
	jie_zhou: {
		name: "Jie Zhou",
		name_zh: "周杰",
		link: "https://www.tsinghua.edu.cn/publish/thu2018en/index.html",
		link_zh: "https://www.au.tsinghua.edu.cn/info/1078/1635.htm"
	},
	yingqi_wang: {
		name: "Yingqi Wang",
		name_zh: "王英琦",
		link: "https://github.com/HilbertWang2002"
	},
	yi_wei: {
		name: "Yi Wei",
		name_zh: "韦祎",
		link: "https://weiyithu.github.io/"
	},
	zai_zhang: {
		name: "Zhang Zai",
		name_zh: "张载",
		link: "https://en.wikipedia.org/wiki/Zhang_Zai",
		link_zh: "https://baike.baidu.com/item/%E5%BC%A0%E8%BD%BD/5129?fr=aladdin"
	},
	ning_xu: {
		name: "Ning Xu",
		name_zh: "徐宁",
		link: "http://palm.seu.edu.cn/xuning/",
	},
	xin_geng: {
		name: "Xin Geng",
		name_zh: "耿新",
		link: "http://palm.seu.edu.cn/xgeng/",
	},
	chenglun_peng: {
		name: "Chenglun Peng",
		name_zh: "彭成伦",
		link: "http://palm.seu.edu.cn/members.html"
	},
	tan_yap_peng: {
		name: "Tan Yap Peng",
		name_zh: "Tan Yap Peng",
		link: "https://personal.ntu.edu.sg/eyptan/"
	},
	ziwei_wang: {
		name: "Ziwei Wang",
		name_zh: "王子为",
		link: "https://ziweiwangthu.github.io/"
	}
};

// 使用到的期刊和会议信息
var preprint = {
	arxiv: {
		name: "arXiv",
		name_zh: "预印",
	}
};
var journal = {
	tip: {
		name: "IEEE Transactions on Image Processing",
		short_name: "TIP",
	},
	tcsvt: {
		name: "IEEE Transactions on Circuits and Systems for Video Technology",
		short_name: "TCSVT",
	},
};
var conference = {
	cvpr: {
		name: "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
		short_name: "CVPR",
	},
	iccv: {
		name: "IEEE/CVF International Conference on Computer Vision",
		short_name: "ICCV",
	},
	eccv: {
		name: "European Conference on Computer Vision",
		short_name: "ECCV",
	},
	icme: {
		name: "IEEE International Conference on Multimedia and Expo",
		short_name: "ICME",
	},
	threedv: {
		name: "IEEE International Conference on 3D Vision",
		short_name: "3DV",
	},
	icip: {
		name: "IEEE International Conference on Image Processing",
		short_name: "ICIP",
	},
	fg: {
		name: "IEEE International Conference on Automatic Face and Gesture Recognition",
		short_name: "FG",
	},
	ijcai: {
		name: "International Joint Conference on Artificial Intelligence",
		short_name: "IJCAI",
	},
	pricai: {
		name: "Pacific Rim International Conference on Artificial Intelligence",
		short_name: "PRICAI",
	},
	acm_mm: {
		name: "ACM Multimedia",
		short_name: "ACM MM",
	},
};

// 我的文章信息
var paper = {
	lgm: {
		short_name: "Dynamics-aware Attack",
		name: "Dynamics-aware Adversarial Attack of Adaptive Neural Networks",
		link: "https://arxiv.org/abs/2210.08159",
		img: "image/attack.png",
		author: [
			me, person.yueqi_duan, person.yingqi_wang, person.jiwen_lu, person.jie_zhou
		],
		pub: journal.tcsvt,
		type: "journal",
		year: 2024,
		extra_link: [
		{
			name: "arXiv",
			name_zh: "论文",
			link: "https://arxiv.org/abs/2210.08159",
		},
		{
			name: "Code",
			name_zh: "代码",
			link: "https://github.com/antao97/LGM",
		}
		],
		intro: [
			"Existing adversarial attack algorithms are designed under a basic assumption -- the network architecture is fixed throughout the attack process.",
			"We are the first to find that this assumption does not hold for adaptive neural networks, which adaptively deactivate unnecessary execution units based on inputs to improve computational efficiency.",
			"We study dynamics-aware adversarial attacks on representative adaptive neural networks for 2D images and 3D point clouds.",
			"Among these networks, 3D sparse convolution network plays an important role in large 3D point cloud processing tasks, and our method shows its great fragility under adversarial attacks."
		],
		intro_zh: [
			"目前的对抗攻击方法默认网络在攻击前后网络结构不会发生变化，但是此假设并不适用于自适应神经网络，自适应神经网络会根据不同的输入数据自适应地关闭一些不重要的运算单元，导致当下的攻击扰动对攻击后的新网络结构可能无效。",
			"我们第一个发现了自适应神经网络在对抗攻击中的攻击滞后问题，对二维图像和三维点云上代表性的自适应神经网络进行了研究，其中三维稀疏卷积网络在大型三维点云处理中占据了重要地位，而我们的方法揭露了三维稀疏卷积网络面对对抗攻击的高脆弱性。"
		]
  	},
	seggroup: {
		short_name: "SegGroup",
		name: "SegGroup: Seg-Level Supervision for 3D Instance and Semantic Segmentation",
		link: "https://arxiv.org/abs/2012.10217",
		img: "image/seggroup.png",
		author: [
			me, person.yueqi_duan, person.yi_wei, person.jiwen_lu, person.jie_zhou
		],
		pub: journal.tip,
		type: "journal",
		year: 2022,
		extra_link: [
			{
				name: "arXiv",
				name_zh: "论文",
				link: "https://arxiv.org/abs/2012.10217",
			},
			{
				name: "Code",
				name_zh: "代码",
				link: "https://github.com/antao97/SegGroup",
			},
			{
				name: "Zhihu",
				name_zh: "知乎",
				link: "https://zhuanlan.zhihu.com/p/536482202",
			},
			{
				name: "FAQ",
				name_zh: "常见问题",
				link: "https://github.com/antao97/SegGroup/blob/main/FAQ.md",
			},
		],
		intro: [
			"By fully taking the advantages of locations, we design a weakly supervised point cloud segmentation algorithm that only requires clicking on one point per instance to indicate its location for annotation.",
			"Based on the over-segmentation technique, we further extend the labeling information into segments to enlarge the labeled point number.",
			"Our seg-level supervised method achieves competitive performance with fully-supervised methods and surpasses other weakly-supervised methods."
		],
		intro_zh: [
			"在点云实例分割中，为了充分利用实例位置信息的优势，本文设计了一个弱监督点云分割算法，仅需要对每个实例中一个点进行标注以指示其位置，并将对点的标注信息扩展至其所属过分割块以增大标注量。",
			"我们过分割块级标签监督的方法取得了与全监督方法相比拟的性能，同时超越了其他弱监督方法。"
		]
	},
	le: {
		name: "Label Enhancement for Label Distribution Learning",
		link: "https://www.ijcai.org/Proceedings/2018/0406.pdf",
		author: [
			person.ning_xu, me, person.xin_geng
		],
		pub: conference.ijcai,
		type: "conference",
		year: 2018,
		extra_link: [
			{
				name: "paper",
				name_zh: "论文",
				link: "https://www.ijcai.org/Proceedings/2018/0406.pdf",
			},
			{
				name: "Slides",
				name_zh: "幻灯片",
				link: "../slides/IJCAI18_Label Enhancement for Label Distribution Learning.pdf",
			},
		],
	},
	lemlp: {
		name: "Label Embedding Based on Multi-Scale Locality Preservation",
		link: "https://www.ijcai.org/Proceedings/2018/0364.pdf",
		author: [
			person.chenglun_peng, me, person.xin_geng
		],
		pub: conference.ijcai,
		type: "conference",
		year: 2018,
		extra_link: [
			{
				name: "paper",
				name_zh: "论文",
				link: "https://www.ijcai.org/Proceedings/2018/0364.pdf",
			},
			{
				name: "Slides",
				name_zh: "幻灯片",
				link: "../slides/IJCAI18_Label Embedding Based on Multi-Scale Locality Preservation.pdf",
			},
		],
	},
	my_le: {
		name: "Labeling Information Enhancement for Multi-label Learning with Low-Rank Subspace",
		link: "https://link.springer.com/chapter/10.1007/978-3-319-97304-3_51",
		author: [
			me, person.ning_xu, person.xin_geng
		],
		pub: conference.pricai,
		type: "conference",
		year: 2018,
		extra_link: [
			{
				name: "paper",
				name_zh: "论文",
				link: "https://link.springer.com/chapter/10.1007/978-3-319-97304-3_51",
			},
		],
	},
};

// 精选文章信息
var selected_pub = [
	paper.lgm, 
	paper.seggroup
];

// 个人介绍
var about = [
	[
		`I'm currently working as a postdoctoral research fellow in the ${href(institute.cartin)} (CARTIN) lab in ${href(institute.ntu)} (NTU),`,
		`supervised by Prof. ${href(person.tan_yap_peng)} and Prof. ${href(person.ziwei_wang)}.`,
		`Before joining NTU, I got my Ph.D. degree from ${href(institute.tsinghua)} and B.Eng. degree from ${href(institute.seu)}.`,
	],
	[
		`My current research focuses on robotics, especially in robot manipulation policy learning.`,
		`During my Ph.D. career, I did researches on 3D point clouds.`
	]
];
var about_zh = [
	[
		`我目前在新加坡${href_zh(institute.ntu)}的${href_zh(institute.cartin)}从事博士后工作，`,
		`研究导师是${href_zh(person.tan_yap_peng)}教授和${href_zh(person.ziwei_wang)}助理教授。`,
		`在此之前，我在${href_zh(institute.tsinghua)}${href_zh(institute.auto)}取得博士学位，`,
		`导师是${href_zh(person.jie_zhou)}教授、${href_zh(person.jiwen_lu)}副教授和${href_zh(person.yueqi_duan)}助理教授。`,
		`我本科就读于${href_zh(institute.seu)}的${href_zh(institute.radio)}。`
	],
	[
		`我目前的研究专注于机器人领域，特别是机器人操控策略学习。`,
		`我博士期间开展了三维点云方面的研究。`
	]
];

// 新闻
var break_news = "I'm looking for a relevant postdoctoral position. If you are interested in my researches, feel free to contact me!"
var break_news_zh = "我正在寻找相关博士后职位，如果您对我的研究感兴趣请随时与我联系！"
var news = [
	{
		date: "2024.10.07",
		content: `I join the ${href(institute.cartin, institute.cartin.short_name)} lab in ${href(institute.ntu, institute.ntu.short_name)} as a postdoctoral research fellow!`,
		content_zh: `我加入新加坡${href_zh(institute.ntu)}的${href_zh(institute.cartin)}成为了一名博士后研究员！`
	},
	{
		date: "2024.01.04",
		content: `Our ${href(paper.lgm, paper.lgm.short_name)} is accepted by TCSVT!`,
		content_zh: `我们的${href(paper.lgm, paper.lgm.short_name)}被TCSVT接收了！`
	},
	{
		date: "2022.10.17",
		content: `Our ${href(paper.lgm, paper.lgm.short_name)} is on arXiv!`,
		content_zh: `我们的${href(paper.lgm, paper.lgm.short_name)}可以在arXiv上预览了！`
	},
	{
		date: "2022.07.01",
		content: `Our ${href(paper.seggroup, paper.seggroup.short_name)} is accepted by TIP!`,
		content_zh: `我们的${href(paper.seggroup, paper.seggroup.short_name)}被TIP接收了！`
	},
	{
		date: "2021.12.20",
		content: `Our ${href(paper.lgm, paper.lgm.short_name)} is on arXiv!`,
		content_zh: `我们的${href(paper.lgm, paper.lgm.short_name)}可以在arXiv上预览了！`
	},
	{
		date: "2021.11.19",
		content: `I pass the Ph.D. qualifying exam and become a Ph.D. candidate!`,
		content_zh: `我通过了博士资格考试，成为了一名博士候选人！`
	},
	{
		date: "2020.12.18",
		content: `Our ${href(paper.seggroup, paper.seggroup.short_name)} is on arXiv!`,
		content_zh: `我们的${href(paper.seggroup, paper.seggroup.short_name)}可以在arXiv上预览了！`
	}
];

// 经历
var experience = [
	{
		institute: institute.ntu,
		department: institute.ntu_eee,
		job: "Postdoctoral Research Fellow",
		job_zh: "博士后研究员",
		time: {
			start: {
				year: "2024",
				month: "10",
			},
		}
  },
	{
		institute: institute.tsinghua,
		department: institute.auto,
		job: "Ph.D. Degree",
		job_zh: "工学博士",
		time: {
			start: {
				year: "2019",
				month: "8",
			},
			end: {
				year: "2024",
				month: "6",
			}
		}
  },
	{
		institute: institute.seu,
		department: institute.radio,
		job: "B.Eng. Degree",
		job_zh: "工学学士",
		time: {
			start: {
				year: "2015",
				month: "8",
			},
			end: {
				year: "2019",
				month: "6",
			}
		}
	},
];

// 荣誉
var hornor = [
	{
		name: "Outstanding Graduate of Southeast University",
		name_zh: "东南大学优秀本科毕业生",
		year: "2019"
	},
	{
		name: "Merit Student of Southeast University",
		name_zh: "东南大学三好学生",
		year: ["2016", "2017", "2018"]
	},
	{
		name: "President Scholarship of Southeast University",
		name_zh: "东南大学校长奖学金",
		year: "2016"
	},
	{
		name: "Mayor's Award of Beijing in Technical Innovation",
		name_zh: "北京市科技创新市长奖",
		year: "2015"
	},
	{
		name: "First Prize in the Awarding Program for Future Scientists",
		name_zh: "第十四届“明天小小科学家”奖励活动一等奖",
		year: "2014"
	},
];

// 活动
var activity = {
	conference: {
		name: "Conference Reviewer",
		name_zh: "会议审稿人",
		list: [
			{
				name: conference.cvpr,
				year: ["2021", "2022", "2023", "2024"]
			},
			{
				name: conference.iccv,
				year: ["2021", "2023"]
			},
			{
				name: conference.eccv,
				year: ["2022", "2024"]
			},
			{
				name: conference.acm_mm,
				year: ["2024"]
			},
			{
				name: conference.icme,
				year: ["2021", "2022", "2023", "2024"]
			},
			{
				name: conference.icip,
				year: ["2022", "2023", "2024"]
			},
			{
				name: conference.fg,
				year: ["2023", "2024"]
			},
		]
	}
};

// 其他方面
var misc = [
	[
		`I admire a famous quote from ${href(person.zai_zhang)}: To set conscience for our world, `,
		`to secure life and fortune for all people, to continue teachings of past sages, and to establish peace for all future generations.`
	],
	[
		`Now I mainly focus on my research and work hard to publish more papers.`
	]
];
var misc_zh = [
	[
		`我很欣赏北宋${href_zh(person.zai_zhang)}的一句名言：为天地立心，为生民立命，为往圣继绝学，为万世开太平。`
	],
	[
		`我现在主要关注在我的研究上面，希望能早日发表更多论文。`
	]
];

// 联系方式
var contact = [
	{
		name: "Email",
		name_zh: "邮箱",
		content: me.email,
	},
	{
		name: "Address",
		name_zh: "地址",
		content: me.address,
		content_zh: me.address_zh,
	}
];

// 版权
var last_update = {
	month: "Nov",
	month_zh: "11",
	year: "2024",
};




// index_en.html
// Title
var title = `${me.name}'s Homepage`;

// Image
var img_html = `<img id="myPicture" src=${me.img} style="float:center; border-radius: 15px"height="300px">`

// My Link
var my_link_html = "";  
for (var i = 0; i < my_link.length; i++) {  
	my_link_html += href(my_link[i]);
	if (i != (my_link.length-1)){
		my_link_html += " | ";
	}
} 

// Selected Publications
var selected_pub_html = "";
for (var i = 0; i < selected_pub.length; i++) {  
	selected_pub_html += [
		`<table><tbody><tr>`,
		`<td style="width:230px;" valign="middle" align='middle'>`,
		`<table><td style="height:15px"></td></table>`,
		`<img src=${selected_pub[i].img} height="200px">`,
		`</td><td style="width:10px"></td>`,
		`<td valign="middle"><div>`,
		`<b>${selected_pub[i].name}</b><br>`,
	].join("");
	for (var j = 0; j < selected_pub[i].author.length; j++) {  
		if (selected_pub[i].author[j].is_me === "Yes") {  
			selected_pub_html += `<u>${selected_pub[i].author[j].name}</u>`;
		}else{
			selected_pub_html += `${href(selected_pub[i].author[j])}`;
		}
		if (j != (selected_pub[i].author.length-1)){
			selected_pub_html += ", ";
		}
	} 
	selected_pub_html += `<br>`;
	if (selected_pub[i].pub.name === "arXiv"){
		selected_pub_html += `<i>${selected_pub[i].pub.name}, ${selected_pub[i].year}</i><br>`;
	}else{
		selected_pub_html += `<i>${selected_pub[i].pub.name} (<b>${selected_pub[i].pub.short_name}</b>), ${selected_pub[i].year}</i><br>`;
	}
	selected_pub_html += `<font size=3>`;
	for (var j = 0; j < selected_pub[i].extra_link.length; j++) {  
		selected_pub_html += `[${href(selected_pub[i].extra_link[j])}] `;
	}
	selected_pub_html += `</font><br>`;
	selected_pub_html += `<table><td style="height:10px"></td></table>`;
	selected_pub_html += `<font size=3>${selected_pub[i].intro.join(" ")}</font>`;
	selected_pub_html += `</div></td></tr></tbody></table>`;
	selected_pub_html += `<table><td style="height:35px"></td></table>`;
} 

// About
var about_html = "";
for (var i = 0; i < about.length; i++) {  
	about_html += "<p>" + about[i].join(" ") + "</p>";
} 

// News
var news_html = "";
for (var i = 0; i < news.length; i++) {  
	news_html += `<p><li>[${news[i].date}] ${news[i].content}</li></p>`;
} 

// Experience
var experience_html = "";
for (var i = 0; i < experience.length; i++) {  
	experience_html += `<table><tbody><tr><td style="width:20px"></td>`;
	// experience_html += `<td style="width:110px; height:110px"; horizontal-align: middle;"><a href=${experience[i].institute.link}><img src=${experience[i].institute.img} height="100px"></a></td>`;
	// experience_html += `<td style="width:30px"></td>`;
	experience_html += `<td horizontal-align: middle;"><div>${experience[i].job}<br>${experience[i].department.name}, ${experience[i].institute.name}, ${experience[i].institute.nation}.<br>`;
	if (typeof experience[i].time.end === "undefined") {
		experience_html += `${experience[i].time.start.year}.${experience[i].time.start.month} - Present`;
	}else{
		experience_html += `${experience[i].time.start.year}.${experience[i].time.start.month} - ${experience[i].time.end.year}.${experience[i].time.end.month}`;
	}
	experience_html += `</div></td></tr></tbody></table><br>`;
} 

// Hornors
var hornor_html = "";
for (var i = 0; i < hornor.length; i++) {  
	if (Array.isArray(hornor[i].year)){
		hornor_html += `<p><li>&nbsp; ${hornor[i].name}, ${hornor[i].year.join("/")}</li></p>`;
	}else{
		hornor_html += `<p><li>&nbsp; ${hornor[i].name}, ${hornor[i].year}</li></p>`;
	}
}

// Activities
var activity_html = "";
for (var key in activity){
	if (activity.hasOwnProperty(key)) {  
		activity_html += `<table><tbody><tr><td style="width:15px"></td>`;
		activity_html += `<td valign="middle"><div><h3>${activity[key].name}: </h3></div></td></tr></tbody>`;
		activity_html += `</table><ul>`;
		for (var i = 0; i < activity[key].list.length; i++) {  
			if (Array.isArray(activity[key].list[i].year)){
				var year = "";
				for (var j = 0; j < activity[key].list[i].year.length; j++) {  
				year += `${activity[key].list[i].year[j]}`;
				if (j < (activity[key].list[i].year.length-1)){
					year += "/";
				}
			}
			activity_html += `<p><li>&nbsp; ${activity[key].list[i].name.name} (${activity[key].list[i].name.short_name}), ${activity[key].list[i].year.join("/")}</li></p>`;
			}else{
			activity_html += `<p><li>&nbsp; ${activity[key].list[i].name.name} (${activity[key].list[i].name.short_name}), ${activity[key].list[i].year}</li></p>`;
			}
		}
		activity_html += `</ul>`;
	}
}

// Misc
var misc_html = "";
for (var i = 0; i < misc.length; i++) {  
	misc_html += "<p>" + misc[i].join("") + "</p>";
} 

// Contact
var contact_html = "";
contact_html += `<table><tbody><tr><td style="width:15px"></td>`;
contact_html += `<td valign="middle">`;
for (var i = 0; i < contact.length; i++) {  
	contact_html += `${contact[i].name}: ${contact[i].content}`;
	if (i < (contact.length-1)) {
		contact_html += `<p></p>`;
	}
} 
contact_html += `</td></tr></tbody></table>`;

// Copyright
var last_update_html = `<font size=3 style="color: #3B3B3B">—&nbsp;&nbsp; Last updated: ${last_update.month}, ${last_update.year} &nbsp;&nbsp;—</font>`;
var copyright_html = `<font size=2 style="color: #BBBBBB">Copyright &copy ${last_update.year} ${me.name}. All Rights Reserved.</font>`;




// index.html
// 标题
var title_zh = `${me.name_zh}的个人主页`;

// 个人链接
var my_link_html_zh = "";  
for (var i = 0; i < my_link.length; i++) {  
	my_link_html_zh += href_zh(my_link[i]);
	if (i != (my_link.length-1)){
		my_link_html_zh += " | ";
	}
} 

// 精选文章信息
var selected_pub_html_zh = "";
for (var i = 0; i < selected_pub.length; i++) {  
	selected_pub_html_zh += [
		`<table><tbody><tr>`,
		`<td style="width:230px;" valign="middle" align='middle'>`,
		`<table><td style="height:15px"></td></table>`,
		`<img src=${selected_pub[i].img} height="200px">`,
		`</td><td style="width:10px"></td>`,
		`<td valign="middle"><div>`,
		`<b>${selected_pub[i].name}</b><br>`,
	].join("");
	for (var j = 0; j < selected_pub[i].author.length; j++) {  
		if (selected_pub[i].author[j].is_me === "Yes") {  
			selected_pub_html_zh += `<u>${selected_pub[i].author[j].name}</u>`;
		}else{
			selected_pub_html_zh += `${href(selected_pub[i].author[j])}`;
		}
		if (j != (selected_pub[i].author.length-1)){
			selected_pub_html_zh += ", ";
		}
	} 
	selected_pub_html_zh += `<br>`;
	if (selected_pub[i].pub.name === "arXiv"){
		selected_pub_html_zh += `<i>${selected_pub[i].pub.name_zh}, ${selected_pub[i].year}</i><br>`;
	}else{
		selected_pub_html_zh += `<i>${selected_pub[i].pub.name} (<b>${selected_pub[i].pub.short_name}</b>), ${selected_pub[i].year}</i><br>`;
	}
	selected_pub_html_zh += `<font size=3>`;
	for (var j = 0; j < selected_pub[i].extra_link.length; j++) {  
		selected_pub_html_zh += `[${href_zh(selected_pub[i].extra_link[j])}] `;
	}
	selected_pub_html_zh += `</font><br>`;
	selected_pub_html_zh += `<table><td style="height:10px"></td></table>`;
	selected_pub_html_zh += `<font size=3>${selected_pub[i].intro_zh.join("")}</font>`;
	selected_pub_html_zh += `</div></td></tr></tbody></table>`;
	selected_pub_html_zh += `<table><td style="height:35px"></td></table>`;
} 

// 个人介绍
var about_html_zh = "";
for (var i = 0; i < about_zh.length; i++) {  
	about_html_zh += "<p>" + about_zh[i].join("") + "</p>";
} 

// 新闻
var news_html_zh = "";
for (var i = 0; i < news.length; i++) {  
	news_html_zh += `<p><li>[${news[i].date}] ${news[i].content_zh}</li></p>`;
} 

// 经历
var experience_html_zh = "";
for (var i = 0; i < experience.length; i++) {  
	experience_html_zh += `<table><tbody><tr><td style="width:20px"></td>`;
	// experience_html_zh += `<td style="width:110px; height:110px" valign="middle"><a href=${experience[i].institute.link}><img src=${experience[i].institute.img} height="100px"></a></td>`;
	// experience_html_zh += `<td style="width:30px"></td>`;
	experience_html_zh += `<td valign="middle"><div>${experience[i].job_zh}，${experience[i].department.name_zh}，${experience[i].institute.name_zh}<br>`;
	if (typeof experience[i].time.end === "undefined") {
		experience_html_zh += `${experience[i].time.start.year}年${experience[i].time.start.month}月 - 现在`;
	}else{
		experience_html_zh += `${experience[i].time.start.year}年${experience[i].time.start.month}月 - ${experience[i].time.end.year}年${experience[i].time.end.month}月`;
	}
	experience_html_zh += `</div></td></tr></tbody></table><br>`;
} 

// 荣誉
var hornor_html_zh = "";
for (var i = 0; i < hornor.length; i++) {  
	if (Array.isArray(hornor[i].year)){
		hornor_html_zh += `<p><li>&nbsp; ${hornor[i].name_zh}，${hornor[i].year.join("/")}</li></p>`;
	}else{
		hornor_html_zh += `<p><li>&nbsp; ${hornor[i].name_zh}，${hornor[i].year}</li></p>`;
	}
}

// 活动
var activity_html_zh = "";
for (var key in activity){
	if (activity.hasOwnProperty(key)) {  
		activity_html_zh += `<table><tbody><tr><td style="width:15px"></td>`;
		activity_html_zh += `<td valign="middle"><div><h3>${activity[key].name_zh}：</h3></div></td></tr></tbody>`;
		activity_html_zh += `</table><ul>`;
		for (var i = 0; i < activity[key].list.length; i++) {  
			if (Array.isArray(activity[key].list[i].year)){
				var year = "";
				for (var j = 0; j < activity[key].list[i].year.length; j++) {  
					year += `${activity[key].list[i].year[j]}`;
					if (j < (activity[key].list[i].year.length-1)){
						year += "/";
					}
				}
				activity_html_zh += `<p><li>&nbsp; ${activity[key].list[i].name.name} (${activity[key].list[i].name.short_name}), ${activity[key].list[i].year.join("/")}</li></p>`;
			}else{
				activity_html_zh += `<p><li>&nbsp; ${activity[key].list[i].name.name} (${activity[key].list[i].name.short_name}), ${activity[key].list[i].year}</li></p>`;
			}
		}
		activity_html_zh += `</ul>`;
	}
}

// 其他方面
var misc_html_zh = "";
for (var i = 0; i < misc_zh.length; i++) {  
	misc_html_zh += "<p>" + misc_zh[i].join("") + "</p>";
} 

// 联系方式
var contact_html_zh = "";
contact_html_zh += `<table><tbody><tr><td style="width:15px"></td>`;
contact_html_zh += `<td valign="middle">`;
for (var i = 0; i < contact.length; i++) {  
	if (typeof contact[i].content_zh === "undefined") {
		contact_html_zh += `${contact[i].name_zh}：${contact[i].content}`;
	}else{
		contact_html_zh += `${contact[i].name_zh}：${contact[i].content_zh}`;
	}
	if (i < (contact.length-1)) {
		contact_html_zh += `<p></p>`;
	}
} 
contact_html_zh += `</td></tr></tbody></table>`;

// 版权
var last_update_html_zh = `<font size=3 style="color: #3B3B3B">—&nbsp;&nbsp; 最近更新：${last_update.year}年${last_update.month_zh}月 &nbsp;&nbsp;—</font>`;
var copyright_html_zh = `<font size=2 style="color: #BBBBBB">版权所有 &copy ${last_update.year} ${me.name_zh}</font>`;




// mobile_en.html
// Image
var img_html_m = `<img id="myPicture" src=${me.img} style="float:center; border-radius: 15px" height="400px">`

// News
var news_html_m = "";
for (var i = 0; i < news.length; i++) {  
	news_html_m += `<p>[${news[i].date}] ${news[i].content}</p>`;
}

// Selected Publications
var selected_pub_html_m = "";
for (var i = 0; i < selected_pub.length; i++) {  
	selected_pub_html_m += `<b>${selected_pub[i].name}</b><br>`;
	for (var j = 0; j < selected_pub[i].author.length; j++) {  
		if (selected_pub[i].author[j].is_me === "Yes") {  
			selected_pub_html_m += `<u>${selected_pub[i].author[j].name}</u>`;
		}else{
			selected_pub_html_m += `${href(selected_pub[i].author[j])}`;
		}
		if (j != (selected_pub[i].author.length-1)){
			selected_pub_html_m += ", ";
		}
	} 
	selected_pub_html_m += `<br>`;
	if (selected_pub[i].pub.name === "arXiv"){
		selected_pub_html_m += `<i>${selected_pub[i].pub.name}, ${selected_pub[i].year}</i><br>`;
	}else{
		selected_pub_html_m += `<i>${selected_pub[i].pub.name} (<b>${selected_pub[i].pub.short_name}</b>), ${selected_pub[i].year}</i><br>`;
	}
	for (var j = 0; j < selected_pub[i].extra_link.length; j++) {  
		selected_pub_html_m += `[${href(selected_pub[i].extra_link[j])}] `;
	}
	selected_pub_html_m += `<br><br>`;
} 

// Experience
var experience_icon_html_m = "";
experience_icon_html_m += `<table><tbody><tr><td style="width:30px"></td>`;
// for (var i = 0; i < experience.length; i++) {
// 	// experience_icon_html_m += `<td style="width:200px; height:200px" valign="middle">`;
// 	// experience_icon_html_m += `<a href=${experience[i].institute.link}><img src=${experience[i].institute.img} height="200px"></a>`;
// 	// experience_icon_html_m += `</td>`;
// 	if (i < (experience.length-1)) {
// 		experience_icon_html_m += `<td style="width:50px"></td>`;
// 	}
// }
// experience_icon_html_m += `</tr></tbody></table><br>`;

var experience_html_m = "";
experience_html_m += `<table><tbody><tr><td style="width:30px"></td>`;
for (var i = 0; i < experience.length; i++) {  
	experience_html_m += `${experience[i].job}<br>${experience[i].department.name}<br>${experience[i].institute.name}, ${experience[i].institute.nation}.<br>`;
	if (typeof experience[i].time.end === "undefined") {
		experience_html_m += `${experience[i].time.start.year}.${experience[i].time.start.month} - Present<br>`;
	}else{
		experience_html_m += `${experience[i].time.start.year}.${experience[i].time.start.month} - ${experience[i].time.end.year}.${experience[i].time.end.month}`;
	}
	if (i < (experience.length-1)) {
		experience_html_m += `<table><td style="height:40px"></td></table>`;
	}
}

// Hornors
var hornor_html_m = "";
hornor_html_m += `<ul>`;
for (var i = 0; i < hornor.length; i++) {  
	if (Array.isArray(hornor[i].year)){
		hornor_html_m += `<p><li>${hornor[i].name}, ${hornor[i].year.join("/")}</li></p>`;
	}else{
		hornor_html_m += `<p><li>${hornor[i].name}, ${hornor[i].year}</li></p>`;
	}
}
hornor_html_m += `</ul>`;

// Activities
var activity_html_m = "";
for (var key in activity){
	if (activity.hasOwnProperty(key)) {  
		activity_html_m += `<p><h3>${activity[key].name}: </h3></p>`;
		activity_html_m += `<table><tbody><tr><td style="width:2px"></td><td valign="middle"><div><ul>`;
		for (var i = 0; i < activity[key].list.length; i++) {  
			if (Array.isArray(activity[key].list[i].year)){
				var year = "";
				for (var j = 0; j < activity[key].list[i].year.length; j++) {  
				year += `${activity[key].list[i].year[j]}`;
				if (j < (activity[key].list[i].year.length-1)){
					year += "/";
				}
			}
			activity_html_m += `<p><li>${activity[key].list[i].name.name} (${activity[key].list[i].name.short_name}), ${activity[key].list[i].year.join("/")}</li></p>`;
			}else{
			activity_html_m += `<p><li>${activity[key].list[i].name.name} (${activity[key].list[i].name.short_name}), ${activity[key].list[i].year}</li></p>`;
			}
		}
		activity_html_m += `</ul></div></td></tr></tbody></table><br><br>`;
	}
}

// Contact
var contact_html_m = "";
for (var i = 0; i < contact.length; i++) {  
	contact_html_m += `${contact[i].name}: ${contact[i].content}`;
	if (i < (contact.length-1)) {
		contact_html_m += `<p></p>`;
	}
} 

// Copyright
var last_update_html_m = `<font size=6 style="color: #3B3B3B">—&nbsp;&nbsp; Last updated: ${last_update.month}, ${last_update.year} &nbsp;&nbsp;—</font>`;
var copyright_html_m = `<font size=6 style="color: #BBBBBB">Copyright &copy ${last_update.year} ${me.name}. All Rights Reserved.</font>`;




// mobile.html
// 新闻
var news_html_m_zh = "";
for (var i = 0; i < news.length; i++) {  
	news_html_m_zh += `<p>[${news[i].date}] ${news[i].content_zh}</p>`;
}

// 精选论文
var selected_pub_html_m_zh = "";
for (var i = 0; i < selected_pub.length; i++) {  
	selected_pub_html_m_zh += `<b>${selected_pub[i].name}</b><br>`;
	for (var j = 0; j < selected_pub[i].author.length; j++) {  
		if (selected_pub[i].author[j].is_me === "Yes") {  
			selected_pub_html_m_zh += `<u>${selected_pub[i].author[j].name}</u>`;
		}else{
			selected_pub_html_m_zh += `${href(selected_pub[i].author[j])}`;
		}
		if (j != (selected_pub[i].author.length-1)){
			selected_pub_html_m_zh += ", ";
		}
	} 
	selected_pub_html_m_zh += `<br>`;
	if (selected_pub[i].pub.name === "arXiv"){
		selected_pub_html_m_zh += `<i>${selected_pub[i].pub.name_zh}, ${selected_pub[i].year}</i><br>`;
	}else{
		selected_pub_html_m_zh += `<i>${selected_pub[i].pub.name} (<b>${selected_pub[i].pub.short_name}</b>), ${selected_pub[i].year}</i><br>`;
	}
	for (var j = 0; j < selected_pub[i].extra_link.length; j++) {  
		selected_pub_html_m_zh += `[${href_zh(selected_pub[i].extra_link[j])}] `;
	}
	selected_pub_html_m_zh += `<br><br>`;
} 

// 经历
var experience_icon_html_m_zh = "";
experience_icon_html_m_zh += `<table><tbody><tr><td style="width:30px"></td>`;
// for (var i = 0; i < experience.length; i++) {
// 	// experience_icon_html_m_zh += `<td style="width:200px; height:200px" valign="middle">`;
// 	// experience_icon_html_m_zh += `<a href=${experience[i].institute.link_zh}><img src=${experience[i].institute.img} height="200px"></a>`;
// 	// experience_icon_html_m_zh += `</td>`;
// 	// if (i < (experience.length-1)) {
// 	// 	experience_icon_html_m_zh += `<td style="width:50px"></td>`;
// 	// }
// }
// experience_icon_html_m_zh += `</tr></tbody></table><br>`;

var experience_html_m_zh = "";
experience_html_m_zh += `<table><tbody><tr><td style="width:30px"></td>`;
for (var i = 0; i < experience.length; i++) {  
	experience_html_m_zh += `${experience[i].job_zh}<br>${experience[i].department.name_zh}，${experience[i].institute.name_zh}<br>`;
	if (typeof experience[i].time.end === "undefined") {
		experience_html_m_zh += `${experience[i].time.start.year}年${experience[i].time.start.month}月 - 现在<br>`;
	}else{
		experience_html_m_zh += `${experience[i].time.start.year}年${experience[i].time.start.month}月 - ${experience[i].time.end.year}年${experience[i].time.end.month}月`;
	}
	if (i < (experience.length-1)) {
		experience_html_m_zh += `<table><td style="height:40px"></td></table>`;
	}
}

// 荣誉
var hornor_html_m_zh = "";
hornor_html_m_zh += `<ul>`;
for (var i = 0; i < hornor.length; i++) {  
	if (Array.isArray(hornor[i].year)){
		hornor_html_m_zh += `<p><li>${hornor[i].name_zh}，${hornor[i].year.join("/")}</li></p>`;
	}else{
		hornor_html_m_zh += `<p><li>${hornor[i].name_zh}，${hornor[i].year}</li></p>`;
	}
}
hornor_html_m_zh += `</ul>`;

// 活动
var activity_html_m_zh = "";
for (var key in activity){
	if (activity.hasOwnProperty(key)) {  
		activity_html_m_zh += `<p><h3>${activity[key].name_zh}：</h3></p>`;
		activity_html_m_zh += `<table><tbody><tr><td style="width:2px"></td><td valign="middle"><div><ul>`;
		for (var i = 0; i < activity[key].list.length; i++) {  
			if (Array.isArray(activity[key].list[i].year)){
				var year = "";
				for (var j = 0; j < activity[key].list[i].year.length; j++) {  
				year += `${activity[key].list[i].year[j]}`;
				if (j < (activity[key].list[i].year.length-1)){
					year += "/";
				}
			}
			activity_html_m_zh += `<p><li>${activity[key].list[i].name.name} (${activity[key].list[i].name.short_name})，${activity[key].list[i].year.join("/")}</li></p>`;
			}else{
			activity_html_m_zh += `<p><li>${activity[key].list[i].name.name} (${activity[key].list[i].name.short_name})，${activity[key].list[i].year}</li></p>`;
			}
		}
		activity_html_m_zh += `</ul></div></td></tr></tbody></table><br><br>`;
	}
}

// 联系方式
var contact_html_m_zh = "";
for (var i = 0; i < contact.length; i++) {  
	if (typeof contact[i].content_zh === "undefined") {
		contact_html_m_zh += `${contact[i].name_zh}: ${contact[i].content}`;
	}else{
		contact_html_m_zh += `${contact[i].name_zh}: ${contact[i].content_zh}`;
	}
	if (i < (contact.length-1)) {
		contact_html_m_zh += `<p></p>`;
	}
} 

// 版权
var last_update_html_m_zh = `<font size=6 style="color: #3B3B3B">—&nbsp;&nbsp; 最近更新：${last_update.year}年${last_update.month_zh}月 &nbsp;&nbsp;—</font>`;
var copyright_html_m_zh = `<font size=6 style="color: #BBBBBB">版权所有 &copy ${last_update.year} ${me.name_zh}</font>`;


