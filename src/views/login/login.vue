<template>
  <div>
    <span>账号：</span>
    <el-input v-model="userName" placeholder="请输入账号"></el-input>
    <span>密码：</span>
    <el-input
      v-model="password"
      placeholder="请输入密码"
      show-password
    ></el-input>
    <el-button @click="getdata()" type="primary" size="small">
      login
    </el-button>
  </div>
</template>

<script>
import { login } from "@/api/login/login";
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    getdata() {
      let data = {
        loginName: this.userName,
        loginPwd: this.password,
      };
      login(data).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>