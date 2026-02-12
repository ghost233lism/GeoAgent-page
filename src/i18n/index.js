import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    // Header
    more: 'More',
    // Title
    correspondingAuthor: '†: Corresponding Author.',
    // Buttons
    paper: 'Paper',
    chineseVersion: '中译版',
    code: 'Code',
    demo: 'Demo',
    poster: 'Poster',
    dataset: 'Dataset (GeoSeek)',
    video: 'Video',
    // Sections
    explainerVideo: 'Explainer Video',
    comingSoon: 'Coming soon...',
    bibtex: 'BibTeX',
    // Addresses
    address1: 'VCIP, School of Computer Science, Nankai University',
    address2: 'School of Automation, Northwestern Polytechnical University',
    // Footer
    footerDesc: 'GeoAgent: Learning to Geolocate Everywhere with Reinforced Geographic Characteristic.',
    projectPage: 'Project page of',
    by: 'by',
    poweredBy: 'Powered by',
    templateThanks: 'Special thanks to the',
    templateThanksLink: 'template contributor',
  },
  zh: {
    more: '更多',
    correspondingAuthor: '†：通讯作者。',
    paper: '论文',
    chineseVersion: '中译版',
    code: '代码',
    demo: '演示',
    poster: '海报',
    dataset: '数据集 (GeoSeek)',
    video: '视频',
    explainerVideo: '讲解视频',
    comingSoon: '敬请期待...',
    bibtex: 'BibTeX',
    address1: '南开大学计算机学院 VCIP',
    address2: '西北工业大学自动化学院',
    footerDesc: 'GeoAgent: Learning to Geolocate Everywhere with Reinforced Geographic Characteristic.',
    projectPage: '项目主页',
    by: '来自',
    poweredBy: '技术栈',
    templateThanks: '感谢',
    templateThanksLink: '模板贡献者',
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
