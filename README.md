# Steps

- Install `2.0.0-beta.35`
- Create `doc` directory
-  Create `src` directory inside the doc folder
- in the package.json file add

``` json
  "scripts": {
    "dev": "vuepress dev src",
    "build": "vuepress build src"
  }

```
- Create .vuepress directory
- Add the `config.ts` 
-Add the `enhanceApp.ts`

- Follow https://v2.vuepress.vuejs.org/guide/configuration.html to add all the configuartion needed like routes, themes, logos, repo and header links, editlink etc 

- Add routes https://v2.vuepress.vuejs.org/guide/page.html#routing

- Add `index.md` file and format it based on https://v2.vuepress.vuejs.org/guide/page.html#routing 

- Add directories for routes eg

``` js
   {
        text: 'config',
        link: '/config/'
    }

```
You will need a directory named `config` so it can map to a route

