<template>
  <el-header class="header">
    <div class="user_info">
      <div class="user-avator">
        <el-avatar>头像</el-avatar>
      </div>
      <el-dropdown>
        <div class="user-name">
          用户名 <el-icon><ArrowDown /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  background: #fff;
  box-shadow: var(--el-box-shadow-light);
}

.user_info {
  float: right;
  padding-right: 30px;
}

.user-name {
  margin-left: 10px;
  margin-top: 30px;
}
.user-avator {
  margin-left: 20px;
  float: left;
}
.user-avator {
  border-radius: 50%;
  width: auto;
  height: 40px;
  margin-top: 18px;
}
</style>
