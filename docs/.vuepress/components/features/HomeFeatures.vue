<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../../shared'
const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const features = computed(() => {
  if (isArray(frontmatter.value.features)) {
    return frontmatter.value.features
  }
  return []
})
</script>

<template>
  <div v-if="features.length" class="features">
    <div v-for="feature in features" :key="feature.title" class="feature">
        <div class="icon" style="display:flex; align-items:center; justify-content:center;">
          <div class="image" style="width:28px; height:28px; border-radius:50%; background:var(--c-icon); padding:16px;">

            <img  :src="feature.icon" style="width:28px; height:28px;" />
          </div>
        </div>
      <h2 style="text-align:center;">{{ feature.title }}</h2>
      <p>{{ feature.details }}</p>
    </div>
  </div>
</template>