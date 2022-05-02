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
  <div v-if="features.length" class="features" style="padding-top:4rem;">
    <div v-for="feature in features" :key="feature.title" class="feature">
        <div class="icon" style="display:flex; align-items:center; justify-content:flex-start;">
          <div class="image" style="width:28px; height:28px; margin-left:-4px; margin-right:16px;">
            <img  :src="feature.icon" style="width:28px; height:28px;" />
          </div>
          <h2>{{ feature.title }}</h2>
        </div>
      <p style="margin-bottom:50px;">{{ feature.details }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>