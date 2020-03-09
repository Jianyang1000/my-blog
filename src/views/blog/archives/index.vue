<template>
    <div class="archives">
        <el-timeline>
            <el-timeline-item timestamp="2020" placement="top" color="#999">
                <div class="archives_article" v-for="article in articleList">
                    <header>
                        <span @click="toDetail(article._id)">{{article.created_time}}</span>
                        <h1 @click="toDetail(article._id)">
                            {{article.title}}
                        </h1>
                    </header>
                    <div class="article_tag">
                        <i class="el-icon-price-tag"></i>
                        <span class="tag" v-for="tag in article.tag">{{tag}}</span>
                    </div>
                </div>
            </el-timeline-item>

            <el-timeline-item placement="top" color="#999" :hide-timestamp="true">
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    import {getArticleList} from "@/api/article";
    import {archivesDate} from "@/utils/formatDate";

    export default {
        name: "",
        data(){
          return {
              articleList: []
          }
        },
        methods: {
            getArticleListInfo(){
                getArticleList()
                    .then((response) => {
                        const result = response.data
                        result.forEach((article) => {
                            article.created_time = archivesDate(new Date(article.created_time))
                        })
                        this.articleList = result
                    })
                    .catch((error) => {
                        this.$message.error({message:error})
                    })
            }
        },
        created() {
            this.getArticleListInfo()
        }
    }
</script>

<style lang="scss">
    .archives {
        max-width: 920px;
        margin: 0 auto;
        padding: 30px 20px 30px 20px;
    }
    .el-timeline-item__tail {
        border-left-color: #999 !important;
    }
    .el-timeline-item__content {
        display: flex;
        flex-wrap: wrap !important;
    }

    .archives_article {
        width: 400px;
        padding: 10px;
        margin-bottom: 15px;
        margin-right: 18px;
        background-color: #fff;
        box-shadow: 1px 2px 3px #ddd;
        border: 1px solid #ddd;
        border-radius: 3px;
        text-align: left;
        flex-shrink: 0;
        header {
            span {
                cursor: pointer;
                color: #999;
            }
            h1 {
                cursor: pointer;
                color: #444;
                font-size: 18px;
                transition: all 0.2s;
                font-weight: 400;
                &:hover {
                    color: #0cc;
                }
            }
        }
        .article_tag {
            border-top: 1px solid #e8e8e8;
            margin: 5px -10px 0 -10px;
            padding: 5px 10px 0 10px;
            font-size: 15px;
            color: #000;
            .tag {
                background-color: #ee6252;
                color: #fff;
                padding: 0 5px 1px 10px;
                border-radius: 0 5px 5px 0;
                margin: 5px 10px 5px 14px;
                height: 18px;
                line-height: 18px;
                position: relative;
                &:before {

                    content: ' ';
                    width: 0;
                    height: 0;
                    position: absolute;
                    top: 0;
                    left: -18px;
                    border: 9px solid transparent;
                    border-right-color: #ee6252;
                }
                &:after {
                    content: ' ';
                    width: 4px;
                    height: 4px;
                    background-color: #fff;
                    border-right: 4px;
                    position: absolute;
                    top: 7px;
                    left: 1px;
                    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);
                }
            }
        }
    }
    .el-timeline-item__timestamp {
        text-align: left;
        font-size: 20px !important;
        padding-top: 0 !important;
    }
</style>

<!--


### 关于我

我叫刘健阳
大二下半年开始自学前端
在校期间获得多个奖项

### 技术栈


- 熟练使用 Html、CSS、JS
- ES6语法
- Vue
- NodeJS、Express
- 常见网络协议
- 基础的算法与数据结构


### 项目


个人博客



铁大助手



CNode论坛



Simple Vue组件库
-->







