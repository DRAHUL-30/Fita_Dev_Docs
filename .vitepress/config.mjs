import { defineConfig } from 'vitepress'

import { withMermaid } from "vitepress-plugin-mermaid";


// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: 'en-US',
  title: "FITA",
  ignoreDeadLinks: true,
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvprF-kjj26Zy56-pBg4DsJYCkIUFzvPjGuw&s',
  description: "Skill development company with offering Online & Classroom Training",

  head: [['link', { rel: 'icon', href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvprF-kjj26Zy56-pBg4DsJYCkIUFzvPjGuw&s' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvprF-kjj26Zy56-pBg4DsJYCkIUFzvPjGuw&s',
    nav: [
      { text: "About", link: "/about" },
      { text: "Documentation", link: "/getting-started" },
    ],
    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Guide',
        items: [

          { text: 'Getting Started', link: '/getting-started' },
          { text: 'System Design', link: '/system-design' },
          { text: 'CI/CD', link: '/ci-cd' },
          { text: 'Deployment Process', link: '/deploy' }
        ]
      },
      {
        text: 'Frontend',
        collapsed: true,
        items: [
          { text: 'Project structure', link: '/frontend/project-structure' },
        ]
      },
      {
        text: 'Backend',
        collapsed: true,
        items: [
          { text: 'Project structure', link: '/backend/project-structure' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/venzo-mdu/Fita-Admin.git' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Venzo Technologies pvt ltd'
    }
  }
})
