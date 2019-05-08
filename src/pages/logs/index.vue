<template>
  <div class="personar" >
     <div class="personarHead">
       个人中心
     </div>
     <div class="personarTop">
       <div class="">
         <img str:""/>
       </div>
       <div class="">
         <p>
           <span>未登录！</span>
           <span></span>
         </p>
         <p>
           <span>余额</span>
           <span></span>
           <img/>
         </p>
       </div>
       <div class="">
         <button>代理中心</button>
       </div>
     </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
export default {
  data () {
    return {
      
    }
  },

  created () {
   
  }
}
</script>

<style lang="less">
.personar{
  .personarHead{
    height: 80rpx;
    background: linear-gradient(135deg,#132e7b,#00c9ca)!important;
    width: 100%;
    padding: 8rpx;
    box-sizing: border-box;
    color:#fff;
    text-align: center;
    line-height: 80rpx;
    font-size:35rpx;
  }
  .personarTop{
    height:220rpx;
    background: linear-gradient(135deg,#132e7b,#00c9ca)!important;
    width: 100%;
  }
}
</style>
