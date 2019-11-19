<template>
  <div id="app">
    <img :src="img" class="background">
    <div class="navbar">
        <el-dropdown>
        <el-button  icon="el-icon-share" class="first">
          资源分享<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/testing" style="text-decoration:none;">
          <el-dropdown-item>
            测试工具
          </el-dropdown-item>
          </router-link>
          <el-dropdown-item>*</el-dropdown-item>
          <el-dropdown-item>*</el-dropdown-item>
          <el-dropdown-item>*</el-dropdown-item>
          <el-dropdown-item>待开发</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> 
      <el-button class="back" type="text">
        <router-link to="/" style="text-decoration:none;">
        <font class="font">首页</font>
        </router-link>
      </el-button>
      </div>
    <router-view/>
  </div>
</template>

<script>
import Img from '@/assets/MainBackground.jpg'

export default {
  name: 'App',
  data(){
      return{
        img:Img,
      }
  }
}
</script>

<style>
  .background{
      position: absolute;
      top:0px;
      left: 0px;
      height: 100%;
      width: 100%;
      z-index:-1
    }
    .navbar{
      position: absolute;
      left: 0px;
      top:0px;
      width: 100%;
      height: 3rem;
      background: #f1eeeed3;
    }
    .first{
      position: relative;
      top:2px;
      left: 10px;
      background: rgba(0, 195, 255, 0.918);
    }
    .back{
      position: absolute;
      top:6px;
      left: 90%;

    }
    .font{
        font-size: 15px;
        font-family:fantasy;
        font-weight:  bolder;
        color: black
    }
</style>
