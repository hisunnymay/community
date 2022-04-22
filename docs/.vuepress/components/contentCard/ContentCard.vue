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
  margin-top: 30px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .contentCard {
    margin-top: 30px;
    // margin-bottom: 30px;
    width: var(--homepage-width);
    align-items: center;

    .left {
      color: var(--c-text);
      display: flex;
      align-items: center;
      justify-content: space-between;
      // margin-right: 200px;
      // margin-left: 200px;
      margin-top: 80px;
      margin-bottom: 80px;
      .image {
        width: 100%;
        padding: 0 20px;
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%;

        img {
          width: 100%;
          border-radius: 5px;
          object-fit: cover;
        }
      }
      .content {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%;
        h3 {
          font-weight: 400;
          font-size: 1.9375em;
          line-height: 1.45em;
          margin: 1px !important;
        }
        p {
          margin: none;
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
      width: 100%;

      .left {
        display: flex;
        flex-direction: column;
        margin-right: 0;
        margin-left: 0;
        margin-bottom: 30px;
        margin-top: 30px;
        .image {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 100%;
          max-width: 100%;
          width: 100%;
          img {
            border-radius: 3px;
            width: 100%;
            // height: 300px;
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
          flex: 0 0 100%;
          max-width: 100%;
          text-align: center !important;

          .desc {
            width: 100%;
            text-align: center;
          }
          .title {
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }
}
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
</style>