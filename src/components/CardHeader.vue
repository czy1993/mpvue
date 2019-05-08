<template>
    <div class="CardHeader">
        <img class="logo" src="../../static/images/logo/logo2.png" alt="">
        <div class="buts">
              <button class="appDownload">APP下载</button>
              <button class="register">注册</button>
              <button class="login">登录</button>
        </div>
    </div>
</template>
<style lang="less">
.CardHeader{
    height: 50px;
    background: linear-gradient(135deg,#132e7b,#00c9ca)!important;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    .logo{
        float: left;
        height: 40px;
        width: 120px;
    }
    .buts{
        float: right;
        font-size: 14px;
        height: 40px;
        padding: 3px;
        box-sizing: border-box;
        button{
            float: right;
            margin-left: 5px;
            font-size: 16px;
            height: 34px;
            line-height: 34px;
            box-sizing: border-box;
            padding: 0 8px;
            color: #fff;
            border: 0;
        }
        .appDownload{
            background: #be3723;
        }
        .register{
            background: #fda81a;
        }
        .login{
            background:#03c50c; 
        }

    }
}
</style>

