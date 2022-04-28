<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
import Pricing from '../pricing/pricing.vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import Footer from './footer.vue'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
const pageData = usePageData()
const frontmatter = usePageFrontmatter()
console.log(frontmatter.value)
console.log(pageData.value.frontmatter) 
const page = computed(() => {
  if (isArray(pageData.value.frontmatter)) {
    return pageData.value.frontmatter
  }
  return []
})
</script>

<template>
  <main class="page">
    <slot name="top" />
    <Pricing v-if="frontmatter.pricing" :frontmatter=frontmatter />

    <div v-else class="theme-default-content">
      <Content />
    </div>

    <PageMeta  v-if="!frontmatter.pricing"/>

    <PageNav v-if="!frontmatter.pricing" />
    

    <slot name="bottom" />
    
  </main>
  <Footer />
</template>