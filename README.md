# 个人学术主页系统

本网站由[陶安](https://github.com/antao97/)构建，如果你想在你的个人网站使用本网站的模板，请注明模板来源为[陶安的个人主页](http://antao97.github.io/)。

This personal website is developed by [An Tao](https://github.com/antao97/). If you want to use my template on your personal website, you need to specify the template is borrowed from [An Tao's website](http://antao97.github.io/).

## 快速开始 (Quick Start)

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

## 项目结构

```
├── data/                 # 数据目录
│   ├── db/              # 参考数据库（被内容数据引用）
│   │   ├── institutes.json  # 机构信息
│   │   ├── people.json      # 合作者信息
│   │   ├── journal.json     # 期刊信息
│   │   ├── conference.json  # 会议信息
│   │   └── preprint.json    # 预印本/代码托管平台信息
│   │
│   └── content/         # 个人内容（经常更新）
│       ├── me.json              # 个人信息
│       ├── links.json           # 个人链接（Google Scholar、GitHub等）
│       ├── about.json           # 个人介绍（中英文）
│       ├── papers.json          # 出版物（论文）信息
│       ├── projects.json        # 项目（代码项目）信息
│       ├── selected_pub.json    # 主页精选出版物ID列表
│       ├── selected_proj.json   # 主页精选项目ID列表
│       ├── pub_section_order.json   # 出版物分类顺序
│       ├── proj_section_order.json  # 项目分类顺序
│       ├── section_order.json   # 通用分类顺序（备用）
│       ├── news.json            # 新闻动态
│       ├── break_news.json      # 置顶新闻
│       ├── experience.json      # 教育和工作经历
│       ├── teaching.json        # 任教信息（可选）
│       ├── activities.json      # 学术活动
│       ├── contact.json         # 联系方式
│       └── last_update.json     # 最后更新日期（自动生成）
│
├── scripts/build.js     # 构建脚本（JSON → data.js）
├── data.js              # 生成的JavaScript数据文件（不要直接编辑）
│
├── index.html           # 中文桌面版主页
├── index_en.html        # 英文桌面版主页
├── mobile.html          # 中文移动版主页
├── mobile_en.html       # 英文移动版主页
│
├── paper/               # 全部出版物页面
│   ├── index.html       # 中文桌面版
│   ├── index_en.html    # 英文桌面版
│   ├── mobile.html      # 中文移动版
│   └── mobile_en.html   # 英文移动版
│
├── project/             # 全部项目工作页面
│   ├── index.html       # 中文桌面版
│   ├── index_en.html    # 英文桌面版
│   ├── mobile.html      # 中文移动版
│   └── mobile_en.html   # 英文移动版
│
├── image/               # 图片资源
├── style.css            # 基础样式
├── desktop.css          # 桌面端覆盖样式
└── mobile.css           # 移动端覆盖样式
```

## 架构说明

本项目采用**数据驱动的纯静态网站**架构，不依赖任何前端框架：

```
JSON 数据文件 → build.js 构建脚本 → data.js → HTML 页面动态渲染
```

- **数据层**：所有内容存储在 `data/` 下的 JSON 文件中，数据与展示分离
- **构建层**：`build.js` 读取 JSON 数据，解析引用关系，生成 `data.js`
- **展示层**：HTML 页面通过 `<script src="./data.js">` 加载数据，在浏览器端动态填充内容

### 关键机制

1. **数据引用**：`papers.json` 中的 `author_ids` 引用 `people.json`，`pub_id` 引用 `journal.json`/`conference.json`/`preprint.json`
2. **手写HTML生成**：`data.js` 由两部分组成——`// index_en.html` 标记之前为自动生成部分，之后为手写的 HTML 生成逻辑。`build.js` 重建时会保留手写部分
3. **多语言**：所有数据提供 `name`/`name_zh`、`content`/`content_zh` 等成对字段
4. **多设备**：桌面版通过 UA 检测自动跳转到移动版
5. **空板块隐藏**：`adjustNavigation()` 函数自动隐藏无内容板块及其导航链接

## 如何使用

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

### 2. 添加新出版物
在 `data/content/papers.json` 中添加新条目：
```json
"unique_paper_id": {
  "short_name": "可选简短名称",
  "name": "Paper Title",
  "name_zh": "论文中文标题",
  "link": "https://arxiv.org/abs/...",
  "img": "image/paper_preview.png",
  "author_ids": ["me", "collaborator_id1", "collaborator_id2"],
  "pub_type": "journal",
  "pub_id": "期刊或会议ID（参考db/目录下的文件）",
  "year": 2025,
  "volume": 1,
  "extra_link": [
    {"name": "arXiv", "name_zh": "论文", "link": "..."},
    {"name": "Code", "name_zh": "代码", "link": "https://github.com/..."}
  ],
  "intro": ["English introduction paragraph."],
  "intro_zh": ["中文介绍段落。"],
  "author_display_in_chinese": true
}
```

**`pub_type` 取值**：
| pub_type | 说明 | 分类归属 |
|----------|------|----------|
| `journal` | 期刊论文 | 出版物 |
| `conference` | 会议论文 | 出版物 |
| `book_transl` | 翻译著作 | 出版物 |
| `code` | 代码项目 | 项目工作 |

**注意**：
- `author_ids` 中的 `"me"` 表示你自己
- 其他作者需要在 `data/db/people.json` 中定义
- 出版物自动按 `pub_section_order.json` 定义的分类显示在出版物页面

### 3. 添加新项目
在 `data/content/projects.json` 中添加新条目，结构同出版物，但 `pub_type` 为 `"code"`，`pub_id` 引用 `preprint.json` 中的条目（如 `"github"`）。

### 4. 设置主页精选内容
主页的"出版物"和"项目工作"板块各自展示精选内容：

**精选出版物**：编辑 `data/content/selected_pub.json`
```json
["paper_id1", "paper_id2"]
```

**精选项目**：编辑 `data/content/selected_proj.json`
```json
["project_id1"]
```

### 5. 自定义分类顺序
- 出版物分类：编辑 `data/content/pub_section_order.json`
- 项目分类：编辑 `data/content/proj_section_order.json`

每个分类条目格式：
```json
{
  "id": "journal",
  "name": "Journal Papers",
  "name_zh": "期刊论文",
  "filter_type": "journal"
}
```

`filter_type` 支持的值：`journal`、`conference`、`book_transl`、`arxiv`（按 pub.name === "arXiv" 过滤）、`code`

### 6. 添加新闻动态
在 `data/content/news.json` 中添加：
```json
{
  "date": "2025.01.15",
  "content": "News content in English.",
  "content_zh": "中文新闻内容。",
  "show": true
}
```
设置 `"show": false` 可隐藏该条新闻。

### 7. 更新个人介绍
编辑 `data/content/about.json`，支持模板字符串：
```json
{
  "en": [
    ["I studied at ${href(institute.tsinghua)}."]
  ],
  "zh": [
    ["我曾在${href_zh(institute.tsinghua)}学习。"]
  ]
}
```

### 8. 更新经历
编辑 `data/content/experience.json`：
```json
{
  "institute_id": "tsinghua",
  "department_id": "auto",
  "job": "Ph.D. Student",
  "job_zh": "博士研究生",
  "time": {
    "start": {"year": "2019", "month": "8"},
    "end": {"year": "2024", "month": "6"}
  }
}
```
省略 `end` 表示当前在任（显示 "Present" / "现在"）。

### 9. 添加新合作者
在 `data/db/people.json` 中添加：
```json
"person_id": {
  "name": "English Name",
  "name_zh": "中文名",
  "link": "https://their.website",
  "link_zh": "https://their.chinese.website"
}
```

### 10. 添加新机构
在 `data/db/institutes.json` 中添加：
```json
"institute_id": {
  "name": "English Name",
  "name_zh": "中文名",
  "link": "https://institute.website",
  "img": "image/institute_logo.png",
  "city": "City",
  "city_zh": "城市",
  "nation": "Country",
  "nation_zh": "国家"
}
```

### 11. 添加新期刊/会议
在 `data/db/journal.json` 或 `data/db/conference.json` 中添加：
```json
"venue_id": {
  "name": "Full Venue Name",
  "short_name": "Abbreviation",
  "name_zh": "中文名"
}
```

## 模板字符串

在 `about.json` 和 `news.json` 中可使用模板字符串自动生成超链接：

- `${href(person.john_doe)}` — 英文链接
- `${href_zh(person.john_doe)}` — 中文链接
- `${href(institute.tsinghua)}` — 机构英文链接
- `${href_zh(institute.tsinghua)}` — 机构中文链接

## 注意事项

1. **构建流程**：编辑 JSON 文件后，必须运行 `npm run build` 重新生成 `data.js`
2. **不要直接编辑 `data.js`**：它由构建脚本生成，修改会在下次构建时丢失。例外：`// index_en.html` 标记之后的手写 HTML 生成部分会被 `build.js` 保留
3. **图片管理**：图片放在 `image/` 目录下，在 JSON 中使用相对路径引用
4. **多语言**：所有内容都需要提供中英文版本
5. **禁用文件**：给文件扩展名加 `.disabled` 可禁用该数据文件（如 `honors.json.disabled`）
6. **隐藏活动**：`activities.json` 中以 `__` 前缀开头的键会被跳过
7. **编码格式**：所有 JSON 文件使用 UTF-8 编码

## 更新日志

### 2025年5月更新
- 将"项目工作"拆分为"出版物"和"项目工作"两个独立栏目
- 主页新增"出版物"和"项目工作"精选展示板块
- 新增 `paper/` 全部出版物页面
- 新增 `project/` 全部项目工作页面
- 新增 `selected_pub.json`、`pub_section_order.json`、`proj_section_order.json` 配置文件
- 导航栏新增"出版物"和"项目工作"两个独立入口

### 2025年2月更新
- 重构为数据驱动架构，分离数据和代码
- 支持模板字符串自动生成超链接
- 添加自动构建和监控脚本
- 支持移动端适配

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件。
