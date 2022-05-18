import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Getting Started',
      children: [
        '/guide/README.md',
        '/guide/are-you-ready.md',
        '/guide/getting-started.md',
      ],
    },
    {
      text: "Key Concepts",
      link: '/guide/concepts.md',
    },
    {
      text: "Essentials",
      children: [
        '/guide/cooperative.md',
        '/guide/sgcui.md',
        '/guide/5levels-sgcui.md',
        '/guide/components.md',
        '/guide/architecture.md',
      ]
    },
    {
      text: "Glossary",
      link: '/guide/glossary.md',
    }
  ],
  '/reference/': [
    {
      text: 'Annotation Reference',
      collapsible: true,
      children: [
        '/reference/annotations/overview.md',
        '/reference/annotations/vr.md',
        '/reference/annotations/confirmation.md',
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
          '/reference/support/overview.md',
          '/reference/support/Chatwoot.md',
      ],
    },
  ],
}
