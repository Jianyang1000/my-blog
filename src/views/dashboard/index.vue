<template>
    <div class="dashboardWrap">
        <div class="dashboard">
            <el-row class="dashboardTag" :gutter="20">
                <el-col :xl="{span:6}" :xs="{span:24}" :lg="{span:8}" :md="{span:12}">
                    <div class="articleCount">
                        <div class="leftIcon">
                            <i class="el-icon-tickets"></i>
                        </div>
                        <div class="rightWord">
                            <p>共发表了</p>
                            <p>6</p>
                            <p>篇文章</p>
                        </div>
                    </div>
                </el-col>
                <el-col :xl="{span:6}" :xs="{span:24}" :lg="{span:8}" :md="{span:12}">
                    <div class="draftCount">
                        <div class="leftIcon">
                            <i class="el-icon-s-management"></i>
                        </div>
                        <div class="rightWord">
                            <p>草稿箱共有</p>
                            <p>1</p>
                            <p>篇文章</p>
                        </div>
                    </div>
                </el-col>
                <el-col :xl="{span:6}" :xs="{span:24}" :lg="{span:8}" :md="{span:12}">
                    <div class="deleteCount">
                        <div class="leftIcon">
                            <i class="el-icon-delete"></i>
                        </div>
                        <div class="rightWord">
                            <p>垃圾箱共有</p>
                            <p>0</p>
                            <p>篇文章</p>
                        </div>
                    </div>
                </el-col>
                <el-col :xl="{span:6}" :xs="{span:24}" :lg="{span:8}" :md="{span:12}">
                    <div class="tagCount">
                        <div class="leftIcon">
                            <i class="el-icon-collection-tag"></i>
                        </div>
                        <div class="rightWord">
                            <p>共有</p>
                            <p>4/11</p>
                            <p>个分类/标签</p>
                        </div>
                    </div>
                </el-col>
                <el-col :xl="{span:6}" :xs="{span:24}" :lg="{span:8}" :md="{span:12}">
                    <div class="commentCount">
                        <div class="leftIcon">
                            <i class="el-icon-s-comment"></i>
                        </div>
                        <div class="rightWord">
                            <p>共有</p>
                            <p>6</p>
                            <p>条评论</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-card class="cardWrap">
                <div class="newArticle">
                    <p>最新文章</p>
                    <div class="articleWrap">
                        <div class="article">
                        <span class="articleTitle">
                            Vue实现组件复用
                        </span>
                            <span class="createdTime">
                            <i class="el-icon-date"></i>2016.11.12
                        </span>
                        </div>
                        <div class="article">
                        <span class="articleTitle">
                            实现一个自定义的轮播图
                        </span>
                            <span class="createdTime">
                            <i class="el-icon-date"></i>2016.11.12
                        </span>
                        </div>
                        <div class="article">
                        <span class="articleTitle">
                            javascirpt中的闭包
                        </span>
                            <span class="createdTime">
                            <i class="el-icon-date"></i>2016.11.12
                        </span>
                        </div>
                        <div class="article">
                        <span class="articleTitle">
                            开始react的学习
                        </span>
                            <span class="createdTime">
                            <i class="el-icon-date"></i>2016.11.12
                        </span>
                        </div>
                        <div class="article">
                        <span class="articleTitle">
                            Vue实现组件复用
                        </span>
                            <span class="createdTime">
                            <i class="el-icon-date"></i>2016.11.12
                        </span>
                        </div>
                    </div>
                </div>
        </el-card>

    </div>


</template>

<script>
    export default {
        name: "dashboard"
    }
</script>

<style scoped lang="scss">
    .dashboardTag {
        display: flex;
        flex-wrap: wrap;

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
        .articleCount {
            background-color: #45B5F5;
        }

        .draftCount {
            background-color: #7D57C1;
        }

        .deleteCount {
            background-color: #53B86C;
        }

        .tagCount {
            background-color: #6C8AD6;
        }

        .commentCount {
            background-color: #E5A13C;
        }
    }
    .cardWrap {
        border-radius: 5px;
        margin-top: 30px;
        .newArticle {
            border-radius: 5px;
            > p {
                color: #555555;
                font-size: 16px;
                text-align: left;
                margin-bottom: 15px;
                font-weight: bold;
            }

            .article {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border: 1px solid #eee;
                border-bottom: none;
                padding: 10px;
                color: #777;
                .articleTitle {

                }

                .createdTime {
                    i {
                        margin-right:5px;
                    }
                    font-size: 14px;
                    color: #999999;
                    margin-right: 10px;
                }
            }
            .article:first-child {
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }
            .article:last-child {
                border: 1px solid #eee;
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }
    }
</style>