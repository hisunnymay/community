<script setup lang="ts">
import NavbarBrand from '@theme/NavbarBrand.vue'
import NavbarItems from '@theme/NavbarItems.vue'
import ToggleDarkModeButton from '@theme/ToggleDarkModeButton.vue'
import ToggleSidebarButton from '@theme/ToggleSidebarButton.vue'
import { computed, onMounted, ref } from 'vue'
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'
// import {  usePageFrontmatter } from '@vuepress/client'

defineEmits(['toggle-sidebar'])
// const frontmatter =  usePageFrontmatter()
// console.log(frontmatter.value)
const themeLocale = useThemeLocaleData()
const navbar = ref<HTMLElement | null>(null)
const navbarBrand = ref<HTMLElement | null>(null)
const linksWrapperMaxWidth = ref(0)
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {}
  }
  return {
    maxWidth: linksWrapperMaxWidth.value + 'px',
  }
})

// const ToggleMenu = () => {
//   const navigationMenu = document.getElementById('navbar-items-right')
//   navigationMenu.classList.toggle('slide-in-menu')
//   document.querySelector(".last").classList.toggle('transform-last')
//   document.querySelector(".first").classList.toggle('transform-first')
//   document.querySelector(".middle").classList.toggle('transform-middle')



// }
// const checkPage = () => {
//   if(frontmatter.value.home){
//     return false
//   }
//   else if(!frontmatter.value.sidebar){
//     return false
//   }
//   else if(frontmatter.value.pricing){
//     return false
//   }else if(frontmatter.value.article){
//     return false
//   }
// else{
//     return true
//   }
// }

const enableDarkMode = computed(() => themeLocale.value.darkMode)
onMounted(() => {
  const MOBILE_DESKTOP_BREAKPOINT = 719
  const navbarHorizontalPadding =
    getCssValue(navbar.value, 'paddingLeft') +
    getCssValue(navbar.value, 'paddingRight')
  const handleLinksWrapWidth = (): void => {
    if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
      linksWrapperMaxWidth.value = 0
    } else {
      linksWrapperMaxWidth.value =
        navbar.value!.offsetWidth -
        navbarHorizontalPadding -
        (navbarBrand.value?.offsetWidth || 0)
    }
  }
  handleLinksWrapWidth()
  window.addEventListener('resize', handleLinksWrapWidth, false)
  window.addEventListener('orientationchange', handleLinksWrapWidth, false)
})
function getCssValue(el: HTMLElement | null, property: string): number {
  const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
    property
  ]
  const num = Number.parseInt(val, 10)
  return Number.isNaN(num) ? 0 : num
}
</script>

<template>
  <!-- <header ref="navbar" :style="[checkPage() ? {'padding-left':'4rem'}:{'padding-left':'20px'}]" class="navbar"> -->
  <header ref="navbar"  class="navbar">
    <!-- <ToggleSidebarButton v-show="checkPage()" @toggle="$emit('toggle-sidebar')" /> -->
    <ToggleSidebarButton  @toggle="$emit('toggle-sidebar')" />


    <span ref="navbarBrand">
      <NavbarBrand />
    </span>

    <div class="navbar-items-wrapper" :style="linksWrapperStyle">
      <slot name="before" />
      <NavbarItems class="can-hide" />
      <!-- <NavbarItems id="navbar-items-right" class="navbar-items-wrapper-links" /> -->
      <button class="button can-hide">
        <a
          href="http://framely.naturali.io"
          target="_blank"
          rel="noopener noreferrer"
          >Get Started</a
        >
      </button>
      <slot name="after" />

      <ToggleDarkModeButton v-if="enableDarkMode" />
      <!-- <div class="toggle-menu" @click="ToggleMenu" role="button">
        <span class="first"></span>
        <span class="middle"></span>
        <span class="last"></span>
      </div> -->

      <NavbarSearch />
    </div>
  </header>
</template>
<style lang="scss" scoped>
.button {
  margin-left: 20px;
  padding: 0 16px;
  background: var(--c-brand);
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 48px;
  a {
    color: var(--c-bg);
  }
}
// @media (max-width: 719px) {
//   .toggle-menu  span:nth-child(2){
//     width: 90%;
//     margin: 6px 0;
//   }
//   .toggle-menu {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-end;
//     width: 1.25rem;
//     height: 1.25rem;
//     align-self: center;
//     cursor: pointer;
//     margin-left: 10px;
//     position: relative;
//     span {
//       display: inline-block;
//       width: 100%;
//       height: 1px;
//       border-radius: 2px;
//       background: var(--c-text);
//       transition: 0.01s ease-in-out;
//       // position:absolute;
//       // transform: var(--t-transform);
      
//     }
//   }
//   .navbar-items-wrapper-links {
//     background: var(--c-bg);
//     height: fit-content;
//     display: flex;
//     flex-direction: column;
//     z-index: 9999;
//     width: 100%;
//     padding: 15px;
//     transition: 0.5s ease-out;
//     position: fixed;
//     top: var(--navbar-height);
//     height: 100%;
//     transform: translateX(100%);
//   }
//   .slide-in-menu {
//     transform: translateX(-70%);
//   }
//   .transform-first{
//     transform: rotate(45deg) translate3d(5.5px, 5.5px, 0);
//     // top: 3px;
    
//   }
//   .transform-last{
//     transform: rotate(-45deg) translate3d(5px, -5px, 0);
//     // transform: rotate(135deg);
//     // top: 6;
//   }
//   .transform-middle{
//     transform: translateY(-30px);
//     // width: 1px;
//     // display: none;
  
//   }
// }
</style>
