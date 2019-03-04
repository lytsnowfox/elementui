<template>
  <div class="login">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
      <h1 class="title">
        <i class="el-icon-setting"></i>
        欢迎登录
      </h1>
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 30, message: '长度在 5 到 30 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 30, message: '长度在 5 到 30 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 调用后端，在config/index.js中配置路由
          var param = {
            username: this.loginForm.username,
            password: this.loginForm.password
          };
          this.axios.post('/api/lyt/user/login', this.qs.stringify(param)).then(response => {
            if (response.data.status == "success") {
              // 把当前登录信息保存到state
              this.$store.commit('SAVE_USERINFO', response.data);
              this.$message({
                message: '恭喜你，登录成功！',
                type: 'success'
              });
              // 跳转后台首页
              this.$router.push("/");
            } else {
              this.$message.error('登录失败！');
            }
          });
        } else {
          this.$message.error('登录失败！');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, body, #app, .login {
    height: 100%;
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-form {
    width: 400px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 45px 10px 10px;
  }

  .el-form .title {
    font-size: 22px;
    color: #333;
    font-weight: bold;
    padding: 20px 0px 20px 60px;
  }
</style>
