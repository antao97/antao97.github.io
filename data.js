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
    var author = paper.author[i];
    var displayChinese = zh === "Yes" && paper.author_display_in_chinese !== false;
    if (author.is_me === "Yes") {
      if (displayChinese) {
        str += `<u>${author.name_zh}</u>`;
      } else {
        str += `<u>${author.name}</u>`;
      }
    } else {
      if (displayChinese) {
        str += `${href_zh(author)}`;
      } else {
        str += `${href(author)}`;
      }
    }
    if (i != (paper.author.length-1)){
      str += ", ";
    }
  }
  str += `<br>`;
  if (paper.pub.name === "arXiv"){
    str += `<i>${paper.pub.name}, ${paper.year}</i><br>`;
  }else{
    if (paper.pub.short_name) {
      str += `<i>${paper.pub.name} (<b>${paper.pub.short_name}</b>), ${paper.year}</i><br>`;
    } else {
      str += `<i>${paper.pub.name}, ${paper.year}</i><br>`;
    }
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
	"name": "An Tao",
	"name_zh": "陶安",
	"img": "image/An_Tao.jpg",
	"job": "Postdoctoral Research Fellow",
	"job_zh": "博士后",
	"institute": "Shanghai Conservatory of Music",
	"institute_zh": "上海音乐学院",
	"email": "taoan2008@shcmusic.edu.cn",
	"is_me": "Yes",
	"icon": "image/icon.jpg"
};

// 个人链接

var my_link = [
	{
		"name": "Google Scholar",
		"name_zh": "谷歌学术",
		"link": "https://scholar.google.com/citations?user=0FyWZPMAAAAJ&hl=en",
		"link_zh": "https://scholar.google.com.hk/citations?hl=zh-CN&user=0FyWZPMAAAAJ"
	},
	{
		"name": "Github",
		"name_zh": "GitHub代码库",
		"link": "https://github.com/antao97"
	}
];

// 使用到的机构信息

var institute = {
	"ivg": {
		"name": "i-VisionGroup",
		"name_zh": "IVG视觉组",
		"link": "http://ivg.au.tsinghua.edu.cn/index.php",
		"city": "Beijing",
		"city_zh": "北京",
		"nation": "China",
		"nation_zh": "中国"
	},
	"auto": {
		"name": "Department of Automation",
		"name_zh": "自动化系",
		"link": "http://www.au.tsinghua.edu.cn",
		"city": "Beijing",
		"city_zh": "北京",
		"nation": "China",
		"nation_zh": "中国"
	},
	"tsinghua": {
		"name": "Tsinghua University",
		"name_zh": "清华大学",
		"link": "https://www.tsinghua.edu.cn/publish/thu2018en/index.html",
		"link_zh": "https://www.tsinghua.edu.cn",
		"img": "image/tsinghua.png",
		"nation": "China",
		"nation_zh": "中国",
		"city": "Beijing",
		"city_zh": "北京"
	},
	"seu": {
		"name": "Southeast University",
		"name_zh": "东南大学",
		"link": "http://www.seu.edu.cn/english/main.html",
		"link_zh": "http://www.seu.edu.cn",
		"img": "image/seu.jpg",
		"nation": "China",
		"nation_zh": "中国",
		"city": "Nanjing, Jiangsu",
		"city_zh": "江苏南京"
	},
	"radio": {
		"name": "School of Information Science and Engineering",
		"name_zh": "信息科学与工程学院",
		"link": "http://radio.seu.edu.cn",
		"city": "Nanjing, Jiangsu",
		"city_zh": "江苏南京",
		"nation": "China",
		"nation_zh": "中国"
	},
	"cartin": {
		"name": "Centre for Advanced Robotics Technology Innovation",
		"short_name": "CARTIN",
		"name_zh": "先进机器人技术创新中心",
		"link": "https://www.ntu.edu.sg/cartin",
		"city": "Singapore",
		"city_zh": "新加坡",
		"nation": "Singapore",
		"nation_zh": "新加坡"
	},
	"ntu_eee": {
		"name": "School of Electrical and Electronic Engineering",
		"short_name": "School of EEE",
		"name_zh": "电气与电子工程学院",
		"link": "https://www.ntu.edu.sg/eee",
		"city": "Singapore",
		"city_zh": "新加坡",
		"nation": "Singapore",
		"nation_zh": "新加坡"
	},
	"ntu": {
		"name": "Nanyang Technological University",
		"short_name": "NTU",
		"name_zh": "南洋理工大学",
		"img": "image/ntu.webp",
		"link": "https://www.ntu.edu.sg/",
		"link_zh": "https://www.ntu.edu.sg/main/cn",
		"nation": "Singapore",
		"nation_zh": "新加坡",
		"city": "Singapore",
		"city_zh": "新加坡"
	},
	"shcmusic": {
		"name": "Shanghai Conservatory of Music",
		"short_name": "SHCM",
		"name_zh": "上海音乐学院",
		"link": "https://www.shcmusic.edu.cn",
		"link_zh": "https://www.shcmusic.edu.cn",
		"nation": "China",
		"nation_zh": "中国",
		"city": "Shanghai",
		"city_zh": "上海"
	},
	"music_engineering": {
		"name": "Department of Music Engineering",
		"name_zh": "音乐工程系",
		"link": "https://www.shcmusic.edu.cn/1599/main.psp",
		"city": "Shanghai",
		"city_zh": "上海",
		"nation": "China",
		"nation_zh": "中国"
	},
	"rdfz": {
		"name": "High School Affiliated to Renmin University of China",
		"name_zh": "中国人民大学附属中学",
		"link": "http://www.rdfz.cn",
		"city": "Beijing",
		"city_zh": "北京",
		"nation": "China",
		"nation_zh": "中国"
	}
};

