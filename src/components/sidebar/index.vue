<template>
  <el-menu mode="vertical" :router="true" class="sidebar">
    <div class="logo"></div>
    <el-menu-item index="/dashboard">
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/shift">
      <span>排班管理</span>
    </el-menu-item>
    <el-menu-item index="/staff">
      <span>员工管理</span>
    </el-menu-item>
    <el-menu-item index="/store">
      <span>门店管理</span>
    </el-menu-item>
    <el-menu-item index="/rule">
      <span>门店规则管理</span>
    </el-menu-item>
    <el-menu-item index="/favorite">
      <span>员工偏好管理</span>
    </el-menu-item>
    <el-menu-item index="/forecast">
      <span>预计流量管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  display: block;
  position: absolute;
  width: 200px;
  left: 0;
  bottom: 0;
  top: 0;
  overflow-y: scroll;
  box-shadow: var(--el-box-shadow-light);
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}

.sidebar > ul {
  height: 100%;
}

.logo {
  height: 150px;
  width: 200px;
  border-radius: var(--el-border-radius);
  border: 1px solid var(--el-border-color);
}
</style>
