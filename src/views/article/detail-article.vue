<template>
    <div class="article-detail">
        <div class="article_detail_wrap">
            <div class="article_introduce">
                <div class="articleTitle">
                    {{ title }}
                </div>
                <div class="articleBaseInfo">
                    <span class="time"><i class="el-icon-date"></i>　发布于 {{time}} </span>
                    <span class="category">　•　<i class="el-icon-folder"></i>　　{{ category }}　•　</span>
                    <span class="page_view"><i class="el-icon-view">　{{page_view}}次围观</i></span>
                </div>
                <div class="articleSubMessage">{{sub_message}}</div>
            </div>

        </div>

    </div>
</template>


<script>
    import {articleDetail} from "@/api/article";
    import {formatDate} from '@/utils/formatDate'
    export default {
        name: "detail-article",
        data(){
            return {
                title: '',
                time: '',
                category: '',
                page_view: '',
                sub_message: '',
                htmlContent: ''
            }
        },
        methods: {
            getArticleDetail(){
                const id = this.$router.currentRoute.query.id
                articleDetail(id)
                    .then((response) => {
                        const articleInfo = response.data[0]
                        const created_time = new Date(articleInfo.created_time)
                        this.title = articleInfo.title
                        this.time = formatDate(created_time)
                        this.category = articleInfo.category
                        this.page_view = articleInfo.page_view
                        this.sub_message = articleInfo.sub_message
                        this.htmlContent = articleInfo.html_content
                    })
                    .catch((error) => {
                        this.$message.error({message:error})
                    })
            }
        },
        created() {
            this.getArticleDetail()
        }
    }
</script>

<style scoped lang="scss">
    .article-detail {
        padding: 36px 30px;
        .article_detail_wrap {
            display: flex;
            padding: 30px;
            justify-content: center;
            flex-direction: column;
            box-shadow: 0 0 5px 0 rgba(38,42,48,.1);
            background-color: #fff;
            min-width: 320px;
            max-width: 1000px;
            .articleTitle {
                font-size: 26px;
                font-weight: 700;
            }
            .articleBaseInfo {
                margin: 20px 0;
                font-size: 14px;
                color: #666;
            }
            .articleSubMessage {
                font-size: 14px;
                color: #999;
                margin-bottom: 20px;
            }
            .article_content {
                width: 100%;
            }
        }
    }


</style>