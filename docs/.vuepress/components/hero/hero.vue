
<script >
import { usePageFrontmatter } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
// import type { DefaultThemeHomePageFrontmatter } from '../../shared'
// const frontmatter = usePageFrontmatter()
export default {
  data() {
    return {
      slides: [
        {
          title: 'I am Slide A',
          id: 1,
        },
        {
          title: 'I am Slide B',
          id: 2,
        },
        {
          title: 'I am Slide C',
          id: 3,
        },
        {
          title: 'Lorem ipsum',
          id: 4,
        },
        {
          title: 'I am Slide E',
          id: 5,
        },
      ],
      
    }
  },
  beforeMount(){
      const frontmatter = usePageFrontmatter()
    if (isArray(frontmatter.value.slides)) {
    this.slides = frontmatter.value.slides
  }

  },
  mounted(){
  
    setInterval(()=>{
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)

    },5000)
  },
  methods: {
    next() {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous() {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    },
  },
  
}

</script>

<template>
  <div class="carousel-view">
    <transition-group class="carousel" tag="div">
      <div v-for="(slide,index) in slides" class="slide" :key="index">
        <h4>{{ slide.title }}</h4>
      </div>
    </transition-group>
    <div class="carousel-controls">
      <button class="carousel-controls__button" @click="previous">
        <span class="control">&lt;</span>
      </button>
      <button class="carousel-controls__button" @click="next">
        <span class="control">&gt;</span>
      </button>
    </div>
  </div>
</template>
<style scoped>
.carousel-view {
  margin: auto;
  display: flex;
  width: var(--homepage-width);
  flex-direction: column;
  align-items: center;
  height: 50vh;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.slide {
  flex: 0 0 90%;
  width: 100%;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}
.control {
  font-weight: bold;
  font-size: 2em;
}
.carousel-controls__button {
  border-radius: 50%;
  width: 3em;
  height: 3em;
  outline: none;
  border: none;
  margin: 5px;
  cursor: pointer;
  background: var(--c-icon);
  color: var(--c-brand);
}
@media (max-width: 719px) {
  .carousel-view {
    display: flex;
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>