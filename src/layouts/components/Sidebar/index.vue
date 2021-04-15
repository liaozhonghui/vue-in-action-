<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="activeMenu"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      mode="vertical"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import SiderbarItem from "./SidebarItem.vue";
import variables from "styles/variables.module.scss";
import { routes } from "@/router";
import { computed } from "vue";
import { useRoute } from "vue-router";

const activeMenu = computed(() => {
  const route = useRoute();
  console.log("route:", route);
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }

  return path;
});
</script>
