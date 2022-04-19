<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../../shared'
const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const cta = computed(() => {
    console.log(frontmatter.value.cta)
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
          <button>{{cta.title}}</button>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container-s{
    padding-top: 4rem;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 380px;
        background-color: var(--c-bg-cta);
        justify-content: center;        
        h2{
            border: none;
            font-weight: normal;
            text-align: center;
            font-size: 2rem;
        }
        a{
            button{
                background: var(--c-brand);
                outline: none;
                cursor: pointer;
                border: none;
                padding: 12px;
                border-radius: 5px;
                color: var(--c-bg);
                font-size: 1.1em;
            }
        }
    }
}

</style>