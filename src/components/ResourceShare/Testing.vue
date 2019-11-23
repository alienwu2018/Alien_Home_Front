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
                <a :href="v" class="downloadlink">
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
import axios from 'axios'
import Icon from '@/assets/zip.png'
 
export default {
    created(){
      this.api()
    },
    data(){
        return{
            download:'',
            icon :Icon,
        }
    },
    methods:{
        api(){
            axios.get('http://101.132.69.130:8888/api/testfile').then(res=>{
                this.download=res.data
            })
        }
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