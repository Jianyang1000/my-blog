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
                ></el-input>
                <el-select
                        clearable
                        class="width1"
                        placeholde="请选择状态"
                >
                    <el-option
                            v-for="item in [{label:'1123',value:'12'}]"
                            :label="item.label"
                            :value="item.value"
                            :key="item.value"
                    ></el-option>
                </el-select>
                <el-date-picker
                        class="width1"
                        type="date"
                        placeholder="选择日期时间"
                        value-format="yyyy-MM-dd"
                ></el-date-picker>
                <el-button type="primary" icon="el-icon-search">搜索</el-button
                >
                <el-button
                        type="primary"
                        icon="el-icon-circle-plus-outline"
                >添加</el-button
                >
            </div>
            <el-table  border stripe>
                <el-table-column prop="title" label="标题"></el-table-column>
                <el-table-column prop="tag" label="标签"></el-table-column>
                <el-table-column prop="category" label="分类"></el-table-column>
                <el-table-column
                        prop="count"
                        label="浏览次数"
                        width="210"
                ></el-table-column>
                <el-table-column prop="created_time" label="发布时间"></el-table-column>
                <el-table-column prop="modified_time" label="修改时间"></el-table-column>
                <el-table-column label="操作" width="300">
                    <template slot-scope="scope">
                        <el-button
                                type="primary"
                                @click="editTable(scope.$index, scope.row)"
                        >编辑</el-button
                        >
                        <el-button
                                type="warning"
                                @click="toConfirm(scope.row)"
                                :disabled="scope.row.status === 1 ? false : true"
                        >审核</el-button
                        >
                        <el-button
                                type="success"
                                @click="toSuccess(scope.row)"
                                :disabled="scope.row.status === 2 ? false : true"
                        >完成</el-button
                        >
                        <el-button
                                type="danger"
                                @click="toDelete(scope.row)"
                                :disabled="scope.row.status !== 3 ? false : true"
                        >取消</el-button
                        >
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