<template>
    <div class="dashboardWrap">
        <div class="dashboard">
            <el-row class="dashboardTag" :gutter="20">
                <icon-card
                        v-for="(list,index) in cardLists"
                        :backgroundColor="list.backgroundColor"
                        :icon="list.icon"
                        :topMessage="list.topMessage"
                        :middleMessage="list.middleMessage"
                        :bottomMessage="list.bottomMessage"
                        :to="list.to"
                />
            </el-row>
        </div>
        <el-card class="cardWrap">
            <div class="newArticle">
                <p>最新文章</p>
                <div class="articleWrap" v-for="article in articleLists">
                    <div class="article">
                        <span class="articleTitle">
                            {{article.title}}
                        </span>
                        <span class="createdTime">
                            <i class="el-icon-date"></i>{{article.createdTime}}
                        </span>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    import {getLatestArticle, getCardCount} from "../../api/article";
    import IconCard from './components/iconCard'

    export default {
        name: "dashboard",
        data() {
            return {
                articleCount: '0',
                deleteCount: '1',
                tagCount: '0',
                commentCount: '0',
                categoryCount: '0',
                articleLists: [],
            }
        },
        components: {
            'icon-card': IconCard
        },
        computed: {
            cardLists() {
                return [{
                    backgroundColor: '#29b6f6',
                    icon: 'el-icon-tickets',
                    topMessage: '共发表了',
                    middleMessage: this.articleCount,
                    bottomMessage: '篇文章',
                    to: 'articleManage'
                },
                    {
                        backgroundColor: '#33b86c',
                        icon: 'el-icon-delete',
                        topMessage: '垃圾箱共有',
                        middleMessage: this.deleteCount,
                        bottomMessage: '篇文章',
                        to: 'articleDeleted'
                    }, {
                        backgroundColor: '#6e8cd7',
                        icon: 'el-icon-collection-tag',
                        topMessage: '共有',
                        middleMessage: `${this.tagCount} / ${this.categoryCount}`,
                        bottomMessage: '个分类/标签',
                        to: 'adminCategories'
                    }, {
                        backgroundColor: '#E6A23C',
                        icon: 'el-icon-s-comment',
                        topMessage: '共有',
                        middleMessage: this.commentCount,
                        bottomMessage: '条评论',
                        to: 'adminComments'
                    }]
            }
        },
        methods: {
            getCardCountList() {
                getCardCount()
                    .then((response) => {
                        let cardCount = response.data
                        this.articleCount = cardCount.articleCount
                        this.deleteCount = cardCount.deleteCount
                        this.tagCount = cardCount.tagCount
                        this.commentCount = cardCount.commentCount
                        this.categoryCount = cardCount.categoryCount
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            getLatestArticleInfo() {
                getLatestArticle()
                    .then((result) => {
                        this.articleLists = result.data.articles
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        },
        created() {
            this.getLatestArticleInfo()
            this.getCardCountList()
        },
    }
</script>

<style scoped lang="scss">
    .dashboardTag {
        display: flex;
        flex-wrap: wrap;


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
                        margin-right: 5px;
                    }

                    font-size: 14px;
                    color: #999999;
                    margin-right: 10px;
                }
            }

            .articleWrap:first-child > .article {
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }

            .articleWrap:last-child > .article {
                border: 1px solid #eee;
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }
    }
</style>