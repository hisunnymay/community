<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import DropdownTransition from '@theme/DropdownTransition.vue'
import { computed, ref, toRefs, watch } from 'vue'
import type { PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { ResolvedSidebarItem } from '@vuepress/shared'
import { isActiveSidebarItem } from '@vuepress/theme-default/lib/client/utils'
const props = defineProps({
  item: {
    type: Object as PropType<ResolvedSidebarItem>,
    required: true,
  },
  depth: {
    type: Number,
    required: false,
    default: 0,
  },
})
const { item, depth } = toRefs(props)
const route = useRoute()
const router = useRouter()
const isActive = computed(() => isActiveSidebarItem(item.value, route))
const itemClass = computed(() => ({
  'sidebar-item': true,
  'sidebar-heading': depth.value === 0,
  'active': isActive.value,
  'collapsible': item.value.collapsible,
}))

const isOpen = ref(true)
isOpen.value = false

const onClick = ref<(() => void) | undefined>(undefined)
if (item.value.collapsible) {
  isOpen.value = isActive.value
  onClick.value = () => {
    isOpen.value = !isOpen.value
  }
  router.afterEach(() => {
    isOpen.value = isActive.value

  })
}
</script>

<template>
  <li>
    <AutoLink v-if="item.link" :class="itemClass" :item="item" />
    <p
      v-else
      tabindex="0"
      :class="itemClass"
      @click="onClick"
      @keydown.enter="onClick"
    >
      {{ item.text }}
      <span
        v-if="item.collapsible"
        class="arrow"
        :class="isOpen ? 'down' : 'right'"
      />
    </p>

    <DropdownTransition v-if="item.children?.length">
      <ul v-show="isOpen" class="sidebar-item-children">
        <SidebarItem
          v-for="child in item.children"
          :key="`${depth}${child.text}${child.link}`"
          :item="child"
          :depth="depth + 1"
        />
      </ul>
    </DropdownTransition>
  </li>
</template>