// 使用到的人物信息

var person = {
	"yueqi_duan": {
		"name": "Yueqi Duan",
		"name_zh": "段岳圻",
		"link": "https://duanyueqi.github.io/",
		"link_zh": "http://web.ee.tsinghua.edu.cn/duanyueqi/zh_CN/index.htm"
	},
	"jiwen_lu": {
		"name": "Jiwen Lu",
		"name_zh": "鲁继文",
		"link": "http://ivg.au.tsinghua.edu.cn/Jiwen_Lu/",
		"link_zh": "https://www.au.tsinghua.edu.cn/info/1078/2330.htm"
	},
	"jie_zhou": {
		"name": "Jie Zhou",
		"name_zh": "周杰",
		"link": "https://www.tsinghua.edu.cn/publish/thu2018en/index.html",
		"link_zh": "https://www.au.tsinghua.edu.cn/info/1078/1635.htm"
	},
	"yingqi_wang": {
		"name": "Yingqi Wang",
		"name_zh": "王英琦",
		"link": "https://github.com/HilbertWang2002"
	},
	"yi_wei": {
		"name": "Yi Wei",
		"name_zh": "韦祎",
		"link": "https://weiyithu.github.io/"
	},
	"zai_zhang": {
		"name": "Zhang Zai",
		"name_zh": "张载",
		"link": "https://en.wikipedia.org/wiki/Zhang_Zai",
		"link_zh": "https://baike.baidu.com/item/%E5%BC%A0%E8%BD%BD/5129?fr=aladdin"
	},
	"ning_xu": {
		"name": "Ning Xu",
		"name_zh": "徐宁",
		"link": "http://palm.seu.edu.cn/xuning/"
	},
	"xin_geng": {
		"name": "Xin Geng",
		"name_zh": "耿新",
		"link": "http://palm.seu.edu.cn/xgeng/"
	},
	"chenglun_peng": {
		"name": "Chenglun Peng",
		"name_zh": "彭成伦",
		"link": "http://palm.seu.edu.cn/members.html"
	},
	"tan_yap_peng": {
		"name": "Tan Yap Peng",
		"name_zh": "Tan Yap Peng",
		"link": "https://personal.ntu.edu.sg/eyptan/"
	},
	"ziwei_wang": {
		"name": "Ziwei Wang",
		"name_zh": "王子为",
		"link": "https://ziweiwangthu.github.io/"
	},
	"jian_yang": {
		"name": "Jian Yang",
		"name_zh": "杨健",
		"link": "https://scholar.google.com/citations?user=cBDyfFcAAAAJ",
		"link_zh": "https://www.shcmusic.edu.cn/2017/0323/c1636a22962/page.htm"
	}
};

// 使用到的期刊和会议信息

var preprint = {
	"arxiv": {
		"name": "arXiv",
		"name_zh": "预印"
	},
	"github": {
		"name": "GitHub",
		"name_zh": "GitHub项目"
	}
};

var journal = {
	"tip": {
		"name": "IEEE Transactions on Image Processing",
		"short_name": "TIP"
	},
	"tcsvt": {
		"name": "IEEE Transactions on Circuits and Systems for Video Technology",
		"short_name": "TCSVT"
	}
};

var conference = {
	"cvpr": {
		"name": "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
		"short_name": "CVPR"
	},
	"iccv": {
		"name": "IEEE/CVF International Conference on Computer Vision",
		"short_name": "ICCV"
	},
	"eccv": {
		"name": "European Conference on Computer Vision",
		"short_name": "ECCV"
	},
	"icme": {
		"name": "IEEE International Conference on Multimedia and Expo",
		"short_name": "ICME"
	},
	"threedv": {
		"name": "IEEE International Conference on 3D Vision",
		"short_name": "3DV"
	},
	"icip": {
		"name": "IEEE International Conference on Image Processing",
		"short_name": "ICIP"
	},
	"fg": {
		"name": "IEEE International Conference on Automatic Face and Gesture Recognition",
		"short_name": "FG"
	},
	"ijcai": {
		"name": "International Joint Conference on Artificial Intelligence",
		"short_name": "IJCAI"
	},
	"pricai": {
		"name": "Pacific Rim International Conference on Artificial Intelligence",
		"short_name": "PRICAI"
	},
	"acm_mm": {
		"name": "ACM Multimedia",
		"short_name": "ACM MM"
	},
	"isps2025": {
		"name": "International Symposium on Performance Science 2025 (Shanghai)",
		"name_zh": "第十届表演科学国际研讨会（上海）",
		"short_name": "ISPS 2025"
	}
};

