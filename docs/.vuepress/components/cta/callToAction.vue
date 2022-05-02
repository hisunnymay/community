<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../../shared'
const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const cta = computed(() => {
  if (isArray(frontmatter.value.cta)) {
    return frontmatter.value.cta
  }
  return []
})
</script>

<template>
  <div v-if="cta.length" class="container-s">
    <div v-for="cta in cta" :key="cta.details">
      <h2>{{ cta.details }}</h2>
      <a :href="cta.link" target="_blank" rel="noopener noreferrer">
          <button class="button-medium">{{cta.title}}</button>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container-s{
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 380px;
        background-color: var(--c-bg-cta);
        justify-content: center;        

        h2{
            border: none;
            font-weight: 600;
            text-align: center;
            font-size: 36px;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
        //a{
            // button{
            //     background: var(--c-brand);
            //     outline: none;
            //     cursor: pointer;
            //     border: none;
            //     padding: 12px;
            //     border-radius: 5px;
            //     color: var(--c-bg);
            //     font-size: 1.1em;
            // }
       // }
    }
}

</style>