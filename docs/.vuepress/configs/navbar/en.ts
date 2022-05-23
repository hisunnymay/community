import type { NavbarConfig } from '@vuepress/theme-default'


// import { version } from '../meta' 

export const en = [
  {
    text: 'Guide',
    link: '/guide/',

  },
  {
    text: 'Reference',
    children: [
      {
        text: 'Annotations',

        children: [
          {
            text: 'Overview',
            link: '/reference/annotations/overview.html',
            icon: "/featureIcons/cui.svg",

          },
          {
            text: "Value Recommendation",
            link: '/reference/annotations/vr.html',
            icon: "/featureIcons/hotfix.svg",
          },
          {
            text: "Confirmation",
            link: '/reference/annotations/confirmation.html',
            icon: "/featureIcons/declarative.svg",
          }


        ],
      },
      {
        text: 'Channels',
        children: [
          '/reference/channels/wpa.md',
        ],
      },

      {
        text: 'Supports',
        children: [
          '/reference/support/overview.md',
          '/reference/support/Chatwoot.md'
        ],
      },
    ],
  },
  {
    text: "Pricing",
    link: "/pricing/"
  },
  {
    text: 'Blog',
    link: '/articles/'
  }
]
