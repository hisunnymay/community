<script setup lang="ts">
import HomeContent from '@theme/HomeContent.vue'
import HomeFeatures from '@theme/HomeFeatures.vue'
import HomeFooter from '@theme/HomeFooter.vue'
import HomeHero from '@theme/HomeHero.vue'
import CTA from '../cta/callToAction.vue'
import ContentCard from '../contentCard/ContentCard.vue'
import Hero from "../hero/hero.vue"
</script>

<template>
  <main class="home">
    <Hero />
    <HomeFeatures />
    <HomeContent />
    <ContentCard />
    <CTA />
    <HomeFooter />
  </main>
</template>