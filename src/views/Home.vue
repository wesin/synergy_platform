<template lang="pug">
  el-container
    el-header 
      .title HEHE
    el-container
      el-aside(width="200px") 
        el-menu( :default-openeds="['1', '3']")
          el-submenu(v-for="(dep, minx) in departments" :index="dep" :key="dep")
            template(slot="title")
              i(class="el-icon-menu") 
              span {{dep}}
            el-menu-item(v-for="(project, pinx) in departmentProjects[dep]" :index="project" :key="project")
              i(class="el-icon-view") 
              span {{project}}
      el-main
        <div class="home">
          <img alt="Vue logo" src="../assets/logo.png">
          HelloWorld(msg="Welcome to Your Vue.js App")
        </div>
    <el-footer>Footer</el-footer>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      departments: ["bim", "bim2"],
      departmentProjects: {
        "bim": ["A project", "B project"],
        "bim2": ["B2 project", "B3 project"]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-header, .el-footer {
    padding: 0px;
    position: relative;
    text-align: center;

    .title {
      background-color: #E6A23C;
      padding-top: 10px;
      padding-left: 30px;
      width: auto;
      display: block;
      height: 40px;
      font-size: 25px;
    }
  }
  
  .el-aside {
    color: #333;
    text-align: left;
    padding-left: 30px;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body {
    padding: 0px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
