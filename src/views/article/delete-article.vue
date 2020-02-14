<template>
    <div id="article-deleted">
        <el-card>
            <div slot="header" class="header">
                <span>文章管理 (共计: 6篇)</span>
            </div>
            <el-table border stripe
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        label="标题"
                        min-width="100">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        label="封面图"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="加密"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="阅读量"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="发布时间"
                        width="128">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="删除时间"
                        width="128">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="状态"
                        width="70">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                type="primary"
                                @click="handleEdit(scope.$index, scope.row)">编辑
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
                    v-show="tableData.length > 0">
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
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
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