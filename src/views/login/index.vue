<template>
  <div class="main">
    <div class="login_container">
      <div class="logo_info"></div>
      <div class="login_form">
        <el-form
          label-width="auto"
          size="large"
          class="form"
          label-position="top"
        >
          <div class="title">用户登录</div>
          <el-form-item label="用户名">
            <el-input
              placeholder="请输入用户名"
              v-model="login_value.username"
            />
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              placeholder="请输入密码"
              v-model="login_value.password"
              type="password"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login_btn" @click="login_func()"
              >登 录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const login_value = reactive({
      username: "",
      password: "",
    });

    const login_func = () => {
      //TODO
      ElMessage.success("登录成功");
      router.push("/dashboard");
    };

    return {
      login_func,
      login_value,
    };
  },
};
</script>

<style lang="scss">
.main {
  background: #7f7fd5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: relative;
}

.login_container {
  width: 40%;
  height: 65%;
  background: whitesmoke;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  box-shadow: var(--el-box-shadow);
  display: flex;
}

.logo_info {
  width: 35%;
  background: rgb(231, 227, 227);
  position: relative;
}

.login_form {
  width: auto;
  text-align: center;

  .title {
    font-size: larger;
    font-weight: 600;
    text-align: center;
    margin: 30px;
  }

  .form {
    position: absolute;
    left: 50%;
    top: 20%;
    width: 36%;

    .login_btn {
      width: 100%;
    }
  }
}
</style>
