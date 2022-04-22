
<script >
import { usePageFrontmatter } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
export default {
  data() {
    return {
      slides: [],
    }
  },
  beforeMount() {
    const frontmatter = usePageFrontmatter()
    if (isArray(frontmatter.value.slides)) {
      this.slides = frontmatter.value.slides
    }
  },
  mounted() {
    setInterval(() => {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    }, 5000)
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
    <div class="carousel-controls">
      <button class="carousel-controls__button" @click="next">
        <span class="control">&lt;</span>
      </button>
    </div>

    <transition-group type="animation" name="slide" class="carousel" tag="div">
      <div
        v-for="(slide, index) in slides"
        class="slide container"
        :key="index"
      >
        <!-- <div class="container"> -->
        <div class="content">
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.details }}</p>
          <a v-if="slide.button" :href="slide.link"
            ><Button>{{ slide.button }}</Button></a
          >
        </div>
        <div class="image">
          <img :src="slide.image" alt="" />
        </div>
        <!-- </div> -->
      </div>
    </transition-group>
    <div class="carousel-controls">
      <!-- <button class="carousel-controls__button" @click="previous"> -->
      <!-- icons go here -->
      <!-- <span class="control">&lt;</span> -->
      <!-- </button> -->
      <button class="carousel-controls__button" @click="next">
        <!-- The other icon goes here -->
        <span class="control">&gt;</span>
      </button>
    </div>
  </div>
</template>
<style lang ="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    cursor: pointer;
  }
  .content {
    width: 50%;
    z-index: 99;
    h3 {
      font-size: 2em;
      font-weight: 500;
    }
    p {
      width: 80%;
    }
    button {
      margin-top: 50px;
      color: var(--c-bg);
      padding: 12px;
      background: var(--c-brand);
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
  .image {
    width: 50%;
    img {
      width: 100%;
    }
  }
}
.carousel-view {
  margin: auto;
  display: flex;
  width: var(--homepage-width);
  align-items: center;
  z-index: 90;
  height:  50vh;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 90%;
  height: 100%;
  animation: slide;
  transition: transform 0.3s ease-in-out;
  animation-name: slide;
}
.slide {
  flex: 0 0 90%;
  width: 100%;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

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
.carousel-controls {
  height: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(50%);
}
.carousel-controls__button {
  border-radius: 50%;
  width: 5em;
  height: 5em;
  outline: none;
  border: none;
  margin: 5px;
  cursor: pointer;
  background: var(--c-icon);
  color: var(--c-brand);
}
.slide-enter-active {
  transition: all 0.3s ease-out;
}
.slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
@media (max-width: 719px) {
  .container {
    .image {
      display: none;
    }
    .content {
      width: 100%;
    }
  }
  .carousel-view {
    display: flex;
    width: 100%;
    height: 70vh;
  }
  .carousel-controls__button {
    width: 3em;
    height: 3em;
  }
}
</style>