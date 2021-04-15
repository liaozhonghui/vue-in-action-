<template>
  <div v-if="!item.hidden">
    <template v-if="isAppLink">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <item
            :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
            :title="onlyOneChild.meta.title"
          ></item>
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template>
        <item
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="item.meta.title"
        />
      </template>

      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      ></sidebar-item>
    </el-submenu>
  </div>
</template>

<script setup>
import path from "path-browserify";
import Item from "./Item.vue";
import AppLink from "./Link.vue";
import { isExternal } from "utils/validate";
import { computed, defineProps, ref, watch } from "vue";
import * as R from "ramda";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isNest: {
    type: Boolean,
    default: false,
  },
  basePath: {
    type: String,
    default: "",
  },
});
const item = props.item;
const onlyOneChild = ref(null);
const hasOneShowingChild = (children = [], parent) => {
  const showingChildren = R.filter((item) => {
    if (item.hidden) return false;
    onlyOneChild.value = item;
    return true;
  })(children);

  if (R.size(showingChildren) === 1) return true;
  if (R.size(showingChildren) === 0) {
    onlyOneChild.value = { ...parent, path: "", noShowingChildren: true };
    return true;
  }

  return false;
};

const resolvePath = (routePath) => {
  if (isExternal(routePath)) return routePath;

  if (isExternal(props.basePath)) return props.basePath;

  return path.resolve(props.basePath, routePath);
};

// 计算属性
const isAppLink = computed(() => {
  return (
    hasOneShowingChild(item.children, item) &&
    (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
    !item.alwaysShow
  );
});
</script>

<style lang="scss" scoped></style>
