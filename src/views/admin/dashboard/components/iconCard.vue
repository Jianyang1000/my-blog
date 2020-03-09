<template>
    <el-col :xl="{span:6}" :xs="{span:24}" :lg="{span:8}" :md="{span:12}">
        <div class="count" :style="{backgroundColor}" @click="$router.push({name:to})">
            <div class="leftIcon">
                <i :class="icon"></i>
            </div>
            <div class="rightWord">
                <p>{{ topMessage }}</p>
                <p> {{middleMessage}} </p>
                <p> {{bottomMessage}} </p>
            </div>
        </div>
    </el-col>
</template>

<script>
    export default {
        name: "IconCard",
        props: {
            backgroundColor: {
                type: String
            },
            icon: {
                type: String
            },
            topMessage: {
                type: String
            },
            middleMessage: {
                type: String
            },
            bottomMessage: {
                type: String
            },
            to:{
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">
    .el-col {
        flex-shrink: 0;

        > div {
            height: 130px;
            border-radius: 6px;
            margin-top: 13px;
            padding: 20px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            color: #fff;

            .leftIcon {
                font-size: 38px;
                border-radius: 50%;
                width: 76px;
                height: 76px;
                background-color: rgba(255, 255, 255, .2);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .rightWord {
                text-align: right;
                font-size: 18px;
                font-family: Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
            }
        }
    }
</style>