// 章节顺序

var section_order = [
	{
		"id": "code",
		"name": "Code Projects",
		"name_zh": "代码项目",
		"filter_type": "code"
	},
	{
		"id": "book_transl",
		"name": "Book Translation",
		"name_zh": "翻译著作",
		"filter_type": "book_transl"
	},
	{
		"id": "arxiv",
		"name": "Preprint Papers",
		"name_zh": "预印论文",
		"filter_type": "arxiv"
	},
	{
		"id": "journal",
		"name": "Journal Papers",
		"name_zh": "期刊论文",
		"filter_type": "journal"
	},
	{
		"id": "conference",
		"name": "Conference Papers",
		"name_zh": "会议论文",
		"filter_type": "conference"
	}
];

// 我的文章信息

var paper = {
	lgm: {
		short_name: "Dynamics-aware Attack",
		name: "Dynamics-aware Adversarial Attack of Adaptive Neural Networks",
		link: "https://arxiv.org/abs/2210.08159",
		img: "image/attack.png",
		author: [me, person.yueqi_duan, person.yingqi_wang, person.jiwen_lu, person.jie_zhou],
		pub: journal.tcsvt,
		type: "journal",
		year: 2024,
		extra_link: [
	{
		"name": "arXiv",
		"name_zh": "论文",
		"link": "https://arxiv.org/abs/2210.08159"
	},
	{
		"name": "Code",
		"name_zh": "代码",
		"link": "https://github.com/antao97/LGM"
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
],
		author_display_in_chinese: false
	},
	seggroup: {
		short_name: "SegGroup",
		name: "SegGroup: Seg-Level Supervision for 3D Instance and Semantic Segmentation",
		link: "https://arxiv.org/abs/2012.10217",
		img: "image/seggroup.png",
		author: [me, person.yueqi_duan, person.yi_wei, person.jiwen_lu, person.jie_zhou],
		pub: journal.tip,
		type: "journal",
		year: 2022,
		extra_link: [
	{
		"name": "arXiv",
		"name_zh": "论文",
		"link": "https://arxiv.org/abs/2012.10217"
	},
	{
		"name": "Code",
		"name_zh": "代码",
		"link": "https://github.com/antao97/SegGroup"
	},
	{
		"name": "Zhihu",
		"name_zh": "知乎",
		"link": "https://zhuanlan.zhihu.com/p/536482202"
	},
	{
		"name": "FAQ",
		"name_zh": "常见问题",
		"link": "https://github.com/antao97/SegGroup/blob/main/FAQ.md"
	}
],
		intro: [
	"By fully taking the advantages of locations, we design a weakly supervised point cloud segmentation algorithm that only requires clicking on one point per instance to indicate its location for annotation.",
	"Based on the over-segmentation technique, we further extend the labeling information into segments to enlarge the labeled point number.",
	"Our seg-level supervised method achieves competitive performance with fully-supervised methods and surpasses other weakly-supervised methods."
],
		intro_zh: [
	"在点云实例分割中，为了充分利用实例位置信息的优势，本文设计了一个弱监督点云分割算法，仅需要对每个实例中一个点进行标注以指示其位置，并将对点的标注信息扩展至其所属过分割块以增大标注量。",
	"我们过分割块级标签监督的方法取得了与全监督方法相比拟的性能，同时超越了其他弱监督方法。"
],
		author_display_in_chinese: false
	},
	le: {
		name: "Label Enhancement for Label Distribution Learning",
		link: "https://www.ijcai.org/Proceedings/2018/0406.pdf",
		author: [person.ning_xu, me, person.xin_geng],
		pub: conference.ijcai,
		type: "conference",
		year: 2018,
		extra_link: [
	{
		"name": "paper",
		"name_zh": "论文",
		"link": "https://www.ijcai.org/Proceedings/2018/0406.pdf"
	},
	{
		"name": "Slides",
		"name_zh": "幻灯片",
		"link": "../slides/IJCAI18_Label Enhancement for Label Distribution Learning.pdf"
	}
],
		author_display_in_chinese: false
	},
	lemlp: {
		name: "Label Embedding Based on Multi-Scale Locality Preservation",
		link: "https://www.ijcai.org/Proceedings/2018/0364.pdf",
		author: [person.chenglun_peng, me, person.xin_geng],
		pub: conference.ijcai,
		type: "conference",
		year: 2018,
		extra_link: [
	{
		"name": "paper",
		"name_zh": "论文",
		"link": "https://www.ijcai.org/Proceedings/2018/0364.pdf"
	},
	{
		"name": "Slides",
		"name_zh": "幻灯片",
		"link": "../slides/IJCAI18_Label Embedding Based on Multi-Scale Locality Preservation.pdf"
	}
],
		author_display_in_chinese: false
	},
	my_le: {
		name: "Labeling Information Enhancement for Multi-label Learning with Low-Rank Subspace",
		link: "https://link.springer.com/chapter/10.1007/978-3-319-97304-3_51",
		author: [me, person.ning_xu, person.xin_geng],
		pub: conference.pricai,
		type: "conference",
		year: 2018,
		extra_link: [
	{
		"name": "paper",
		"name_zh": "论文",
		"link": "https://link.springer.com/chapter/10.1007/978-3-319-97304-3_51"
	}
],
		author_display_in_chinese: false
	},
	shcmthesis: {
		short_name: "SHCM Thesis Template",
		name: "ShcmThesis: Shanghai Conservatory of Music LaTeX Thesis Template",
		link: "https://github.com/antao97/shcmthesis",
		img: "image/shcmthesis.png",
		author: [me],
		pub: preprint.github,
		type: "code",
		year: 2025,
		extra_link: [
	{
		"name": "GitHub",
		"name_zh": "GitHub仓库",
		"link": "https://github.com/antao97/shcmthesis"
	},
	{
		"name": "Zhihu",
		"name_zh": "知乎文档",
		"link": "https://zhuanlan.zhihu.com/p/14553247725"
	}
],
		intro: [
	"ShcmThesis is a LaTeX thesis template specifically designed for Shanghai Conservatory of Music (SHCM).",
	"This template supports bachelor's, master's, and doctoral theses, providing a standardized format for academic writing at SHCM.",
	"Based on the Tsinghua University thesis template (ThuThesis), it has been adapted to meet SHCM's specific formatting requirements and guidelines.",
	"The template simplifies the thesis writing process, ensuring compliance with institutional standards while maintaining the flexibility and quality of LaTeX typesetting."
],
		intro_zh: [
	"ShcmThesis是专门为上海音乐学院设计的LaTeX学位论文模板。",
	"该模板支持本科综合论文训练、硕士论文和博士论文，为上海音乐学院的学术写作提供标准化格式。",
	"基于清华大学学位论文模板（ThuThesis）开发，根据上海音乐学院的格式要求和规范进行了适配修改。",
	"模板简化了论文写作过程，在保持LaTeX排版灵活性和质量的同时，确保符合学院的标准规范。"
],
		author_display_in_chinese: true
	},
};

// 精选项目信息

var selected_proj = [paper.shcmthesis];

// 个人介绍

var about = [
	[`I'm currently working as a postdoctoral research fellow at ${href(institute.shcmusic)} (SHCM),`, `supervised by Prof. ${href(person.jian_yang)}.`, `I received my Doctor of Engineering (Ph.D.) degree from ${href(institute.tsinghua)} and Bachelor of Engineering (B.Eng.) degree from ${href(institute.seu)}.`],
	[`During my Ph.D. career in Tsinghua, I conducted research in computer vision in the field of artificial intelligence.`, `After joining ${href(institute.shcmusic)}, my research focuses on AI for music, especially on professional analysis and understanding of classical music, as well as Chinese ethnic music.`],
	[`I am also a guqin enthusiast, having been introduced to it in 2022 through an elective course offered by Tsinghua University.`, `I have studied piano as an amateur since the age of five, for about ten years.`],
];

var about_zh = [
	[`我目前在${href_zh(institute.shcmusic)}从事博士后工作，`, `合作导师是${href_zh(person.jian_yang)}教授。`, `我在${href_zh(institute.tsinghua)}${href_zh(institute.auto)}取得工学博士学位，`, `导师是${href_zh(person.jie_zhou)}教授和${href_zh(person.jiwen_lu)}教授。`, `我本科就读于${href_zh(institute.seu)}的${href_zh(institute.radio)}，获得工学学士学位。`],
	[`我在清华大学读博期间开展了人工智能领域中计算机视觉方面的研究。`, `来到上海音乐学院之后，我的研究专注于音乐人工智能，尤其关注古典音乐的专业性分析理解，以及中国的民族音乐。`],
	[`我同时还是一名古琴爱好者，于2022年启蒙自清华大学校设古琴选修课。`, `我曾自五岁起业余学习钢琴，持续约十年。`],
];

// 新闻

var break_news = `I am planning to conduct research related to guqin music, as well as studies on the understanding, analysis, and generation of classical music. If you are interested in collaboration, please feel free to contact me!`;

var break_news_zh = `我正在计划开展古琴音乐相关的研究，以及与古典音乐理解分析/生成相关的研究，如果你有合作意向，欢迎联系我！`;

var news = [
	{
		date: "2025.09.30",
		content: `I join ${href(institute.shcmusic)} as a postdoctoral research fellow!`,
		content_zh: `我加入${href_zh(institute.shcmusic)}成为了一名博士后研究员！`,
	},
	{
		date: "2024.10.07",
		content: `I join the ${href(institute.cartin, institute.cartin.short_name)} lab in ${href(institute.ntu, institute.ntu.short_name)} as a postdoctoral research fellow!`,
		content_zh: `我加入新加坡${href_zh(institute.ntu)}的${href_zh(institute.cartin)}成为了一名博士后研究员！`,
	},
	{
		date: "2024.06.28",
		content: `I obtain a Ph.D. in Engineering from Tsinghua University!`,
		content_zh: `我获得了清华大学工学博士学位！`,
	},
	{
		date: "2021.11.19",
		content: `I pass the Ph.D. qualifying exam of Tsinghua University and become a Ph.D. candidate!`,
		content_zh: `我通过了清华大学博士资格考试，成为了一名博士候选人！`,
	},
];

// 经历

var experience = [
	{
		institute: institute.shcmusic,
		department: institute.music_engineering,
		job: "Postdoctoral Research Fellow",
		job_zh: "博士后研究员",
		time: {
	"start": {
		"year": "2025",
		"month": "9"
	}
},
		city: "Shanghai",
		city_zh: "上海",
	},
	{
		institute: institute.ntu,
		department: institute.ntu_eee,
		job: "Postdoctoral Research Fellow",
		job_zh: "博士后研究员",
		time: {
	"start": {
		"year": "2024",
		"month": "10"
	},
	"end": {
		"year": "2025",
		"month": "8"
	}
},
		city: "Singapore",
		city_zh: "新加坡",
	},
	{
		institute: institute.tsinghua,
		department: institute.auto,
		job: "Ph.D. Degree",
		job_zh: "工学博士",
		time: {
	"start": {
		"year": "2019",
		"month": "8"
	},
	"end": {
		"year": "2024",
		"month": "6"
	}
},
		city: "Beijing",
		city_zh: "北京",
	},
	{
		institute: institute.seu,
		department: institute.radio,
		job: "B.Eng. Degree",
		job_zh: "工学学士",
		time: {
	"start": {
		"year": "2015",
		"month": "8"
	},
	"end": {
		"year": "2019",
		"month": "6"
	}
},
		city: "Nanjing, Jiangsu",
		city_zh: "江苏南京",
	},
	{
		institute: institute.rdfz,
		job: "Junior and Senior High School Education",
		job_zh: "初高中教育",
		time: {
	"start": {
		"year": "2009",
		"month": "8"
	},
	"end": {
		"year": "2015",
		"month": "6"
	}
},
		city: "Beijing",
		city_zh: "北京",
	},
];

// 荣誉

var hornor = [];

// 任教

var teaching = [
	{
		"course_name": "Design and Development of Music Online Applications (Graduate Course)",
		"course_name_zh": "《音乐类在线应用的设计与开发》（研究生课程）",
		"role": "Teaching Assistant",
		"role_zh": "授课助教"
	},
	{
		"course_name": "Interdisciplinary Perspectives on Music Performance Research (Graduate Course)",
		"course_name_zh": "《跨学科视野下的音乐表演研究》（研究生课程）",
		"role": "Teaching Assistant",
		"role_zh": "授课助教"
	},
	{
		"course_name": "Thesis and Experimental Report Writing (Orchestra) (Graduate Course)",
		"course_name_zh": "《学位论文与实验报告写作（管弦）》（研究生课程）",
		"role": "Teaching Assistant",
		"role_zh": "授课助教"
	}
];

// 活动

var activity = {
	conference_organizer: {
		name: "Conference Co-organizer",
		name_zh: "会议协办",
		list: [
			{
				name: conference.isps2025,
				year: ["2025"],
			},
		],
	},
};

// 其他方面

var misc = [
];

var misc_zh = [
];

// 联系方式

var contact = [
	{
		"name": "Email",
		"name_zh": "邮箱",
		"content": "<a href=\"mailto:taoan2008@shcmusic.edu.cn\">taoan2008@shcmusic.edu.cn</a>"
	},
	{
		"name": "Address",
		"name_zh": "地址",
		"content": "9th Floor, Lingling Road Campus, Shanghai Conservatory of Music, Xuhui District, Shanghai, China",
		"content_zh": "上海市徐汇区上海音乐学院零陵路校区九楼"
	}
];

// 版权

var last_update = {
	"month": "Feb",
	"month_zh": "2",
	"year": "2026"
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

// Selected Projects
var selected_proj_html = "";
for (var i = 0; i < selected_proj.length; i++) {
  selected_proj_html += `<table><tbody><tr><td style="width:15px"></td><td valign="middle"><div>`;
  selected_proj_html += `<b>${selected_proj[i].name}</b><br>`;
  for (var j = 0; j < selected_proj[i].author.length; j++) {
    var author = selected_proj[i].author[j];
    var displayChinese = false;
    if (author.is_me === "Yes") {
      selected_proj_html += `<u>${author.name}</u>`;
    } else {
      selected_proj_html += `${href(author)}`;
    }
    if (j != (selected_proj[i].author.length-1)){
      selected_proj_html += ", ";
    }
  }
  selected_proj_html += `<br>`;
  if (selected_proj[i].pub.name === "arXiv"){
    selected_proj_html += `<i>${selected_proj[i].pub.name}, ${selected_proj[i].year}</i><br>`;
  }else{
    if (selected_proj[i].pub.short_name) {
      selected_proj_html += `<i>${selected_proj[i].pub.name} (<b>${selected_proj[i].pub.short_name}</b>), ${selected_proj[i].year}</i><br>`;
    } else {
      selected_proj_html += `<i>${selected_proj[i].pub.name}, ${selected_proj[i].year}</i><br>`;
    }
  }
  selected_proj_html += `<font size=3>`;
  for (var j = 0; j < selected_proj[i].extra_link.length; j++) {
    selected_proj_html += `[${href(selected_proj[i].extra_link[j])}] `;
  }
  selected_proj_html += `</font><br>`;
  selected_proj_html += `<table><td style="height:10px"></td></table>`;
  if (selected_proj[i].intro) {
    selected_proj_html += `<font size=3>${selected_proj[i].intro.join(" ")}</font>`;
  }
  selected_proj_html += `</div></td></tr></tbody></table>`;
  selected_proj_html += `<table><td style="height:35px"></td></table>`;
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
	experience_html += `<td horizontal-align: middle;"><div>${experience[i].job}<br>`;
	if (experience[i].department) {
		experience_html += `${experience[i].department.name}, `;
	}
	experience_html += `${experience[i].institute.name}`;
	if (experience[i].city) {
		if (experience[i].institute.nation === "China") {
			experience_html += `, ${experience[i].city}, China`;
		} else {
			experience_html += `, ${experience[i].city}`;
		}
	} else if (experience[i].institute.nation) {
		experience_html += `, ${experience[i].institute.nation}`;
	}
	experience_html += `.<br>`;
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

// Helper function to parse conference name and location
function parseConferenceName(confName) {
  // Try English parentheses first
  var match = confName.match(/^(.*?)\s*\((.*?)\)$/);
  if (match) {
    return { name: match[1].trim(), location: match[2].trim() };
  }
  // Try Chinese parentheses
  match = confName.match(/^(.*?)（(.*?)）$/);
  if (match) {
    return { name: match[1].trim(), location: match[2].trim() };
  }
  // No parentheses found
  return { name: confName.trim(), location: "" };
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
			var parsed = parseConferenceName(activity[key].list[i].name.name);
			var displayText = parsed.name;
			if (parsed.location) {
				displayText += ", " + parsed.location;
			}
			activity_html += `<p><li>&nbsp; ${displayText}, ${activity[key].list[i].year.join("/")}</li></p>`;
			}else{
			var parsed = parseConferenceName(activity[key].list[i].name.name);
			var displayText = parsed.name;
			if (parsed.location) {
				displayText += ", " + parsed.location;
			}
			activity_html += `<p><li>&nbsp; ${displayText}, ${activity[key].list[i].year}</li></p>`;
			}
		}
		activity_html += `</ul><br>`;
	}
}

