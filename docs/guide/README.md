# Introduction

We started Framely after we realized that building and operating chatbot is unnecessarily hard and expensive, especially if we consider chatbot is just application with conversational user interface. After all, building app with graphical user interface nowadays is a lot more manageable in comparison. There are many reasons for this, but ignoring all the principles and best practices we learned over many years in building GUI application, thus not having tools with high level abstractions is a crucial one.

## The Goal
Framely is designed to make building effective conversational user interface (CUI) easy. There are two aspects worth mentioning. First, conversation is not the goal, but a means. The goal is to deliver service through conversation. Furthermore, we mainly focus on serving collaborative users, who are more interested in get served with the least effort on their part. Which means we should focus on understanding the common instead of obscure user utterances, and adopt dialog policy that try to bring the conversation toward serving as quickly as possible.

Second, while end user experience is the key reason for business to work on conversational services, we actually focus on builder experience when it comes to Framely design. We think it is builder's job to trade off between cost and user experience, and Framely just need to provide tools so builder can build user experience they want. Of course, we always try to provide the best possible default user experience when builder want to be lazy.

## How?


A VuePress site is in fact a single-page application (SPA) powered by [Vue](https://v3.vuejs.org/) and [Vue Router](https://next.router.vuejs.org).

Routes are generated according to the relative path of your markdown files. Each Markdown file is compiled into HTML with [markdown-it](https://github.com/markdown-it/markdown-it) and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.

During development, we start a normal dev-server, and serve the VuePress site as a normal SPA. If you’ve used Vue before, you will notice the familiar development experience when you are writing and developing with VuePress.

During build, we create a server-rendered version of the VuePress site and render the corresponding HTML by virtually visiting each route. This approach is inspired by [Nuxt](https://nuxtjs.org/)'s `nuxt generate` command and other projects like [Gatsby](https://www.gatsbyjs.org/).

## Why Not ...?

### Nuxt

Nuxt is an outstanding Vue SSR framework, and it is capable of doing what VuePress does. But Nuxt is designed for building applications, while VuePress is more lightweight and focused on content-centric static sites.

### VitePress

VitePress is the little brother of VuePress. It's also created and maintained by our Vue.js team. It's even more lightweight and faster than VuePress. However, as a tradeoff, it's more opinionated and less configurable. For example, it does not support plugins. But VitePress is powerful enough to make your content online if you don't need advanced customizations.

It might not be an appropriate comparison, but you can take VuePress and VitePress as Laravel and Lumen.

### Docsify / Docute

Both are great projects and also Vue-powered. Except they are both fully runtime-driven and therefore not SEO-friendly. If you don’t care for SEO and don’t want to mess with installing dependencies, these are still great choices.

### Hexo

Hexo has been serving the Vue 2.x docs well. The biggest problem is that its theming system is static and string-based - we want to take advantage of Vue for both the layout and the interactivity. Also, Hexo’s Markdown rendering isn’t the most flexible to configure.

### GitBook

We’ve been using GitBook for most of our sub project docs. The primary problem with GitBook is that its development reload performance is intolerable with a large amount of files. The default theme also has a pretty limiting navigation structure, and the theming system is, again, not Vue based. The team behind GitBook is also more focused on turning it into a commercial product rather than an open-source tool.
