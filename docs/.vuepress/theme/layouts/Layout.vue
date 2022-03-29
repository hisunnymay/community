<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #navbar-after>
      <button class="btn-nav">Sign Up</button>
      <button class="btn-nav">Sign In</button>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.btn-nav{
  background: var(--c-brand);
  color: var(--c-bg);
  border: none;
  margin-right: 8px;
  margin-left: 3px;
  border-radius: 5px;
  font-weight: bold;
  

}
.btn-nav:hover{
  transform: scale(1.1);
}

</style>