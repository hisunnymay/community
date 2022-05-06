<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import DropdownTransition from '@theme/DropdownTransition.vue'
import { computed, ref, toRefs, watch, onMounted } from 'vue'
import type { PropType, } from 'vue'
import { useRoute } from 'vue-router'
import type { NavbarItem, ResolvedNavbarItem } from '../../shared'
const props = defineProps({
  item: {
    type: Object as PropType<Exclude<ResolvedNavbarItem, NavbarItem>>,
    required: true,
  },
})
const { item } = toRefs(props)

const dropdownAriaLabel = computed(
  () => item.value.ariaLabel || item.value.text
)
const open = ref(true)

  open.value = false

const route = useRoute()
watch(
  () => route.path,
  () => {
        open.value = true
      open.value = false
  }
)
onMounted(() => {
   if (window.innerWidth < 720) {
        open.value = true
    }
 

})
const LinkIcon = (icon)=>{
    if(icon){
        return `../../images/${icon}`
    }
}
const handleDropdown = (e): void => {
  const isTriggerByTab = e.detail === 0
  if (window.screen.availWidth < 720) {
    open.value = true
  } else if (isTriggerByTab) {
    open.value = !open.value
  } else {
    open.value = false
  }
}

const isLastItemOfArray = (item: unknown, arr: unknown[]): boolean =>
  arr[arr.length - 1] === item


</script>

<template>
  <div class="navbar-dropdown-wrapper" :class="{ open }">
    <button
      class="navbar-dropdown-title"
      type="button"
      :aria-label="dropdownAriaLabel"
      @click="handleDropdown"
    >
      <span class="title">{{ item.text }}</span>
      <span class="arrow down" />
    </button>

    <button
      class="navbar-dropdown-title-mobile"
      type="button"
      :aria-label="dropdownAriaLabel"
      @click="open = !open"
    >
      <span class="title">{{ item.text }}</span>
      <span class="arrow" :class="open ? 'down' : 'right'" />
    </button>

    <DropdownTransition>
      <div  v-show="open" class="navbar-dropdown">
        <ul class="navbar-dropdown-block">
          <li
            v-for="child in item.children"
            :key="child.text"
            class="navbar-dropdown-item"
          >
            <template v-if="child.children">
              <h4 class="navbar-dropdown-subtitle">
                <AutoLink
                  v-if="child.link"
                  :item="child"
                  @focusout="
                    isLastItemOfArray(child, item.children) &&
                      child.children.length === 0 &&
                      (open = false)
                  "
                />
   <div class="linkicon-text" id="subtitle-link-icon" v-else>
    <img v-show="child.icon" class="linkicon" :src="LinkIcon(child.icon)" :alt="item.icon">
    {{ child.text }}
    </div>
                <!-- <span v-else>{{ child.text }}</span> -->
              </h4>

              <ul class="navbar-dropdown-subitem-wrapper">
                <li
                  v-for="grandchild in child.children"
                  :key="grandchild.link"
                  class="navbar-dropdown-subitem"
                >
                  <AutoLink
                    :item="grandchild"
                    @focusout="
                      isLastItemOfArray(grandchild, child.children) &&
                        isLastItemOfArray(child, item.children) &&
                        (open = false)
                    "
                  />
                </li>
              </ul>
            </template>

            <template v-else>
              <AutoLink
                :item="child"
                @focusout="
                  isLastItemOfArray(child, item.children) && (open = false)
                "
              />
            </template>
          </li>
        </ul>
      </div>
    </DropdownTransition>
  </div>
</template>
<style scoped>
#subtitle-link-icon{
  padding: 0 1.5rem 0 1.25rem;

}
</style>