本网站由[陶安](https://github.com/antao97/)构建，如果你想在你的个人网站使用本网站的模板，请注明模板来源为[陶安的个人主页](http://antao97.github.io/)。

This personal website is developed by [An Tao](https://github.com/antao97/). If you want to use my template on your personal website, you need to specify the template is borrowed from [An Tao's website](http://antao97.github.io/).

## 数据结构管理

项目现已重构，将数据与代码分离。所有个人资料、论文、新闻等信息存储在 `data/` 目录下的JSON文件中，并按类型分为两类：

1. **数据库/信息性内容** (`data/db/`) - 相对固定的信息，如机构、人名、会议期刊等
2. **个人内容** (`data/content/`) - 需要经常更新的个人资料、论文、新闻等

### 数据文件结构

#### 数据库/信息性内容 (`data/db/`)
- `db/institutes.json` - 机构信息（学校、实验室等）
- `db/people.json` - 合作者信息
- `db/journal.json` - 期刊信息
- `db/conference.json` - 会议信息
- `db/preprint.json` - 预印本信息

#### 个人内容 (`data/content/`)
- `content/me.json` - 个人信息（姓名、职位、联系方式等）
- `content/links.json` - 个人链接（Google Scholar、GitHub等）
- `content/papers.json` - 论文信息
- `content/selected_proj.json` - 精选论文ID列表
- `content/about.json` - 个人介绍（中英文）
- `content/news.json` - 新闻动态
- `content/experience.json` - 教育和工作经历
- `content/honors.json` - 荣誉奖项
- `content/activities.json` - 学术活动
- `content/misc.json` - 其他信息
- `content/contact.json` - 联系方式
- `content/last_update.json` - 最后更新日期

### 构建流程

1. 编辑相应的JSON文件
2. 运行构建脚本生成 `data.js`：
   ```bash
   npm run build
   ```
   或
   ```bash
   node scripts/build.js
   ```

3. 生成的 `data.js` 会被所有HTML页面引用

### 添加新论文

在 `data/content/papers.json` 中添加新条目，包含以下字段：
```json
"paper_id": {
  "short_name": "可选简短名称",
  "name": "论文标题",
  "link": "论文链接",
  "img": "图片路径（可选）",
  "author_ids": ["me", "person_id1", "person_id2"],
  "pub_type": "journal|conference|preprint",
  "pub_id": "期刊或会议ID（参考db/journal.json或db/conference.json）",
  "year": 2025,
  "extra_link": [
    {"name": "arXiv", "name_zh": "论文", "link": "..."}
  ],
  "intro": ["英文介绍段落"],
  "intro_zh": ["中文介绍段落"]
}
```

然后运行构建脚本。

### 添加新条目

- **添加新人物**：在 `data/db/people.json` 中添加
- **添加新机构**：在 `data/db/institutes.json` 中添加
- **添加新荣誉**：在 `data/content/honors.json` 中添加
- **添加新期刊/会议**：在对应的 `data/db/` 文件中添加
- **更新个人内容**：在对应的 `data/content/` 文件中修改

### 注意事项

- 所有JSON文件使用UTF-8编码
- 保持JSON格式正确
- 构建脚本会处理引用关系（如 `author_ids` 转换为 `person.xxx` 引用）
- 模板字符串中使用 `${href(...)}` 和 `${href_zh(...)}` 生成超链接
- 数据库文件（`db/` 目录）相对稳定，个人内容文件（`content/` 目录）需要经常更新