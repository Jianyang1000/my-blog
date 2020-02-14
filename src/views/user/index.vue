<template>
    <div class="user">
        <el-card>
            <div slot="header" class="header">
                <span>用户管理 (共计: 6)</span>
            </div>
            <div class="searchBar">
                <el-input
                        type="text"
                        placeholder="请输入姓名"
                        class="width1"
                ></el-input>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
            <el-table  border stripe>
                <el-table-column prop="title" label="用户名"></el-table-column>
                <el-table-column prop="tag" label="邮箱"></el-table-column>
                <el-table-column prop="category" label="禁言"></el-table-column>
                <el-table-column
                        prop="count"
                        label="权限"

                ></el-table-column>
                <el-table-column prop="created_time" label="注册时间"></el-table-column>
                <el-table-column label="操作" width="300">
                    <template slot-scope="scope">
                        <el-button
                                type="danger"
                                @click="toDelete(scope.row)"
                                :disabled="scope.row.status !== 3 ? false : true"
                        >取消</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    background
                    layout="total, sizes, prev, pager, next"

            >
                <!--:page-sizes="pageSizes"
                :page-size="pageSize"
                :current-page="currentPage"
                :total="total"
                class="pagination"
                @size-change="handleSize"
                @current-change="handlePage"-->
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: ""
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
</style>