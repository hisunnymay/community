<script lang="ts">
/* eslint-disable import/first, import/no-duplicates, import/order */
import { defineComponent } from 'vue'
export default defineComponent({
  inheritAttrs: false,
})
</script>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import type { PropType } from 'vue'
import { useRoute } from 'vue-router'
import { useSiteData } from '@vuepress/client'
import { isLinkHttp, isLinkMailto, isLinkTel } from '@vuepress/shared'
const props = defineProps({
  item: {
    type: Object as PropType,
    required: true,
  },
})

const route = useRoute()
const site = useSiteData()
const { item } = toRefs(props)
// if the link has http protocol
const hasHttpProtocol = computed(() => isLinkHttp(item.value.link))
// if the link has non-http protocol
const hasNonHttpProtocol = computed(
  () => isLinkMailto(item.value.link) || isLinkTel(item.value.link)
)
// resolve the `target` attr
const linkTarget = computed(() => {
  if (hasNonHttpProtocol.value) return undefined
  if (item.value.target) return item.value.target
  if (hasHttpProtocol.value) return '_blank'
  return undefined
})
// if the `target` attr is '_blank'
const isBlankTarget = computed(() => linkTarget.value === '_blank')
// is `<RouterLink>` or not
const isRouterLink = computed(
  () =>
    !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value
)
// resolve the `rel` attr
const linkRel = computed(() => {
  if (hasNonHttpProtocol.value) return undefined
  if (item.value.rel) return item.value.rel
  if (isBlankTarget.value) return 'noopener noreferrer'
  return undefined
})
// resolve the `aria-label` attr
const linkAriaLabel = computed(() => item.value.ariaLabel || item.value.text)
// should be active when current route is a subpath of this link
const shouldBeActiveInSubpath = computed(() => {
  const localeKeys = Object.keys(site.value.locales)
  if (localeKeys.length) {
    return !localeKeys.some((key) => key === item.value.link)
  }
  return item.value.link !== '/'
})
// if this link is active in subpath
const isActiveInSubpath = computed(() => {
  if (!shouldBeActiveInSubpath.value) {
    return false
  }
  return route.path.startsWith(item.value.link)
})
const LinkIcon = computed(() => {
  if (item.value.icon) {
    return `../../images/${item.value.icon}`
  }
})
// if this link is active
const isActive = computed(() => {
  if (!isRouterLink.value) {
    
    return false
  }
  if (item.value.activeMatch) {
    return new RegExp(item.value.activeMatch).test(route.path)
  }
  return isActiveInSubpath.value
})
const RemoveSidebar = () => {
  if (typeof document !== undefined) {
    document
      .getElementById('navbar-items-right')
      .classList.remove('slide-in-menu')
    document.querySelector('.last').classList.remove('transform-last')
    document.querySelector('.first').classList.remove('transform-first')
    document.querySelector('.middle').classList.remove('transform-middle')
  }
}
</script>

<template>
  <RouterLink
    v-if="isRouterLink"
    id="router-link"
    :class="{ 'router-link-active': isActive }"
    :to="item.link"
    :aria-label="linkAriaLabel"
    v-bind="$attrs"
    @click="RemoveSidebar"
  >
    <slot name="before" />
      <img v-if="item.icon" class="linkicon img-icon" 
       :src="LinkIcon" :alt="item.icon" />
      {{ item.text }}
    <slot name="after" />
  </RouterLink>
  <a
    v-else
    class="external-link"
    :href="item.link"
    :rel="linkRel"
    :target="linkTarget"
    :aria-label="linkAriaLabel"
    v-bind="$attrs"
  >
    <slot name="before" />
    {{ item.text }}
    <AutoLinkExternalIcon v-if="isBlankTarget" />
    <slot name="after" />
  </a>
</template>
<style  lang="scss">
#router-link {
  display: inline-block;
}
.img-icon{
  padding-left: 2px;
}

.linkicon{
    width: 14px;
    height: 14px;
    padding-right: 4px;

}
.linkicon-text {
  display: flex;
  align-items: center;
  font-size: 15px;
}

</style>