<template>
  <h1>{{ msg }}</h1>
  <p @click="$store.commit('add', 10)">
    {{ $store.state.counter }}, Getters: {{ $store.getters.concatCount }}
  </p>
  <comp />
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"
      >Vite Documentation</a
    >
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <button @click="state.count++, pcount++">count is: {{ state.count }}</button>
  <el-button @click="onclick">emit</el-button>
  <el-input></el-input>

  <demo />
</template>

<script setup>
import {
  defineEmit,
  defineProps,
  provide,
  reactive,
  useContext,
  ref,
} from "vue";
import * as Vue from "vue";
import { GetResources } from "apis/source.js";

// 1. 直接导入组件
import comp from "comps/Comp.vue";
import demo from "comps/Demo.vue";

// 2. 定义属性
const props = defineProps({
  msg: String,
});
console.log(props);

// 3. 获取上下文
const ctx = useContext();
console.log(ctx);

ctx.expose({
  someMethod() {
    console.log("some message exposed.");
  },
});

// 4. 定义事件
const emit = defineEmit(["myclick"]);
const onclick = () => {
  // emit("myclick");
  ctx.emit("myclick");
};

const state = reactive({ count: 0 });
const pcount = ref(0);
provide("city", pcount);
// 请求mock
fetch("/api/getUsers")
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {});

GetResources().then((result) => {
  const list = result;
  console.log("list:", list);
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
