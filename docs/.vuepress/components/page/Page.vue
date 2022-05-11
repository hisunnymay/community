<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
import ToggleSidebarButton from '@theme/ToggleSidebarButton.vue'
import Pricing from '../pricing/pricing.vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import Footer from './footer.vue'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
import ToggleMenu from '../ToggleMenu/ToggleMenu.vue'
const ToggleMenuSidebar = () => {
  if (typeof document !== undefined) {
    document.querySelector('.last-t').classList.toggle('last-transform')
    document.querySelector('.first-t').classList.toggle('first-transform')
    document.querySelector('.middle-t').classList.toggle('middle-transform')
    document.getElementById('mask-sidebar').classList.toggle('mask-sidebar')
    const sidebar = document.querySelector('.theme-container')
    sidebar.classList.toggle('sidebar-open')
  }
}

defineEmits(['toggle-sidebar'])
const pageData = usePageData()
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
      <Pricing v-if="frontmatter.pricing" :frontmatter="frontmatter" />

      <div v-else class="theme-default-content">
        <ToggleMenu class="toggle" @click="ToggleMenuSidebar" />
        <Content />
        <div id="mask-sidebar"></div>
      </div>

      <PageMeta v-if="!frontmatter.pricing" />

      <PageNav v-if="!frontmatter.pricing" />

      <slot name="bottom" />
    </main>
    <Footer />
  </div>
</template>
<style scoped>
.toggle {
  position: fixed;
  top: 9%;
  left: 0;
  transform: translateX(-10px);
  background: var(--c-bg);
  padding: 2px 10px;
  z-index: 2;
box-shadow:  2px 2px 4px var(--c-bg),
             -2px -2px 4px var(--c-bg);


}
.mask-sidebar{
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #00000073;
  z-index: 1;

}
</style>