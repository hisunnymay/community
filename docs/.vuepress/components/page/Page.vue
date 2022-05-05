<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
import ToggleSidebarButton from '@theme/ToggleSidebarButton.vue'
import Pricing from '../pricing/pricing.vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import Footer from './footer.vue'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
const pageData = usePageData()
defineEmits(['toggle-sidebar'])
const frontmatter = usePageFrontmatter()
const page = computed(() => {
  if (isArray(pageData.value.frontmatter)) {
    return pageData.value.frontmatter
  }
  return []
})
</script>

<template>
<div class="container">

  <main class="page">
    <slot name="top" />
    <Pricing v-if="frontmatter.pricing" :frontmatter=frontmatter />

    <div v-else class="theme-default-content">
      <Content />
      <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" style="background:blue;"/>
    </div>

    <PageMeta  v-if="!frontmatter.pricing"/>

    <PageNav v-if="!frontmatter.pricing" />
    

    <slot name="bottom" />
    
  </main>
  <Footer />
</div>

</template>
<style scoped>
.btn-toggle-content-sidebar{
  position: fixed;
  z-index: 9000;
  top: 10%;
  left: 0;
  background: var(--c-icon);
  outline: none;
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;

}
</style>