<script setup lang="ts">
import SidebarItems from '@theme/SidebarItems.vue'
</script>

<template>
  <aside class="sidebar">
    <slot name="top" />
    <SidebarItems />
    <slot name="bottom" />
  </aside>
</template>