// Teaching
var teaching_html = "";
for (var i = 0; i < teaching.length; i++) {
	teaching_html += `<p><li>&nbsp; ${teaching[i].course_name}, ${teaching[i].role}</li></p>`;
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


// 精选项目（中文）
var selected_proj_html_zh = "";
for (var i = 0; i < selected_proj.length; i++) {
  selected_proj_html_zh += `<table><tbody><tr><td style="width:15px"></td><td valign="middle"><div>`;
  selected_proj_html_zh += `<b>${selected_proj[i].name}</b><br>`;
  for (var j = 0; j < selected_proj[i].author.length; j++) {
    var author = selected_proj[i].author[j];
    var displayChinese = selected_proj[i].author_display_in_chinese !== false;
    if (author.is_me === "Yes") {
      if (displayChinese) {
        selected_proj_html_zh += `<u>${author.name_zh}</u>`;
      } else {
        selected_proj_html_zh += `<u>${author.name}</u>`;
      }
    } else {
      if (displayChinese) {
        selected_proj_html_zh += `${href_zh(author)}`;
      } else {
        selected_proj_html_zh += `${href_zh(author, author.name)}`;
      }
    }
    if (j != (selected_proj[i].author.length-1)){
      selected_proj_html_zh += ", ";
    }
  }
  selected_proj_html_zh += `<br>`;
  if (selected_proj[i].pub.name === "arXiv"){
    selected_proj_html_zh += `<i>${selected_proj[i].pub.name_zh}, ${selected_proj[i].year}</i><br>`;
  }else{
    if (selected_proj[i].pub.short_name) {
      selected_proj_html_zh += `<i>${selected_proj[i].pub.name} (<b>${selected_proj[i].pub.short_name}</b>), ${selected_proj[i].year}</i><br>`;
    } else {
      selected_proj_html_zh += `<i>${selected_proj[i].pub.name}, ${selected_proj[i].year}</i><br>`;
    }
  }
  selected_proj_html_zh += `<font size=3>`;
  for (var j = 0; j < selected_proj[i].extra_link.length; j++) {
    selected_proj_html_zh += `[${href_zh(selected_proj[i].extra_link[j])}] `;
  }
  selected_proj_html_zh += `</font><br>`;
  selected_proj_html_zh += `<table><td style="height:10px"></td></table>`;
  if (selected_proj[i].intro_zh) {
    selected_proj_html_zh += `<font size=3>${selected_proj[i].intro_zh.join("")}</font>`;
  }
  selected_proj_html_zh += `</div></td></tr></tbody></table>`;
  selected_proj_html_zh += `<table><td style="height:35px"></td></table>`;
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
	experience_html_zh += `<td valign="middle"><div>${experience[i].job_zh}`;
	if (experience[i].department) {
		experience_html_zh += `，${experience[i].department.name_zh}`;
	}
	experience_html_zh += `，${experience[i].institute.name_zh}`;
	if (experience[i].city_zh) {
		experience_html_zh += `，${experience[i].city_zh}`;
	} else if (experience[i].institute.nation_zh && experience[i].institute.nation_zh !== "中国") {
		experience_html_zh += `，${experience[i].institute.nation_zh}`;
	}
	experience_html_zh += `<br>`;
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
				var confName = activity[key].list[i].name.name_zh ? activity[key].list[i].name.name_zh : activity[key].list[i].name.name;
				var parsed = parseConferenceName(confName);
				var displayText = parsed.name;
				if (parsed.location) {
					displayText += "，" + parsed.location;
				}
				activity_html_zh += `<p><li>&nbsp; ${displayText}，${activity[key].list[i].year.join("/")}</li></p>`;
			}else{
				var confName = activity[key].list[i].name.name_zh ? activity[key].list[i].name.name_zh : activity[key].list[i].name.name;
				var parsed = parseConferenceName(confName);
				var displayText = parsed.name;
				if (parsed.location) {
					displayText += "，" + parsed.location;
				}
				activity_html_zh += `<p><li>&nbsp; ${displayText}，${activity[key].list[i].year}</li></p>`;
			}
		}
		activity_html_zh += `</ul><br>`;
	}
}

