<template>
    <div class="article">
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
            <md-preview :contents="html_content"></md-preview>
        </div>
    </div>
</template>

<script>
    import MdPreview from "@/components/MdPreview";
    import {articleDetail} from "@/api/article"
    import {formatDate} from '@/utils/formatDate'
    export default {
        name: "",
        data(){
            return {
                title: '',
                time: '',
                category: '',
                page_view: '',
                sub_message: '',
                html_content: ''
            }
        },
        components: {
            'md-preview':MdPreview
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
                        this.html_content = articleInfo.html_content
                    })
                    .catch((error) => {
                        this.$message.error({message:error})
                    })
            }
        },
        mounted() {
            this.getArticleDetail()
        }
    }
</script>

<style scoped lang="scss">
    .article_content {
    }
    .article {


        max-width: 920px;
        margin: 0 auto;
        padding: 30px 20px 30px 20px;

        padding: 36px 30px;
        .article_detail_wrap {
            display: flex;
            padding: 30px;
            justify-content: center;
            flex-direction: column;
            box-shadow: 0 0 5px 0 rgba(38,42,48,.1);
            background-color: #f9f9f9;
            min-width: 320px;
            max-width: 1000px;
            border: 1px solid #ddd;
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