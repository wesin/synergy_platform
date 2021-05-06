<template lang="pug">
.root
    .header
       .title HEHE
    .main
        .loginbox
            .title 欢迎登录
            .login-form  
                el-input(placeholder="输入账号", v-model="userName")
                el-input(placeholder="输入密码", v-model="password")
                el-button(type="primary", @click="login") 登录
</template>

<script>

import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default {

    data() {
        return {
            'userName': '',
            'password': ''
        }
    },
    methods: {
        login () {
            // let params = {
            //     'username': this.username,
            //     'password': this.password
            // };
            NProgress.start()
            new Promise((resolve, reject) => {
        // 三秒之后再执行提交更改状态代码，模拟登录过程
        setTimeout(() => {
            let user = {
                "name":"wesin",
                "avatar" : "",
                "token": "12312455"
            }
            this.$store.dispatch("login", user).then(() => {
                NProgress.done()
                this.$router.push("/");
                resolve();
            }).catch((error) => {
                NProgress.done()
                console.log(error.response);
                reject(error);
            });
        }, 3000)
      })
            // this.$store.dispatch('Login', params)
            //     .then(() => {this.$router.push({ path: '/' });
            //     })
            //     .catch((error) => {
            //     console.log(error.response); 
            //     });
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    height: 68px;

    .title {
        padding-top: 10px;
        padding-left: 30px;
        width: auto;
        display: block;
        height: 40px;
        font-size: 25px;
    }   
}

.main {
    position: relative;
    height: 452px;
    background-color: #409EFF;
}

.loginbox {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: -15em;
    width: 360px;
    height: 360px;
    background: white;
    border-radius: 4px !important;
    z-index: 2;

    .title {
        padding-top: 32px;
        font-size: 20px;
        color: #8a8e92;
        text-align: center;
    }

    .login-form{
        padding: 41px 42px 12px 42px;
    }

    .el-input {
        height: 60px;
    }
    
    .el-button {
        width: 100%;
        height: 40px;
        border-color: #ea9d39;
        background-color: #ea9d39;
    }
}

</style>