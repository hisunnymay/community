<template>
  <div class="article-wrapper">

    <div v-if="!items.length">Nothing in here.</div>
    <!-- <div class="container-article" v-for="{ info, path } in items" :key="info">
      <div class="sticky" v-if="info.sticky">
        {{info.title}}
      </div>

    </div> -->

    <article  class="article" v-for="{ info, path } in items" :key="info">
      
      <!-- New layout -->
      <RouterLink :to="path">
      <div class="container-blog">
        <div class="image">
          <img :src="info.image" />
        </div>
        <div class="content">
          <div v-if="info.title" class="title">
            <!-- <RouterLink :to="path"> -->

            <h2>{{ info.title }}</h2>
          </div>
          <div v-if="info.date" class="stamp">
            <span class="date">{{
              new Date(info.date).toLocaleDateString()
            }}</span>
          </div>
          <div v-if="info.description" class="description">
            <p>{{ info.description[0] }}</p>
          </div>
          <div class="stamp-author-date">
            <div class="author">
              <span class="name">Lorem ipsum{{ info.author }}</span>
            </div>
          </div>
        </div>
      </div>
      </RouterLink>
      <!-- End new layout -->

    </article>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>
<style lang="scss">
.sticky{
  width: var;
}
.article-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin: auto;
    row-gap: 100px;
    column-gap: 50px;

  width: 80%;
  font-family: 'Roboto', sans-serif;
  .article {
    width: 1fr;
    padding-bottom: 30px;
    .container-blog {
      .image {
        // padding: 30px;
        img {
          width: 90%;
          height: 50%;
          border: 1px var(--c-border) solid;
          border-radius: 15px;
        }
      }
      .content {
        // padding-left: 20px;
        padding-right: 30px;
        width: 90%;
        padding-bottom: 0;
        margin-bottom: 0;
        h2 {
          font-weight: normal;
          border: 0;
          line-height: 1.5rem;
          font-size: 1.5rem;
          color: var(--b-title);
        }
        p {
          width: 90%;
          font-size: 0.9rem;
          color: var(--b-desc);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-weight: normal;
        }
        .stamp {
          font-size: 0.75rem;
          line-height: normal;
          color: var(--b-title);
          font-weight: normal;


        }
        .author{
          text-transform: uppercase;
          font-size: .85em;
          color: var(--b-title);
          font-weight: normal;


        }
      }
    }
  }
}
@media (max-width:719px){
  .article-wrapper {
    grid-template-columns:1fr ;

    width: 100%;
    align-items: center;
    justify-items: center;
    .article{
      .container-blog{
            padding-left: 2rem;
    padding-right: 2rem;
        .image{
          img{
            width: 100%;
          }
        }
        .content{
          width: 100%;
          h2{
            line-height: 1.5em;
          }
        }
      }
    }
  }
}
</style>