<template>
  <div class="APPindex">
      <CardHeader></CardHeader>
      <swiper class="swipers" v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
        <block v-for="(item, index) in imgUrls" :key="index" >
          <swiper-item>
            <img class="images" :src="item" mode="scaleToFill" />
          </swiper-item>
        </block>
      </swiper>
      <div class="horseRaceLamp">
        <view class="marquee_container" style="--marqueeWidth--:-12em">
            <view class="marquee_text">{{lists}}</view>
        </view>
      </div>
      <div class="allKindID">
        <div v-for="(item,index) in allKindLists" :key="index" @click="changeList(item)">
          <img :src="'../../static/images/logo/'+item.classId+'.png'" alt="">
          <p  :class="(item.classId==classId)?'classIdActive':''">{{item.className}}</p>
          <span v-if="item.classId==classId" class="p_bottom"></span>
        </div>
      </div>
      <div class="allKind">
          <div class="allKindList" v-for="(itemI,index) in kindLists" :key="index"  v-if="(itemI.classId===classId)">
            <div class="allKindListleft">
              <img :src="'../../static/images/kindLogo/'+itemI.kindId+'.png'" alt="">
            </div>
            <div class="allKindListRight">
              <p class="kindName">{{itemI.kindName}}</p>
              <p class="issueNum">全天{{itemI.periodNoAll}}期</p>
              <p class="times">{{gameConfig[itemI.kindId].lotteryTime}}</p>
            </div>
          </div>
      </div>
    <!-- <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> -->
  </div>
</template>

<script>
import card from '@/components/card'
import CardHeader from '@/components/CardHeader'
import Marquee from '@/components/marquee'
import {mapState,mapMutations} from 'vuex'
import allkindList from "../../../static/js/allkindList"
import kindList from "../../../static/js/kindList"
import gameConfig from "../../../static/js/gameConfig"
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      ages:'',
      imgUrls:[
        "../../static/images/logo/banner1.png",
        "../../static/images/logo/banner2.jpg",
        "../../static/images/logo/banner3.jpg",
        "../../static/images/logo/banner4.png",
      ],
      allKindLists:[],
      kindLists:[],
      gameConfig:gameConfig,
      current: '00',
      lists:'全民代理全面上线 试玩体验博彩刺激 会员玩转畅玩赢世界 代理享受特权秀优越',
      intervalId: null ,
      classId:'6',
    }
  },
  components: {
    card,
    CardHeader,
    Marquee
  },
  created(){
    this.ages = this.age;
    this.allKindLists = allkindList;
    this.kindLists = kindList;
  },
  computed:{
    ...mapState(['age'])
  },
  methods: {
    ...mapMutations(['setAge']),  
    // allKindList(){
    //   console.log("开始请求拉")
    //   this.$httpWX.get({
    //     url: '/inter/ticket/kind'
    //   }).then(res => {
    //     console.log(res)
    //   })
    // },
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    changeList(obj){
      this.classId = obj.classId;
    }
  }
}
</script>

<style scoped lang="less">
.APPindex{
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .swipers{
    height: 275rpx;
    width: 100% !important;
    .images{
      height: 275rpx;
      width: 100% !important;
    }
  }
  .horseRaceLamp{
    height: 50rpx;
    width: 100%;
  }

  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }

  .usermotto {
    margin-top: 150px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }
  .all{
    width:7.5rem;
    height:1rem;
    background-color:blue;
  }
  .all:after{
    display:block;
    content:'';
    clear:both;
  }
  .left{
    float:left;
    width:3rem;
    height:1rem;
    background-color:red;
  }

  .right{
    float:left;
    width:4.5rem;
    height:1rem;
    background-color:green;
  }
  
  /*首页跑马灯效果*/
  @keyframes around {
    from {
    margin-left: 100%;
    }
    to {
    /* var接受传入的变量 */
    margin-left: var(--marqueeWidth--);
    }
  }
  .marquee_container{
  background-color: #fe4655;
  height: 50rpx;
  line-height: 44rpx;
  position: relative;
  width: 100%;
  margin-top:0rpx;
}
.marquee_container:hover{
  /* 不起作用 */
  animation-play-state: paused;
}
.marquee_text{
  color:#fff;
  font-size: 28rpx;
  display: inline-block;
  white-space: nowrap;
  animation-name: around;
  animation-duration: 10s;  /*过渡时间*/
  animation-iteration-count: infinite;
  animation-timing-function:linear;
}
.allKindID{
  height: 80rpx;
  width: 100%;
  overflow-y: auto;
  font-size: 22rpx;
  background-color: rgb(241, 242, 244);
  div{
    float: left;
    width: 120rpx;
    height: 80rpx;
    box-sizing: border-box;
    padding: 5rpx 5rpx 0 5rpx;
    img{
      display: block;
      width: 45rpx;
      height: 45rpx;
      margin: 0 auto;
    }
    p{
      height: 25rpx;
      width: 120rpx;
      text-align: center;
      line-height: 25rpx;
      margin-bottom:5rpx;
      color: #7d7e80;
    }
    .classIdActive{
      color: rgb(46, 105, 169) !important;
    }
    .p_bottom{
      display: block;
      width:50rpx;
      height:5rpx;
      margin:0 auto;
      background:rgb(46, 105, 169) !important;
    }
  }
}
.allKind{
  width: 100%;
  float: left;
  overflow-x: auto;
  box-sizing: border-box;
  padding: 15rpx 25rpx;
  .allKindList:nth-child(2n+1){
    margin-right: 3%;
    margin-bottom: 10rpx;
  }
  .allKindList{
    float: left;
    width: 48.5%;
    height: 140rpx;
    background-color: rgb(241, 242, 244);
    box-sizing: border-box;
    padding: 10rpx 15rpx ;
    border-radius: 15rpx;
    border: 1rpx solid #ccc;
    .allKindListleft{
      float: left;
      width: 37%;
      img{
        width: 110rpx;
        height: 110rpx;
      }
    }
    .allKindListRight{
      float: left;
      width: 58%;
      p{
        height: 32rpx;
        width: 100%;
        text-align: center;
        font-size: 24rpx;
        color: #7d7e80;
      }
      .kindName{
        color:#000;
        height: 40rpx;
        font-size: 28rpx;
      }
    }
  }
}
}
</style>
