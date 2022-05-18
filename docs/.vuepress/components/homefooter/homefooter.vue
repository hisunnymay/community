<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../../shared'
const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const footerItems = computed(() => {
  if (isArray(frontmatter.value.mainfooter)) {
    return frontmatter.value.mainfooter
  }
  return []
})
</script>
<template>

  <div class="container-footer">
    <div class="grid">
      <div class="logo-socials">
        <a href="" class="logo-img">
          <img src="/images/logo.png" alt="" class="logo" />
        </a>
        <div class="socials"></div>
      </div>

      <div v-for="footerItem in footerItems" :key="footerItem" class="grid-2">
        <div class="col-1">
          <h6>{{ footerItem.title }}</h6>
          <ul>
            <li v-for="link in footerItem.links" :key="link">
              <a href="#">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <section class="footer-small">
    <div class="links">
      <div class="social"></div>
      <p>Framely, Inc &copy; 2022 All rights reserved</p>
    </div>
    <div class="links">
      <a href="#">What is framely?</a>
      <a href="#">Terms</a>
      <a href="#">Privacy</a>
      <a href="#">Sitemap</a>
    </div>
  </section>
</template>

