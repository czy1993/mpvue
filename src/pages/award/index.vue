<template>
    <div class="award">
        <div class="awardHead">开奖历史</div>
        <div class="awardNav">
            <div class="awardNavList" v-for="(item,index) in awardLists" :key="index">
                <h1 class="awardName">{{item.NAME}}</h1>
                <div class="awardText">
                    <p>
                        <span>第{{item.PERIOD_NO}}期</span>
                        <span>{{item.AWARD_data}}</span>
                    </p>
                    <p class="clearTimes">
                        <span>第{{item.NEXT_PERIOD_NO}}期</span>
                        <span class="second">
                            00:00
                            <!-- <i-count-down 
                                :target="item.NEXT_AWARD_TIME"
                                :clear-timer="item.SYSDATE"
                            ></i-count-down> -->
                        </span>
                        
                    </p>
                </div>
                <ul class="awardNum">
                    <li v-for="(itemI,inde) in awardNumList[index]" :key="inde">
                        <div class="lotteryNum" v-if="item.BASE_LOTTERY_CLASS_ID == '4'">
                            <img :src="'../../static/images/award/sz'+itemI+'.png'" alt="">
                        </div>
                        <div class="lotteryNum" v-else-if="item.BASE_LOTTERY_CLASS_ID == '6'">
                            <img :src="'../../static/images/award/'+itemI+'.png'" alt="">
                        </div>
                        <div v-else class="lotteryNum spans">{{itemI}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import awardList from "../../../static/js/awardList"
export default {
    data(){
        return{
            awardLists:[],
            awardNumList:[],
        }
    },
    created(){
        this.getList(awardList)
        this.awardLists = awardList;
    },
    computed:{
        
    },
    methods:{
        formatetime(type, now) {
            let hour = new Date(now).getHours();
            let min = new Date(now).getMinutes();
            let sec = new Date(now).getSeconds();
            if (hour < 10) hour = "0" + hour;
            if (min < 10) min = "0" + min;
            if (sec < 10) sec = "0" + sec;
            if (type === "1") {
            return hour + ":" + min + ":" + sec;
            } else if (type === "2") {
            return min + ":" + sec;
            }
        },
        getList(arry){
            arry.forEach(item => {
                if (
                    item.PERIOD_NO == null ||
                    item.PERIOD_NO == "" ||
                    item.PERIOD_NO == undefined
                    ) {
                    item["PERIOD_NO"] = "--";
                    } else {
                    item["PERIOD_NO"] = item.PERIOD_NO.substring(4);
                    }
                    if (
                    item.NEXT_PERIOD_NO == null ||
                    item.NEXT_PERIOD_NO == "" ||
                    item.NEXT_PERIOD_NO == undefined
                    ) {
                    item["NEXT_PERIOD_NO"] = "--";
                    } else {
                    item["NEXT_PERIOD_NO"] = item.NEXT_PERIOD_NO.substring(4);
                    }
                    if (
                    item.AWARD_TIME == null ||
                    item.AWARD_TIME == "" ||
                    item.AWARD_TIME == undefined
                    ) {
                    item["AWARD_TIME"] = "00:00:00";
                    } else {
                    item["AWARD_data"] = this.formatetime('1',item.AWARD_TIME);
                    item["AWARD_TIME"] = item.AWARD_TIME;
                    }
                    if (item.WIN_NUMBERS == null && item.BASE_LOTTERY_ID == 6) {
                    this.isActiveI = true;
                    this.awardNumList.push([
                        "?",
                        "?",
                        "?",
                        "?",
                        "?",
                        "?",
                        "?",
                        "?",
                        "?",
                        "?"
                    ]);
                    } else if (
                    item.WIN_NUMBERS == null &&
                    (item.BASE_LOTTERY_ID == 4 || item.BASE_LOTTERY_ID == 1)
                    ) {
                    this.isActiveI = false;
                    this.awardNumList.push(["?", "?", "?"]);
                    } else if (item.WIN_NUMBERS == null) {
                    this.isActiveI = false;
                    this.awardNumList.push(["?", "?", "?", "?", "?"]);
                    } else {
                    this.isActiveI = false;
                    this.awardNumList.push(item.WIN_NUMBERS.split(","));
                    }
            });
        }
    }
}
</script>

<style lang="less" scoped>
.award{
    .awardHead{
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
    .awardNav{
        position: relative;
        left: 0;
        top: 80rpx;
        font-size: 24rpx;
        .awardNavList{
            padding:26rpx 26rpx 10rpx 26rpx;
            border-bottom: 2rpx solid #c1c1c1;
            .awardName{
                font-size: 34rpx;
                color: #f77b16;
            }
            .awardText{
                height: 40rpx;
                display: flex;
                justify-content: space-between;
                p{
                    line-height: 40rpx;
                    color: rgb(102, 102, 102);
                    span{
                        margin-left: 10rpx;
                    }
                }
                .clearTimes{
                    display: flex;
                    justify-content: flex-end;
                    
                    .second{
                        color: #dd1c37;
                        font-size: 28rpx
                    }
                }
            }
            .awardNum{
                height: 80rpx;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                box-sizing: border-box;
                padding: 10rpx;
                li{
                    margin-right: 8rpx;
                    height: 60rpx;
                    width: 60rpx;
                    line-height: 65rpx;
                    font-size: 40rpx;
                    .spans{
                        background: #dd1c37;
                    }
                    .lotteryNum{
                        display: block;
                        height: 60rpx;
                        width: 60rpx;
                        text-align: center;
                        color: #fff;
                        border-radius: 60rpx;
                        img{
                            height: 60rpx;
                            width: 60rpx;
                        }
                    }
                }
            }
        }
    }
}
</style>
