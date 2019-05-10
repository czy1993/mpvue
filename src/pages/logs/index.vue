<template>
  <div class="personar" >
     <div class="personarHead">
       个人中心
     </div>
     <div class="personarTop">
       <div class="left">
         <img src="../../../static/images/personal/avatar.png" alt="">
       </div>
       <div class="center">
         <p>
           <span>未登录！</span>
           <span></span>
         </p>
         <p>
           <span>余额</span>
           <span>0.00</span>
           <img src="" alt="">
         </p>
       </div>
       <div class="right">
         <span>代理中心</span>
       </div>
     </div>
     <div class="personarCard">
       <div class="moneyChange">
         <div class="left">
           <img src="../../../static/images/personal/top_ups.png" alt="">
           <p>充值</p>
         </div>
         <div class="centers">
           <i></i>
         </div>
         <div class="right">
           <img src="../../../static/images/personal/Withdrawals.png" alt="">
           <p>提现</p>
         </div>
       </div>
     </div>
     <div class="personarNav">
       <div v-for="(item,index) in nav" :key="index">
         <img :src="item.img" alt="">
         <span>{{item.text}}</span>
         <p>
           <i-icon type="enter" size="24" color="#80848f" />
         </p>
       </div>
     </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
export default {
  data () {
    return {
      nav: [
        {
          img: "../../static/images/personal/Personal_information.png",
          text: "个人信息",
          to: "/memberModify"
        },
        {
          img: "../../static/images/personal/redpacket.png",
          text: "我的红包",
          to: "/myRedEnvelope",
          isMember: true
        },
        {
          img: "../../static/images/personal/Recharge_order.png",
          text: "下级充提",
          badge: true,
          to: "/subRecWith"
        },
        {
          img: "../../static/images/personal/Personal_report.png",
          text: "个人报表",
          to: "/personalReport",
          isMember: true
        },
        {
          img: "../../static/images/personal/Agency_report.png",
          text: "代理报表",
          to: "/lotteryReport",
          isAuth: true
        },
        {
          img: "../../static/images/personal/Account_Change_Inquiry.png",
          text: "存取记录",
          to: "/accountBill"
        },
        {
          img: "../../static/images/personal/Fund-transfer-point.png",
          text: "资金转点",
          to: "/turningPoint"
        },
        {
          img: "../../static/images/personal/access_record.png",
          text: "帐变记录",
          to: "/cashflow"
        },
        {
          img: "../../static/images/personal/Bank_account.png",
          text: "银行账号",
          to: "/bankCard"
        },
        {
          img:"../../static/images/personal/members.png",
          text: "代理会员",
          to: "/members",
          isAuth: true
        },
        {
          img: "../../static/images/personal/changeRebate.png",
          text: "赚水设置",
          to: "/changeRebate",
          isAuth: true
        },
        {
          img: "../../static/images/personal/referralLink.png",
          text: "推广链接",
          to: "/referralLink",
          isAuth: true
        },
        {
          img: "../../static/images/personal/Chat_room.png",
          text: "聊天室",
          to: "/chartroom",
          type: "1"
        },
        {
          img: "../../static/images/personal/My_news.png",
          text: "我的消息",
          to: "/announcement"
        },
        {
          img:"../../static/images/personal/Security_Center.png",
          text: "安全中心",
          to: "/security?id=0"
        },
        {
          img: "../../static/images/personal/Suggested_feedback.png",
          text: "建议反馈",
          to: "/helpFeedback"
        }
      ],
    }
  },

  created () {
   
  }
}
</script>

<style lang="less">
.personar{
  .personarHead{
    position: fixed;
    left: 0;
    top: 0;
    height: 80rpx;
    background: linear-gradient(135deg,#132e7b,#00c9ca)!important;
    width: 100%;
    padding: 8rpx;
    box-sizing: border-box;
    color:#fff;
    text-align: center;
    line-height: 80rpx;
    font-size:35rpx;
    z-index: 10;
  }
  .personarTop{
    position: relative;
    top: 80rpx;
    left: 0;
    height:220rpx;
    background: linear-gradient(135deg,#132e7b,#00c9ca)!important;
    width: 100%;
    font-size: 28rpx;
    color: #fff;
    box-sizing: border-box;
    padding: 20rpx 30rpx;
    div{
      float: left;
    }
    .left{
      width: 25%;
      height: 160rpx;
      box-sizing: border-box;
      padding: 10rpx 20rpx;
      img{
        height: 100rpx;
        width: 100rpx;
        border-radius: 100%;
        z-index: 10;
        border:2rpx solid #fff;
      }
    }
    .center{
      width: 40%;
      height: 160rpx;
      p{
        height: 60rpx;
        line-height: 60rpx;
        span{
          float: left;
          margin-right: 15rpx;
        }
        img{
          float: left;
        }
      }
    }
    .right{
      width: 30%;
      height: 160rpx;
      box-sizing: border-box;
      padding: 40rpx 0;
      span{
        float: right;
        font-size: 28rpx;
        padding: 10rpx 15rpx;
        background: #ef4f4f;
        color: #fff;
        border-radius: 8rpx;
      }
    }
  }
  .personarNav{

    div{
      height: 80rpx;
      width: 100%;
      box-sizing: border-box;
      padding: 20rpx 40rpx;
      img{
        float: left;
        width: 40rpx;
        height: 40rpx;
        margin-right: 20rpx;
      }
      span{
        float: left;
        width: 70%;
        height: 40rpx;
        font-size: 24rpx;
        line-height: 40rpx;
      }
      p{
        float: right;
        width: 10%;
        height: 40rpx;
        margin-top: -10rpx;
      }
    }
  }
  .personarCard{
    position: relative;
    top: 80rpx;
    left: 0;
    height: 90rpx;
    width: 100%;
    .moneyChange{
      position: absolute;
      left: 5%;
      top: -60rpx;
      height: 140rpx;
      width: 90%;
      display: flex;
      justify-content: space-around;
      background: #fff;
      border-radius: 10rpx;
      z-index: 9;
      box-shadow: darkgrey 2rpx 2rpx 10rpx 5rpx ;
      .centers{
        padding-top: 20rpx;
      }
      div{
        box-sizing: border-box;
        padding-top: 20rpx;
        img{
          width: 50rpx;
          height: 50rpx;
          margin: 0 auto;
        }
        p{
          width: 100%;
          height: 50rpx;
          line-height: 50rpx;
          font-size: 28rpx;
          color: #000;
        }
        i{
          height: 100rpx;
          width: 2rpx;
          background: #ccc;
        }
      }
    }
  }
}
</style>
