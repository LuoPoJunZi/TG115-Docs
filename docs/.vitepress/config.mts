import { defineConfig } from 'vitepress'

const repo = 'https://github.com/LuoPoJunZi/TG115'
const docsRepo = 'https://github.com/LuoPoJunZi/TG115-Docs'

export default defineConfig({
  lang: 'zh-CN',
  title: 'TG115',
  titleTemplate: ':title · TG115 Docs',
  description: 'TG115 — Telegram → CloudDrive2 / 115 自托管文件转存工具文档',
  sitemap: {
    hostname: 'https://tg115.pages.dev'
  },
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#1688f8' }],
    ['meta', { name: 'keywords', content: 'TG115, Telegram, 115网盘, CloudDrive2, WebDAV, rclone, Docker, 文件转存' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'TG115 Docs' }],
    ['meta', { property: 'og:description', content: 'Telegram → 115 自托管文件转存工具完整文档' }],
    ['meta', { property: 'og:url', content: 'https://tg115.pages.dev/' }],
    ['meta', { property: 'og:image', content: 'https://tg115.pages.dev/tg115-logo.png' }]
  ],
  themeConfig: {
    logo: '/tg115-mark.png',
    siteTitle: 'TG115 Docs',
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '从零部署', link: '/deployment/from-zero' },
      { text: 'FAQ', link: '/faq/' },
      { text: '更新日志', link: '/reference/changelog' },
      {
        text: 'v1.6.2',
        items: [
          { text: 'v1.6.2（当前稳定版）', link: '/reference/changelog#v1-6-2' },
          { text: '下载最新 Release', link: `${repo}/releases/latest` },
          { text: '全部 Releases', link: `${repo}/releases` },
          { text: '版本与升级说明', link: '/operations/redeploy' }
        ]
      }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '项目介绍', link: '/guide/introduction' },
          { text: '部署前准备', link: '/guide/prerequisites' },
          { text: '快速开始', link: '/guide/quick-start' },
          { text: '下载 TG115', link: '/download/' }
        ]
      },
      {
        text: '安装与部署',
        items: [
          { text: '从零部署完整教程', link: '/deployment/from-zero' },
          { text: 'Windows 一键部署器', link: '/deployment/windows-deployer' },
          { text: 'CloudDrive2 与 115', link: '/deployment/clouddrive2' },
          { text: '部署器截图说明', link: '/deployment/screenshots' }
        ]
      },
      {
        text: '使用指南',
        items: [
          { text: '文件转存流程', link: '/usage/workflow' },
          { text: 'Bot 命令', link: '/usage/commands' },
          { text: '任务状态', link: '/usage/status' }
        ]
      },
      {
        text: '运维',
        items: [
          { text: '服务管理', link: '/operations/manage' },
          { text: '重新部署与升级', link: '/operations/redeploy' }
        ]
      },
      {
        text: 'FAQ',
        items: [
          { text: 'FAQ 总览', link: '/faq/' },
          { text: '部署与连接', link: '/faq/deployment' },
          { text: '传输与任务', link: '/faq/transfer' },
          { text: '安全与隐私', link: '/faq/security' }
        ]
      },
      {
        text: '故障排查',
        items: [
          { text: '常见问题速查', link: '/troubleshooting/common' }
        ]
      },
      {
        text: '安全',
        items: [
          { text: '安全边界与注意事项', link: '/security/' }
        ]
      },
      {
        text: '参考',
        items: [
          { text: '配置字段', link: '/reference/config' },
          { text: '目录与文件', link: '/reference/paths' },
          { text: '工作原理', link: '/reference/architecture' },
          { text: '更新日志', link: '/reference/changelog' }
        ]
      }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: '本页目录' },
    socialLinks: [{ icon: 'github', link: repo }],
    editLink: {
      pattern: `${docsRepo}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页'
    },
    footer: {
      message: 'TG115 与 Telegram、115、CloudDrive2 及其运营方无隶属、授权或官方合作关系。',
      copyright: 'TG115 Docs · Released under the MIT License.'
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新于' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    externalLinkIcon: true
  }
})
