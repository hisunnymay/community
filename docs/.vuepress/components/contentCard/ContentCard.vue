<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../../shared'
const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const contentCard = computed(() => {
  console.log(frontmatter.value.contentCards)
  if (isArray(frontmatter.value.contentCards)) {
    return frontmatter.value.contentCards
  }
  return []
  
})
</script>

<template>
  <div v-if="contentCard.length" class="container-c">
    <div v-for="contentCard in contentCard" :key="contentCard.details">
      <div class="left" v-if="contentCard.left">
        <div class="image">
          <img :src="contentCard.image" alt="" />
        </div>
        <div class="content">
          <div class="title">
            <h3>{{ contentCard.title }}</h3>
          </div>
          <div class="desc">
            <p>{{ contentCard.details }}</p>
          </div>
        </div>
      </div>
      <div class="left" v-else>
        <div class="content">
          <div class="title">
            <h3>{{ contentCard.title }}</h3>
          </div>
          <div class="desc">
            <p>{{ contentCard.details }}</p>
          </div>
        </div>
        <div class="image">
          <img :src="contentCard.image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container-c {
  margin-top: 30px;
  margin-bottom: 30px;
  div {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 90%;
    margin: auto;
    margin-top: 30px;
    .left {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      align-items: center;
      margin: auto;
      color: var(--c-text);
      .image {
        width: 100%;
        img {
          width: 80%;
          border-radius: 5px;
          height: 300px;
          object-fit: cover;
        }
      }
      .content {
        width: 80%;
      }
    }
  }
}
@media (max-width: 719px) {
  .container-c {
      display: flex;
      flex-direction: column;
    
    div {
        width: 100%;

      .left {
        display: flex;
        flex-direction: column;
        .image {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          img {
            border-radius: 3px;
            width: 100%;
            height: 300px;
            object-fit: cover;
          }
        }
        .content {
          width: 100%;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          order: 1;

          .desc {
            width: 90%;
          }
          .title {
            width: 90%;
          }
        }
      }
    }
  }
}
</style>