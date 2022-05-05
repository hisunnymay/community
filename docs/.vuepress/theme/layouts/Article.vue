<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <div class="intro">
          <div class="title">
            <h1>Framely Blog</h1>
          </div>
          <div class="intro">
            <p>Let's take you through our journey and provide guidance.</p>
          </div>
        </div>
        <ArticleList :items="articles.items" />
        <Footer />
      </main>
    </template>
  </ParentLayout>
</template>
<script setup lang="ts">
import { useBlogType } from "vuepress-plugin-blog2/lib/client";
import ArticleList from "../components/ArticleList.vue";
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import Footer from "../../components/page/footer.vue"
const articles = useBlogType("article");
</script>
<style lang="scss"  scoped>
h1{
  font-weight: normal;
}
.intro{
  text-align: center;
  margin-bottom: 100px;
}
@media (max-width:719px){
  .page{
    margin-left: 12px;
    margin-right: 12px;
  }
}

</style>
