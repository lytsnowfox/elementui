<template>
  <div style="width: 100%">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-main>
      用戶列表
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="用户名"
          min-width="30%">
        </el-table-column>
        <el-table-column
          prop="password"
          label="密码"
          min-width="30%">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          min-width="10%">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>
<script>
    // 引入辅助函数，语法糖
    import {mapState, mapActions} from 'vuex';

    export default {
      data() {
        return {
          tableData: []
        }
      },
      created() {
        /*this.$store.dispatch('GET_USERLIST').then(()=>{
          //this.tableData = this.$store.state.userList;
          this.tableData = this.userList;
        });*/
        this.getUserList().then(()=>{
          this.tableData = this.userList;
        });
      },
      methods : {
        //...mapActions(['GET_USERLIST']),
        ...mapActions({
          getUserList : 'GET_USERLIST'
        }),
        handleEdit(index, row) {
          console.log(index);
        },
        handleDelete(index, row) {
          console.log(index);
        }
      },
      computed : {
        ...mapState({
          userList : state => state.userList
        })
      }
    }
</script>

<style scoped>

</style>
