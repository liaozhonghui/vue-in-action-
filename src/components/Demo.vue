<template>
  <div class="container">
    <h1>Demo Component</h1>
    <p>{{ message }}</p>
    <p>{{ logic }}</p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  data() {
    return {
      message: "goodbye.",
      bar: "def",
    };
  },
  setup() {
    const logic = ref("😋");
    return {
      logic,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  margin-top: 5px;
  border: 1px solid gainsboro;
}
</style>
