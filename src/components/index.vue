<template>
  <div class="index">
      <!--{{ $store.state.userinfo }}-->
    <el-container style="height: 500px; border: 1px solid #eee">
      <!--左侧导航-->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <div class="top-text">
          <h1 class="title">基础资源管理</h1>
        </div>
        <!--router属性向el-menu-item中的index标识的组件映射-->
        <el-menu :default-openeds="['1']" router background-color="#545c64" text-color="#fff">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>权限管理</template>
              <el-menu-item index="userlist">用户管理</el-menu-item>
              <el-menu-item index="orglist">机构管理</el-menu-item>
              <el-menu-item index="rolelist">角色管理</el-menu-item>
              <el-menu-item index="resourcelist">资源管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!--右侧内容-->
      <el-container>
        <!--路由出口-->
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [
            {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }
           ]
        }
      }
    }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-menu {
    border-right: 0px;
  }
  .el-aside {
    background-color: #545c64 !important;
  }

  html, body, #app, .index {
    height: 100%;
  }

  .el-container {
    height: 100% !important;
  }

  .top-text {
    text-align: center;
    padding: 20px 0px;
    background-color: #333;
  }

  .top-text .title {
    color: #fff;
  }
</style>
