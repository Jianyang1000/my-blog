<template>
    <div class="home">
        <div v-if="true" v-for="(article,index) in articleList" :key="article.id">
            <article class="article animated swing">
                <header class="article_header">
                    <h1 @click="toDetail(article._id)">
                        <a class="article_title">{{article.title}}</a>
                    </h1>
                </header>
                <div class="article_content">
                    <div class="article_image" @click="toDetail(article._id)">
                        <img :src="article.cover" alt="article_image">
                    </div>
                    <div class="article_subMessage">
                        <p>
                            {{article.sub_message}}
                        </p>
                    </div>
                </div>
                <footer class="article_footer">
                    <div class="left">
                    <span class="time">
                        <i class="el-icon-date"></i>　{{article.created_time}}
                    </span>
                        <span class="tag">
                        <i class="el-icon-collection-tag"></i>
                        <a href="/" class="tag_icon" v-for="tag in article.tag">{{tag}}</a>
                    </span>
                    </div>
                    <div class="right">
                        <span class="more" @click="toDetail(article._id)">more&gt;&gt;</span>
                    </div>
                </footer>
            </article>
        </div>

    </div>
</template>

<script>
    import {getArticleList} from "@/api/article";
    import {articleHomeDate} from '@/utils/formatDate';

    export default {
        name: "BlogHome",
        data() {
            return {
                articleList: []
            }
        },
        methods: {
            getArticleListInfo() {
                getArticleList()
                    .then((response) => {
                        const result = response.data
                        result.forEach((article) => {
                            article.created_time = articleHomeDate(new Date(article.created_time))
                        })
                        this.articleList = result
                    })
                    .catch((error) => {
                        this.$message.error({message: error})
                    })
            },
            toDetail(articleId) {
                this.$router.push({
                    path: '/blog/article',
                    query: {
                        id: articleId
                    }
                })
            }
        },
        created() {
            this.getArticleListInfo()
        }
    }
</script>

<style scoped lang="scss">
    .home {

        max-width: 920px;
        margin: 0 auto;
        padding: 30px 20px 30px 20px;

        .article {
            width: 100%;
            max-width: 920px;
            margin-bottom: 30px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 1px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

            .article_header {
                box-sizing: border-box;
                padding: 15px;

                h1 {
                    cursor: pointer;

                    .article_title {
                        display: block;
                        padding: 4px 80px 4px 15px;
                        border-left: 4px solid #0cc;
                        text-decoration: none;
                        color: #444;
                        font-size: 18px;
                        transition: all 0.3s;
                        text-align: left;
                    }

                    &:hover {
                        .article_title {
                            color: #0cc;
                            padding-left: 8px;
                        }
                    }
                }

            }

            .article_content {
                border-top: 1px solid #e8e8e8;
                border-bottom: 1px solid #e8e8e8;
                background-color: #f9f9f9;
                padding: 15px;
                color: #444;
                display: flex;
                justify-content: space-between;

                .article_image {
                    cursor: pointer;
                    height: 150px;
                    width: 300px;
                    overflow: hidden;

                    > img {
                        display: inline-block;
                        vertical-align: bottom;
                        width: 300px;
                        height: 150px;
                        transition: all 0.8s;

                        &:hover {
                            -webkit-transform: scale(1.5);
                        }
                    }

                }

                .article_subMessage {
                    flex: 1;
                    margin: 13px 0 13px 20px;
                    font-size: 16px;
                    color: #444;

                    > p {
                        text-align: left;
                    }
                }
            }

            .article_footer {
                padding: 19px 15px;
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                color: #999;

                .time {
                    margin-right: 20px;
                }

                .tag {
                    .tag_icon {
                        position: relative;
                        background-color: #0cc;
                        color: #fff;
                        text-decoration: none;
                        height: 18px;
                        line-height: 18px;
                        padding: 1px 5px 1px 10px;
                        border-radius: 0 5px 5px 0;
                        margin: 5px 10px 5px 18px;

                        &:before {
                            content: ' ';
                            width: 0;
                            height: 0;
                            position: absolute;
                            top: 0;
                            left: -18px;
                            border: 9px solid transparent;
                            border-right-color: #0cc;
                        }

                        &:after {
                            content: ' ';
                            width: 4px;
                            height: 4px;
                            background-color: #fff;
                            border-radius: 4px;
                            box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3);
                            position: absolute;
                            top: 7px;
                            left: 2px;
                        }

                        &:hover {
                            opacity: 0.8;
                            color: #fff;
                        }
                    }
                }

                .more {
                    padding: 8px 20px;
                    background-color: #0cc;
                    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06), 0 3px 10px rgba(0, 0, 0, 0.13);
                    transition: all 0.1s;
                    cursor: pointer;
                    color: #fff;

                    &:hover {
                        opacity: 0.8;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.09), 0 4px 10px rgba(0, 0, 0, 0.17);
                        text-shadow: 0 1px #1e7293;
                    }
                }
            }
        }
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>