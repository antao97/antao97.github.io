# 个人学术主页系统

本网站由[陶安](https://github.com/antao97/)构建，如果你想在你的个人网站使用本网站的模板，请注明模板来源为[陶安的个人主页](http://antao97.github.io/)。

This personal website is developed by [An Tao](https://github.com/antao97/). If you want to use my template on your personal website, you need to specify the template is borrowed from [An Tao's website](http://antao97.github.io/).

## 🚀 快速开始 (Quick Start)

### 安装依赖
```bash
npm install
```

### 开发模式（自动重建）
```bash
npm run watch
```
当 `data/` 目录下的JSON文件发生变化时，自动重新生成 `data.js`。

### 手动构建
```bash
npm run build
```
或
```bash
node scripts/build.js
```

### 查看效果
打开 `index.html`（中文版）或 `index_en.html`（英文版）在浏览器中预览。

## 📁 项目结构

```
├── data/                 # 数据目录
│   ├── db/              # 数据库/信息性内容（相对固定）
│   │   ├── institutes.json  # 机构信息
│   │   ├── people.json      # 合作者信息
│   │   ├── journal.json     # 期刊信息
│   │   ├── conference.json  # 会议信息
│   │   └── preprint.json    # 预印本信息
│   │
│   └── content/         # 个人内容（经常更新）
│       ├── me.json          # 个人信息
│       ├── links.json       # 个人链接
│       ├── papers.json      # 论文信息
│       ├── projects.json    # 项目信息
│       ├── selected_proj.json # 精选项目ID列表
│       ├── about.json       # 个人介绍
│       ├── news.json        # 新闻动态
│       ├── experience.json  # 教育和工作经历
│       ├── honors.json      # 荣誉奖项（可选）
│       ├── teaching.json    # 任教信息（可选）
│       ├── activities.json  # 学术活动
│       ├── misc.json        # 其他信息（可选）
│       ├── contact.json     # 联系方式
│       ├── break_news.json  # 置顶新闻
│       └── last_update.json # 最后更新日期
│
├── scripts/build.js     # 构建脚本
├── data.js              # 生成的JavaScript数据文件（不要直接编辑）
├── index.html           # 中文版主页
├── index_en.html        # 英文版主页
├── mobile.html          # 中文移动版
└── mobile_en.html       # 英文移动版
```

## 🔧 如何使用

### 1. 更新个人信息
编辑 `data/content/me.json`：
```json
{
  "name": "Your Name",
  "name_zh": "你的中文名",
  "img": "image/your_photo.jpg",
  "job": "Your Position",
  "job_zh": "你的职位",
  "institute": "Your Institute",
  "institute_zh": "你的机构",
  "email": "your.email@example.com"
}
```

### 2. 添加新论文
在 `data/content/papers.json` 中添加新条目：
```json
"unique_paper_id": {
  "short_name": "可选简短名称",
  "name": "Paper Title",
  "link": "https://arxiv.org/abs/...",
  "img": "image/paper_preview.png",  // 可选
  "author_ids": ["me", "collaborator_id1", "collaborator_id2"],
  "pub_type": "journal|conference|preprint|arxiv|code|book_transl|project",
  "pub_id": "期刊或会议ID（参考db/目录下的文件）",
  "year": 2025,
  "extra_link": [
    {"name": "arXiv", "name_zh": "论文", "link": "..."},
    {"name": "Code", "name_zh": "代码", "link": "https://github.com/..."}
  ],
  "intro": ["First paragraph of English introduction.", "Second paragraph..."],
  "intro_zh": ["中文介绍第一段。", "中文介绍第二段。"],
  "author_display_in_chinese": true  // 可选，默认为true
}
```

**注意**：
- `author_ids` 中的 `"me"` 表示你自己
- 其他作者需要在 `data/db/people.json` 中定义
- 论文会自动出现在对应分类（期刊、会议、预印本等）

### 3. 添加精选项目
编辑 `data/content/selected_proj.json`，添加论文ID到数组中：
```json
["paper_id1", "paper_id2", "paper_id3"]
```

### 4. 添加新闻动态
在 `data/content/news.json` 中添加：
```json
{
  "date": "2025.01.15",
  "content": "News content in English.",
  "content_zh": "中文新闻内容。",
  "show": true  // 可选，false表示隐藏
}
```

### 5. 更新个人介绍
编辑 `data/content/about.json`，包含中英文段落：
```json
{
  "en": [
    ["First paragraph in English part 1.", "Part 2.", "Part 3."],
    ["Second paragraph..."]
  ],
  "zh": [
    ["中文第一段第一部分。", "第二部分。", "第三部分。"],
    ["中文第二段..."]
  ]
}
```

### 6. 更新经历
编辑 `data/content/experience.json`：
```json
{
  "institute_id": "tsinghua",  // 参考 data/db/institutes.json
  "department_id": "auto",     // 可选，部门ID
  "job": "Ph.D. Student",
  "job_zh": "博士研究生",
  "time": {
    "start": {"year": "2019", "month": "8"},
    "end": {"year": "2024", "month": "6"}
  }
}
```

### 7. 添加新合作者
在 `data/db/people.json` 中添加：
```json
"person_id": {
  "name": "English Name",
  "name_zh": "中文名",
  "link": "https://their.website",
  "link_zh": "https://their.chinese.website"  // 可选
}
```

### 8. 添加新机构
在 `data/db/institutes.json` 中添加：
```json
"institute_id": {
  "name": "English Name",
  "name_zh": "中文名",
  "link": "https://institute.website",
  "img": "image/institute_logo.png",  // 可选
  "city": "City",
  "city_zh": "城市",
  "nation": "Country",
  "nation_zh": "国家"
}
```

## 📝 模板字符串

在JSON文件中可以使用模板字符串自动生成超链接：

- `${href(person.john_doe)}` - 英文链接
- `${href_zh(person.john_doe)}` - 中文链接
- `${href(institute.tsinghua)}` - 机构英文链接
- `${href_zh(institute.tsinghua)}` - 机构中文链接

示例（在 `about.json` 中）：
```json
["I studied at ${href(institute.tsinghua)}."]
```

## 🚨 注意事项

1. **编码格式**：所有JSON文件使用UTF-8编码
2. **JSON格式**：保持正确的JSON格式，可使用在线校验工具检查
3. **构建流程**：编辑JSON文件后，需要运行 `npm run build` 重新生成 `data.js`
4. **不要直接编辑**：不要直接编辑 `data.js` 文件，它会被构建脚本覆盖
5. **图片管理**：图片放在 `image/` 目录下，在JSON中引用相对路径
6. **多语言支持**：所有内容都需要提供中英文版本

## 🔄 更新日志

### 2025年2月更新
- 重构为数据驱动架构，分离数据和代码
- 支持模板字符串自动生成超链接
- 添加自动构建和监控脚本
- 支持移动端适配

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件。