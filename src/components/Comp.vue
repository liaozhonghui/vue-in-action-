<template>
  <div>comp</div>
  <child ref="usernameInput" />
  <button @click="focusRef">😋</button>
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>

<script setup>
import { getUserList } from "apis/service.js";
import { reactive, ref } from "vue";
import { prop, map } from "ramda";
import child from "./Comp/Child.vue";

let items = reactive(["liao", "li"]);
console.log("items:", items);
getUserList().then((list) => {
  // deal logic
  console.log("view get users:", list);
  const pipeline = map(prop("name"));
  // items = pipeline(list);
  items[2] = "wang";
  console.log("items:", items);
});

const usernameInput = ref("usernameInput");
const focusRef = () => {
  console.log("usernameInput:", usernameInput);
  usernameInput.value.focusInput();
};
</script>

<style lang="scss" scoped></style>
