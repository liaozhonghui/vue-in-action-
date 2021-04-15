<template>
  <div>
    <h1>Hello{{ computedCity }}</h1>
    <input ref="input" />
  </div>
</template>

<script setup>
import { computed, inject, useContext, ref } from "vue";
import { range, map, join } from "ramda";

const city = inject("city");
const computedCity = computed({
  get: () => {
    let res =
      join(
        "",
        map((v) => "\ ", range(0, 10, 1))
      ) + city.value;
    console.log("res:", res);
    return res;
  },
});
// 导出focusInput function
const input = ref("input");
const ctx = useContext();
ctx.expose({
  focusInput: () => {
    console.log("focusInput:", input);
    input.value.focus();
  },
});
</script>

<style lang="scss" scoped></style>
