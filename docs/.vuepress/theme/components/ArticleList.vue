<template>
  <div class="article-wrapper">

    <div v-if="!items.length">Nothing in here.</div>
    <!-- <div class="container-article" v-for="{ info, path } in items" :key="info">
      <div class="sticky" v-if="info.sticky">
        {{info.title}}
      </div>
    </div> -->

    <article v-for="{ info, path } in items" :key="info">
      
      <!-- New layout -->
      <RouterLink :to="path">
      <div class="blog-card">
        <div >
          <img class="blog-card-image" :src="info.image" />
        </div>
        <div class="blog-card-info">
          <div v-if="info.title">
            <!-- <RouterLink :to="path"> -->
            <h2 class="blog-card-info-title">{{ info.title }}</h2>
          </div>
          <div v-if="info.description">
            <p class="blog-card-info-description">{{ info.description[0] }}</p>
          </div>
          <div class="blog-card-info-bottom">
            <div class="author">{{ info.author }}</div>
            <div v-if="info.date">{{ new Date(info.date).toLocaleDateString() }}</div> 
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
/*.sticky{
  width: var;
}*/
.article-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin: 2.5rem auto;
  grid-row-gap: 1rem;
  //grid-column-gap: 0.5rem;
  //padding-left: 2rem;
  //padding-right: 2rem;

  //width: 100%;

  //.article-card {
    //width: 1fr;
    //padding-bottom: 30px;

    .blog-card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 20px;
    }
    .blog-card:hover {
      border: 1px solid var(--c-border);
      border-radius: 6px;
    }

    .blog-card-image {
      width: 100%;
      height: 50%;
      border-radius: 6px;
        // padding: 30px;
       /* img {
          width: 90%;
          height: 50%;
        }*/
    }

    .blog-card-info {
      display: flex;
      flex-direction: column;
      color: var(--c-text);
    }      

    .blog-card-info-title {
      text-transform: capitalize;
      border-bottom: none;
            /*font-size: 0.75rem;
            line-height: normal;
            color: var(--b-title);
            font-weight: normal;*/
    }

    .blog-card-info-description {
      color: var(--c-text-lighter);
      margin-top: 0px;
      font-weight: normal
    }

    .blog-card-info-bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: var(--c-text-lightest);
      font-size: 12px;
      font-weight: normal
    }

    .author{
      text-transform: uppercase;
    }
        // padding-left: 20px;
        //padding-right: 30px;
        //width: 90%;
        //padding-bottom: 0;
        //margin-bottom: 0;
        /*h2 {
          font-weight: normal;
          border: 0;
          line-height: 1.5rem;
          font-size: 1.5rem;
          color: var(--b-title);
        }*/
        /*p {
          width: 90%;
          font-size: 0.9rem;
          color: var(--b-desc);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-weight: normal;
        }*/

        /*.author{
          text-transform: uppercase;
          font-size: .85em;
          color: var(--b-title);
          font-weight: normal;


        }*/
      
    
  //}
}
@media (max-width:719px){
  .article-wrapper {
    grid-template-columns:1fr ;
    width: 100%;
    align-items: center;
    justify-items: center;
    /*.article{
      .blog-card{
            padding-left: 2rem;
    padding-right: 2rem;
        .blog-card-image{
          img{
            width: 100%;
          }
        }
        .blog-card-info{
          width: 100%;
          h2{
            line-height: 1.5em;
          }
        }
      }
    }*/
  }
}
</style>