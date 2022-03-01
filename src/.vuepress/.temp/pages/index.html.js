export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "https://uploads-ssl.webflow.com/5e15a091d6f791201aa639b6/5e16fa9eb2a3c8e0cb40f54b_framely%202%E5%89%AF%E6%9C%AC.png",
    "tagline": "Docs for framely",
    "actionText": "Quick Start →",
    "actionLink": "/guide/",
    "features": [
      {
        "title": "Feature 1 Title",
        "details": "Feature 1 Description"
      },
      {
        "title": "Feature 2 Title",
        "details": "Feature 2 Description"
      },
      {
        "title": "Feature 3 Title",
        "details": "Feature 3"
      }
    ],
    "footer": "Made by Framely with ❤️"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "index.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
