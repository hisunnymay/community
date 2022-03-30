import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Getting Started',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md',
      ],
    },
    {
      text: "Essentials",
      children: [
        '/guide/cui.md',
        '/guide/structured.md',
        '/guide/5levels-cui.md',
        '/guide/components.md',
        '/guide/architecture.md',
      ]
    },
    {
      text: "Glossary",
      link: '/guide/glossary.md',
    }
  ],
  '/advanced/': [
    {
      text: 'Advanced',
      children: [
        '/advanced/architecture.md',
        '/advanced/plugin.md',
        '/advanced/theme.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/advanced/cookbook/README.md',
        '/advanced/cookbook/usage-of-client-app-enhance.md',
        '/advanced/cookbook/adding-extra-pages.md',
        '/advanced/cookbook/making-a-theme-extendable.md',
        '/advanced/cookbook/passing-data-to-client-code.md',
        '/advanced/cookbook/markdown-and-vue-sfc.md',
      ],
    },
  ],
  '/reference/': [
    {
      text: 'Annotation Reference',
      collapsible: true,
      children: [
        '/reference/annotations/vr.md',
      ],
    },
    {
      text: 'Channel Reference',
      collapsible: true,
      children: ['/reference/channels/wpa.md'],
    },
    {
      text: 'Support Reference',
      collapsible: true,
      children: [
      ],
    },
  ],
}
