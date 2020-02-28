<template>
    <div class="personal noPadding">
        <div class="userInfoWrap">
            <div class="userInfo">
                <img src="@/assets/personal/user01.jpg" alt="">
                <div class="userInfoWord">
                    <div class="username">
                        Jianyang
                    </div>
                    <div class="introduce">
                        这个人很懒
                    </div>
                </div>
            </div>
        </div>
        <el-tabs>
            <el-tab-pane label="Message">
                <!-- <el-button type="success" slot="label">Message</el-button> -->
                Message
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "Personal"
    }
</script>

<style scoped lang="scss">

    .personal {
        .userInfoWrap {
            height: 230px;
            width: 100%;
            background: url(../../assets/personal/personBg.jpg) no-repeat center center;
            background-size: cover;
            color: #58666e;
            .userInfo {
                position: relative;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-color: rgba(255, 255, 255, 0.5);
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding-left: 50px;
                box-sizing: border-box;
                > img {
                    display: inline-block;
                    vertical-align: bottom;
                    width: 96px;
                    height: 96px;
                    border-radius: 50%;
                }
                .userInfoWord {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-left: 26px;
                    .username {
                        font-size: 20px;
                        margin-bottom: 15px;
                    }
                    .introduce {
                        font-size: 14px;
                    }
                }

            }


        }
    }

</style>

<style lang="scss">
    .personal {
        .el-tabs__header {
            padding: 15px 0;
            background: #fff;
            border-bottom: 1px solid #ddd;
            margin-bottom: 30px;
        }

        .el-tabs__nav-wrap {
            padding-left: 20px;
        }

        .el-tabs__nav-wrap::after {
            display: none;
        }

        .el-tabs__content {
            padding: 0 20px;
            text-align: left;
        }
    }
</style>