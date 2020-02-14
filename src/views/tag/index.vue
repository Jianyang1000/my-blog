<template>
    <div class="tag">
        <el-card>
            <div slot="header" class="header">
                分类/标签
            </div>
            <div class="categoryManage">
                <div class="addTag">
                    <i class="el-icon-circle-plus-outline"></i>
                    添加分类
                </div>
                <el-table border stripe
                          :data="tableData"
                          style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="分类名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="文章数"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="创建时间">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="状态">
                    </el-table-column>
                    <el-table-column label="操作" width="300">
                        <template slot-scope="scope">
                            <el-button
                                    type="primary"
                                    @click="editTable(scope.$index, scope.row)"
                            >编辑</el-button
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
            </div>
            <div class="tagManage">
                <div class="addTag">
                    <i class="el-icon-circle-plus-outline"></i>
                    添加标签
                </div>
                <el-table border stripe
                          :data="tableData"
                          style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="标签名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="文章数"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="创建时间">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="状态">
                    </el-table-column>
                    <el-table-column label="操作" width="300">
                        <template slot-scope="scope">
                            <el-button
                                    type="primary"
                                    @click="editTable(scope.$index, scope.row)"
                            >编辑</el-button
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
            </div>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped lang="scss">
    .addTag {
        text-align: left;
        font-size: 16px;
        margin-bottom: 10px;
        font-weight: bold;
        cursor: pointer;
        display:inline-block;
        vertical-align: bottom;

    }
    .addTag:hover {
        i {
            color: #409EFF;
        }
    }
    .categoryManage {
        margin-bottom: 35px;
    }
    .categoryManage,.tagManage {
        text-align: left;
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
            width:180px;
            margin-right: 10px;
        }
    }
    .pagination {
        margin-top: 30px;
    }
</style>