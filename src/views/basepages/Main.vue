<template>
  <div class="nav_bar">
    <el-container>
      <el-aside class="side">
        <sidebar />
      </el-aside>
      <el-container>
        <headbar />
        <el-container class="content-box">
          <el-main class="content">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Headbar from "../../components/headbar/index.vue";
import Sidebar from "../../components/sidebar/index.vue";

export default {
  components: {
    Headbar,
    Sidebar,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
.side {
  width: 200px;
}
</style>
