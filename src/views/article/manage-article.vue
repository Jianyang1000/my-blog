<template>
    <div class="manage_article">
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
                >添加
                </el-button>
            </div>
            <el-table :data="articleLists" border stripe>
                <el-table-column prop="title" label="标题" min-width="130"></el-table-column>
                <el-table-column prop="cover" label="封面图" min-width="80">
                    <template slot-scope="scope">
                        <img v-if="scope.row.cover" :src="scope.row.cover" alt="image" class="smallImage"/>
                    </template>
                </el-table-column>
                <el-table-column prop="category" label="分类"></el-table-column>
                <el-table-column prop="tag" label="标签" :formatter="formatterTag"></el-table-column>
                <el-table-column prop="is_encrypt" label="加密">
                    <template slot-scope="scope">
                        {{ scope.row.is_encrypt == '0' ? '否' : '是' }}
                    </template>
                </el-table-column>
                <el-table-column prop="page_view" label="浏览次数"></el-table-column>
                <el-table-column prop="created_time" width="180" label="发布时间"></el-table-column>
                <el-table-column label="操作" width="300" fixed="right">
                    <template slot-scope="scope">
                        <el-button
                                type="success"
                                @click="toDetail(scope.row['_id'])"
                        >查看
                        </el-button>
                        <el-button
                                type="primary"
                                @click="toEdit(scope.row['_id'])"
                        >编辑
                        </el-button
                        >
                        <el-button
                                type="danger"
                                @click="deleteArticleInfo(scope.row['_id'])"
                        >删除
                        </el-button
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
    import {getManageArticleList, deleteArticle} from '@/api/article'
    import {formatDate} from "../../utils/formatDate";

    export default {
        name: "manage_article",
        data() {
            return {
                articleKey: '',
                articleLists: []
            }
        },
        methods: {
            formatterTag(row, column){
                return row.tag.join('  ')
            },
            deleteArticleInfo(id) {
                this.$confirm("此操作将永久删除该文件, 是否继续?", '提示', {type: "warning"})
                    .then(() => {
                        deleteArticle(id)
                            .then((response) => {
                                this.$message.success({message: '删除成功!'})
                                this.getArticle()
                            })
                            .catch((error) => {
                                this.$message.error({message: error})
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            getArticle() {
                getManageArticleList().then((results) => {
                    results.data.forEach((article) => {
                        article.created_time = formatDate(new Date(article.created_time))
                    })
                    this.articleLists = results.data
                }).catch((error) => {
                    console.log(error);
                })
            },
            toDetail(id) {
                this.$router.push({
                    path: `/article_detail`,
                    query: {
                        id: id
                    }
                })
            },
            toEdit(id) {
                this.$router.push({
                    path: `/article/add`,
                    query: {
                        id: id
                    }
                })
            }
        },
        created() {
            this.getArticle()
        }
    }
</script>

<style scoped lang="scss">
    .manage_article {
        padding: 36px 30px;
    }

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
            width: 180px;
            margin-right: 10px;
        }
    }

    .pagination {
        margin-top: 30px;
    }

    .el-button {
        padding: 8px 12px;
    }
    .smallImage {
        width: 80%;

    }
</style>