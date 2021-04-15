<template>
  <component :is="type" v-bind="slotProps(to)">
    <slot />
  </component>
</template>

<script setup>
import { isExternal as isExt } from "utils/validate";
import { defineProps } from "@vue/runtime-core";

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
const isExternal = computed(() => isExt(props.to));

const type = computed(() => {
  if (isExternal.value) {
    return "a";
  }
  return "router-link";
});

const linkProps = (to) => {
  if (isExternal.value) {
    return {
      href: to,
      target: "_blank",
      rel: "noopener",
    };
  }

  return { to };
};
</script>
