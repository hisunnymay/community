<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../../shared'
const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const contentCard = computed(() => {
  if (isArray(frontmatter.value.contentCards)) {
    return frontmatter.value.contentCards
  }
  return []
})
</script>

<template>
  <div v-if="contentCard.length" class="container-c">
    <div
      v-for="contentCard in contentCard"
      :key="contentCard.details"
      class="contentCard"
    >
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
  margin: 2.5rem auto;
  width: 100%;
  max-width: var(--homepage-width);
  border-top: 1px solid var(--c-border);
  padding: 2.5rem 0;

  .contentCard {

    .left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4rem 0;
      grid-column-gap: 120px;
      .image {
        width: 100%;

        img {
          width: 100%;
        }
      }
      .content {
        max-width: 40%;
        h3 {
          color: var(--c-text);
          font-weight: 700;
          font-size: 36px;
          line-height: 50px;
        }
        p {
          color: var(--c-text-lighter);
        }
      }
    }
  }
}
@media (max-width: 719px) {
  .container-c {
    display: flex;
    flex-direction: column;

    .contentCard {
      max-width: 100%;
      padding: 0 2.5rem;

      .left {
        display: flex;
        flex-direction: column;
        .image {
          img {
            width: 100%;
          }
        }
        .content {
          display: flex;
          flex-direction: column;
          order: 1;
          max-width: 100%;

          .desc {
            width: 100%;
          }
          .title {
            width: 100%;
          }
        }
      }
    }
  }
}
/*
@media (max-width: 1024px) {
  .container-c {
    .contentCard {
      .left {
        margin-right: 0;
        margin-left: 0;
      }
    }
  }
}
*/
</style>