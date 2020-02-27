<template>
    <div id="article-deleted">
        <el-card>
            <div slot="header" class="header">
                <span>文章管理 (共计: 6篇)</span>
            </div>
            <el-table border stripe
                    :data="articleLists">
                <el-table-column
                        prop="title"
                        label="标题"
                        min-width="100">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="cover"
                        label="封面图"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="is_encrypt"
                        label="加密"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="page_view"
                        label="阅读量"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="created_time"
                        label="发布时间"
                        width="128">
                </el-table-column>
                <el-table-column
                        prop="delete_time"
                        label="删除时间"
                        width="128">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                type="primary"
                                @click="handleEdit(scope.$index, scope.row)">还原
                        </el-button>
                        <el-button
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>


            <!-- 分页 -->
            <div
                    class="pagination"
                    v-show="articleLists.length > 0">
                <el-pagination
                        background
                        layout="prev, pager, next"
                >
                    <!--:page-size="pageSize"
                    @current-change="pageChange"
                    :current-page="currentPage"
                    :total="total"-->
                </el-pagination>
            </div>
            <!-- 分页 结束 -->
        </el-card>

    </div>

</template>

<script>
    import {getDeleteArticleList} from '@/api/article'
    export default {
        data() {
            return {
                articleLists: []
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            getArticleList(){
                getDeleteArticleList().then((results) => {
                    this.articleLists = results.data
                }).catch((error) => {
                    console.log(error);
                })
            }
        },

        created(){
            this.getArticleList()
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
    .el-button {
        padding: 8px 12px;
    }
</style>