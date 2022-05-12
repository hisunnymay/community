<script setup lang="ts">
import NavbarItems from '@theme/NavbarItems.vue'
import SidebarItems from '@theme/SidebarItems.vue'
import ToggleMenu from '../ToggleMenu/ToggleMenu.vue'

const ToggleMenuSidebar = () => {
    if(typeof document !== undefined){

    const sidebar = document.querySelector('.theme-container')
    sidebar.classList.toggle('sidebar-open')
    document.querySelector('.last-t').classList.toggle('last-transform')
    document.querySelector('.first-t').classList.toggle('first-transform')
    document.querySelector('.middle-t').classList.toggle('middle-transform')
    document.getElementById('mask-sidebar').classList.toggle('mask-sidebar')

  }
}
</script>

<template>
  <aside class="sidebar">
    <slot name="top" />
    <ToggleMenu class="toggle" @click="ToggleMenuSidebar" />

    <SidebarItems />
    <slot name="bottom" />
  </aside>
</template>