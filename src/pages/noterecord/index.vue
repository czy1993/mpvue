<template>
    <div class="noterexord">
        <div class="noterexordHead">
            投注记录
        </div>
        <div class="noterexordTop">
            <div :class="(index=='1'||index=='4'||index=='5')?'noterexordTopActive':''" @click="changeIndex('1')">注单查询</div>
            <div :class="(index=='2')?'noterexordTopActive':''"  @click="changeIndex('2')">追号查询</div>
            <div :class="(index=='3')?'noterexordTopActive':''"  @click="changeIndex('3')">撤单查询</div>
            <div @click="lisenShow()">{{kindName}}</div>
        </div>
        <div class="kindList" v-if="show1==true">
            <div class="kindListNav">
                <span :class="(indexK==='all')?'kindListActive':''" @click="changeKindIndex('all','全部')">全部</span>
                <span v-for="(item,index) in awardList" :key="index" :class="(indexK==index)?'kindListActive':''" @click="changeKindIndex(index,item.NAME)">{{item.NAME}}</span>
            </div>
            <div class="kindListShow" @click="lisenShow"></div>
        </div>
        <div class="noterexordNav">
            <div class="navList" v-if="index!='3'">
                <div class="allcount">
                    <img src="../../../static/images/noterexord/gou_b.png" alt="">
                    <i>全选</i>
                </div>
                <div class="countCenter">
                    <span v-if="(index=='1'||index=='4'||index=='5')" class="todayList" :class="(index=='1')?'todayListActive':''" @click="changeIndex('1')">全部</span>
                    <span v-if="(index=='1'||index=='4'||index=='5')" class="todayList" :class="(index=='4')?'todayListActive':''" @click="changeIndex('4')">未结</span>
                    <span v-if="(index=='1'||index=='4'||index=='5')" class="todayList" :class="(index=='5')?'todayListActive':''" @click="changeIndex('5')">今日已结</span>
                </div>
                <div>
                    <span class="tell">撤单</span>
                </div>
            </div>
            <div class="navList" v-for="(item,indexs) in lotteryOrderList" :key="indexs"  v-if="item.kinkIindex == index||index == '1'">
                <div class="listXY" v-if="index!='3'">
                    <!-- <img v-if="" src="../../../static/images/noterexord/gou_a.png" alt=""> -->
                    <img  src="../../../static/images/noterexord/gou_b.png" alt="">
                </div>
                <div class="listCenter">
                    <p>{{item.baseLotteryName}}</p>
                    <p>{{item.gameName}}</p>
                </div>
                <div class="listCenter">
                    <p>{{item.periodNo}}</p>
                    <p>{{item.allAmount}}</p>
                </div>
                <div class="listXY">
                    <span>详情</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import awardList from "../../../static/js/awardList"
import lotteryOrder from "../../../static/js/noterexord"
export default {
    data(){
        return{
            index:"1",
            indexK:'all',
            awardList:awardList,
            show1:false,
            kindName:"全部",
            lotteryOrderList:[],
            navListIndex:[]
        }
    },
    created(){
        this.lotteryOrderList = lotteryOrder.list;
    },
    methods:{
        changeIndex(ind){
            this.index = ind;
        },
        changeKindIndex(indk,Name){
            this.indexK = indk;
            this.kindName = Name;
        },
        lisenShow(){
            this.show1==false?this.show1=true:this.show1=false;
        }
    }
}
</script>

<style lang="less">
.noterexord{
    
    .noterexordHead{
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
        z-index: 99;
    }
    .noterexordTop{
        position: fixed;
        left: 0;
        top: 80rpx;
        height: 70rpx;
        width: 100%;
        display: flex;
        justify-content: space-around;
        font-size: 30rpx;
        border-bottom: 2rpx solid #c1c1c1;
        background: #fff;
        z-index: 99;
        div{
            line-height: 70rpx;
        }
        .noterexordTopActive{
            color: #00c9ca;
            border-bottom: 5rpx solid #00c9ca;
        }
    }
    .kindList{
        position: fixed;
        top: 0rpx;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        z-index: 100;
        .kindListNav{
            position: fixed;
            top: 152rpx;
            left: 0;
            display: flex;
            flex-wrap:wrap;
            border-bottom: 2rpx solid #c1c1c1;
            background: #fff;
            z-index: 102;
            padding: 20rpx;
            box-sizing: border-box;
            span{
                width: 22%;
                height: 60rpx;
                line-height: 60rpx;
                font-size:30rpx;
                text-align: center;
                margin: 0 10rpx 8rpx;
                background: #f5f5f5;
                border-radius: 4rpx;
            }
            .kindListActive{
                background: #00c9ca;
                color: #fff;
            }
        }
        .kindListShow{
            position: fixed;
            top: 0rpx;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 101;
        }
        
    }
    .noterexordNav{
        position: relative;
        top: 150rpx;
        left: 0;
        .navList{
            height: 100rpx;
            width: 100%;
            display: flex;
            justify-content: space-around;
            box-sizing: border-box;
            padding: 10rpx 20rpx;
            border-bottom: 2rpx solid #c1c1c1;
            margin-bottom: 5rpx;
            div{
                height: 80rpx;
                font-size: 26rpx;
                text-align: center;
                box-sizing: border-box;
                img{
                    display: inline-block;
                    height: 80rpx;
                    width: 80rpx;
                    margin: 0 auto;
                }
                span{
                    display: inline-block;
                    height: 40rpx;
                    margin-top: 10rpx;
                    padding: 6rpx 15rpx;
                    background: #00c9ca;
                    color: #fff;
                    border-radius: 6rpx;
                    line-height: 40rpx;
                    margin-right: 10rpx;
                }
                .tell{
                     background: #ef4f4f;
                }
                .todayList{
                    color: #000;
                    border: 2rpx solid #c1c1c1;
                    background: #fff;
                }
                .todayListActive{
                    background: #2dabf3;
                    color: #fff;
                    border:0;
                }
            }
            .listXY{
                width: 20%;
            }
            .listCenter{
                width: 30%;
            }
            .allcount{
                display: flex;
                justify-content: space-around;
                img{
                    width: 70rpx;
                    height: 70rpx;
                    margin-top: 5rpx;
                }
                i{
                    display: inline-block;
                    height: 70rpx;
                    line-height: 70rpx;
                }
            }
            .countCenter{
                width: 60%;
            }
        }
    }
}
</style>