// 任教
var teaching_html_zh = "";
for (var i = 0; i < teaching.length; i++) {
	teaching_html_zh += `<p><li>&nbsp; ${teaching[i].course_name_zh}，${teaching[i].role_zh}</li></p>`;
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


// Selected Projects (Mobile)
var selected_proj_html_m = "";
for (var i = 0; i < selected_proj.length; i++) {
  selected_proj_html_m += `<b>${selected_proj[i].name}</b><br>`;
  for (var j = 0; j < selected_proj[i].author.length; j++) {
    var author = selected_proj[i].author[j];
    var displayChinese = false;
    if (author.is_me === "Yes") {
      selected_proj_html_m += `<u>${author.name}</u>`;
    } else {
      selected_proj_html_m += `${href(author)}`;
    }
    if (j != (selected_proj[i].author.length-1)){
      selected_proj_html_m += ", ";
    }
  }
  selected_proj_html_m += `<br>`;
  if (selected_proj[i].pub.name === "arXiv"){
    selected_proj_html_m += `<i>${selected_proj[i].pub.name}, ${selected_proj[i].year}</i><br>`;
  }else{
    if (selected_proj[i].pub.short_name) {
      selected_proj_html_m += `<i>${selected_proj[i].pub.name} (<b>${selected_proj[i].pub.short_name}</b>), ${selected_proj[i].year}</i><br>`;
    } else {
      selected_proj_html_m += `<i>${selected_proj[i].pub.name}, ${selected_proj[i].year}</i><br>`;
    }
  }
  for (var j = 0; j < selected_proj[i].extra_link.length; j++) {
    selected_proj_html_m += `[${href(selected_proj[i].extra_link[j])}] `;
  }
  selected_proj_html_m += `<br><br>`;
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
	experience_html_m += `${experience[i].job}<br>`;
	if (experience[i].department) {
		experience_html_m += `${experience[i].department.name}<br>`;
	}
	experience_html_m += `${experience[i].institute.name}`;
	if (experience[i].city) {
		if (experience[i].institute.nation === "China") {
			experience_html_m += `, ${experience[i].city}, China`;
		} else {
			experience_html_m += `, ${experience[i].city}`;
		}
	} else if (experience[i].institute.nation) {
		experience_html_m += `, ${experience[i].institute.nation}`;
	}
	experience_html_m += `.<br>`;
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

// Teaching
var teaching_html_m = "";
teaching_html_m += `<ul>`;
for (var i = 0; i < teaching.length; i++) {
	teaching_html_m += `<p><li>${teaching[i].course_name}, ${teaching[i].role}</li></p>`;
}
teaching_html_m += `</ul>`;

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
			var parsed = parseConferenceName(activity[key].list[i].name.name);
			var displayText = parsed.name;
			if (parsed.location) {
				displayText += ", " + parsed.location;
			}
			activity_html_m += `<p><li>${displayText}, ${activity[key].list[i].year.join("/")}</li></p>`;
			}else{
			var parsed = parseConferenceName(activity[key].list[i].name.name);
			var displayText = parsed.name;
			if (parsed.location) {
				displayText += ", " + parsed.location;
			}
			activity_html_m += `<p><li>${displayText}, ${activity[key].list[i].year}</li></p>`;
			}
		}
		activity_html_m += `</ul></div></td></tr></tbody></table><br>`;
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


