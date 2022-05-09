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
        <div class="icon" >
          <div class="image" >
            <img  :src="feature.icon" />
          </div>
          <h2>{{ feature.title }}</h2>
        </div>
      <p class="feature-details" >{{ feature.details }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.features{
  padding-top: 4rem;
}
.icon{
  display:flex;
  align-items:center;
  justify-content: flex-start;
}
.image{
  width: 28px;
  height: 28px;
  margin-left:-4px;
  margin-right:16px;
  img{
    width: 28px;
    height: 28px;
  }
}
.feature-details{
  margin-bottom: 50px;
}

</style>