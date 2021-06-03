<template>
  <el-row>
    <el-col :span="8">
      <el-tree
        :data="data"
        :defaultNodeKey="defaultNodeKey"
        @node-click="handleNodeClick"
      ></el-tree>
    </el-col>
    <el-col :span="16">
      <p>hwhw</p>
    </el-col>
  </el-row>
</template>

<script>
import request from "utils/request";
export default {
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
      ],
      defaultNodeKey: {
        childNodes: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(node) {
      console.log(node);
    },
  },
  mounted() {
    request({
      url: "team/getTeamTree",
      method: "get",
      params: {},
    });
  },
};
</script>

<style lang="scss" scoped></style>