// 精选项目（移动端中文）
var selected_proj_html_m_zh = "";
for (var i = 0; i < selected_proj.length; i++) {
  selected_proj_html_m_zh += `<b>${selected_proj[i].name}</b><br>`;
  for (var j = 0; j < selected_proj[i].author.length; j++) {
    var author = selected_proj[i].author[j];
    var displayChinese = selected_proj[i].author_display_in_chinese !== false;
    if (author.is_me === "Yes") {
      if (displayChinese) {
        selected_proj_html_m_zh += `<u>${author.name_zh}</u>`;
      } else {
        selected_proj_html_m_zh += `<u>${author.name}</u>`;
      }
    } else {
      if (displayChinese) {
        selected_proj_html_m_zh += `${href_zh(author)}`;
      } else {
        selected_proj_html_m_zh += `${href_zh(author, author.name)}`;
      }
    }
    if (j != (selected_proj[i].author.length-1)){
      selected_proj_html_m_zh += ", ";
    }
  }
  selected_proj_html_m_zh += `<br>`;
  if (selected_proj[i].pub.name === "arXiv"){
    selected_proj_html_m_zh += `<i>${selected_proj[i].pub.name_zh}, ${selected_proj[i].year}</i><br>`;
  }else{
    if (selected_proj[i].pub.short_name) {
      selected_proj_html_m_zh += `<i>${selected_proj[i].pub.name} (<b>${selected_proj[i].pub.short_name}</b>), ${selected_proj[i].year}</i><br>`;
    } else {
      selected_proj_html_m_zh += `<i>${selected_proj[i].pub.name}, ${selected_proj[i].year}</i><br>`;
    }
  }
  for (var j = 0; j < selected_proj[i].extra_link.length; j++) {
    selected_proj_html_m_zh += `[${href_zh(selected_proj[i].extra_link[j])}] `;
  }
  selected_proj_html_m_zh += `<br><br>`;
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
	experience_html_m_zh += `${experience[i].job_zh}<br>`;
	if (experience[i].department) {
		experience_html_m_zh += `${experience[i].department.name_zh}，`;
	}
	experience_html_m_zh += `${experience[i].institute.name_zh}`;
	if (experience[i].city_zh) {
		experience_html_m_zh += `，${experience[i].city_zh}`;
	} else if (experience[i].institute.nation_zh && experience[i].institute.nation_zh !== "中国") {
		experience_html_m_zh += `，${experience[i].institute.nation_zh}`;
	}
	experience_html_m_zh += `<br>`;
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

// 任教
var teaching_html_m_zh = "";
teaching_html_m_zh += `<ul>`;
for (var i = 0; i < teaching.length; i++) {
	teaching_html_m_zh += `<p><li>${teaching[i].course_name_zh}，${teaching[i].role_zh}</li></p>`;
}
teaching_html_m_zh += `</ul>`;

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
			var confName = activity[key].list[i].name.name_zh ? activity[key].list[i].name.name_zh : activity[key].list[i].name.name;
			var parsed = parseConferenceName(confName);
			var displayText = parsed.name;
			if (parsed.location) {
				displayText += "，" + parsed.location;
			}
			activity_html_m_zh += `<p><li>${displayText}，${activity[key].list[i].year.join("/")}</li></p>`;
			}else{
			var confName = activity[key].list[i].name.name_zh ? activity[key].list[i].name.name_zh : activity[key].list[i].name.name;
			var parsed = parseConferenceName(confName);
			var displayText = parsed.name;
			if (parsed.location) {
				displayText += "，" + parsed.location;
			}
			activity_html_m_zh += `<p><li>${displayText}，${activity[key].list[i].year}</li></p>`;
			}
		}
		activity_html_m_zh += `</ul></div></td></tr></tbody></table><br>`;
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


