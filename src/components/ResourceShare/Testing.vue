<template>
    <div class="app">
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <font class="title">工具下载</font>
        </div>
        <div class="text item">
            <div class="main">
            <div v-for="v,k in download">    
                <div>
                <span class="filename">{{k}}:</span>
                </div>
                <div>
                <a :href="v.downloadLink" class="downloadlink">
                <img :src='icon'>
                </a>
                </div>
    
                <br/>
                <br/>
            </div>
            </div>
        </div>
        </el-card>
    </div>
</template>

<script>
import Icon from '@/assets/zip.png'
 
export default {
    created(){
      var data = {
          'mobile':{
              'downloadLink':'http://127.0.0.1:5000/test'
          },
          'pc':{
              'downloadLink':'http://127.0.0.1:5000/test'
          },
          'pc1':{
              'downloadLink':'http://127.0.0.1:5000/test'
          },
          'pc2':{
              'downloadLink':'http://127.0.0.1:5000/test'
          },
          'pc3':{
              'downloadLink':'http://127.0.0.1:5000/test'
          },
          'pc4':{
              'downloadLink':'http://127.0.0.1:5000/test'
          },
          'pc5':{
              'downloadLink':'http://127.0.0.1:5000/test'
          }
      }
      this.download = data
    },
    data(){
        return{
            download:'',
            icon :Icon,
        }
    },
    methods:{
  
    }
}
</script>

<style scoped>
    .app{
        position:absolute;
    }
    .text {
    font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    .title{
        font-size: 15px;
        font-family:fantasy;
        font-weight:  bolder;
    }
    .box-card {
        position: relative;
        width: 50rem;
        height: 30rem;
        top: 12rem;
        left: 50%;
        background: rgba(255, 255, 255, 0.863);
    }
    .filename{
        font-size: 28px;
        font-weight:  bolder;
        font-family:cursive;
        color: blueviolet;
    }
    .main{
        position: relative;
        height: 22rem;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .downloadlink{
        position: relative;
        top:10px;
        
    }
</style>