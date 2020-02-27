<template>
    <div class="className">
        <el-card class="anoCard">
            <div slot="header" class="header">
                <span>文章管理 (共计: 6篇)</span>
            </div>
            <div class="searchBar">
                <el-input
                        type="text"
                        placeholder="请输入文章关键词"
                        class="width1"
                        v-model="articleKey"
                ></el-input>

                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                <el-button
                        type="primary"
                        icon="el-icon-circle-plus-outline"
                >添加</el-button>
            </div>
            <el-table :data="articleLists" border stripe>
                <el-table-column prop="title" label="标题" min-width="200"></el-table-column>
                <el-table-column prop="cover" label="封面图"></el-table-column>
                <el-table-column prop="category" label="分类"></el-table-column>
                <el-table-column prop="tag" label="标签"></el-table-column>
                <el-table-column prop="is_encrypt" label="加密"></el-table-column>
                <el-table-column
                        prop="page_view"
                        label="浏览次数"
                        width="210"
                ></el-table-column>
                <el-table-column prop="created_time" label="发布时间"></el-table-column>
                <el-table-column prop="updated_time" label="修改时间"></el-table-column>
                <el-table-column label="操作" width="300">
                    <template slot-scope="scope">
                        <el-button
                                type="success"

                        >查看</el-button>
                        <el-button
                                type="primary"

                        >编辑</el-button
                        >
                        <el-button
                                type="danger"
                        >删除</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    background
                    layout="total, sizes, prev, pager, next"
                    class="pagination"
            >
                <!--:page-sizes="pageSizes"
                :page-size="pageSize"
                :current-page="currentPage"
                :total="total"

                @size-change="handleSize"
                @current-change="handlePage"-->
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
    import {getManageArticleList} from '@/api/article'
    export default {
        name: "manage_article",
        methods: {

        },
        data(){
            return {
                articleKey: '',
                articleLists:[]
            }
        },
        methods: {
          getArticle(){
              getManageArticleList().then((results) => {
                  this.articleLists = results.data
              }).catch((error) => {
                  console.log(error);
              })
          }
        },
        created(){
            this.getArticle()
        }
    }
</script>

<style scoped lang="scss">
    .header {
        display: flex;
        justify-content: flex-start;
        text-align: left;
        font-size: 20px;
        font-weight: bold;
    }
    .searchBar {
        display: flex;
        margin-bottom: 20px;
        > div {
            width:180px;
            margin-right: 10px;
        }
    }
    .pagination {
        margin-top: 30px;
    }
    .el-button {
        padding: 8px 12px;
    }
</style>