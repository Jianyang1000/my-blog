<template>
    <div class="tag">
        <el-card>
            <div slot="header" class="header">
                分类/标签
            </div>
            <div class="categoryManage">
                <div class="addTag" @click="categoryDialogVisible = true">
                    <i class="el-icon-circle-plus-outline"></i>
                    添加分类
                </div>
                <el-table border stripe
                          :data="categoryData"
                          style="width: 100%">
                    <el-table-column
                            prop="name"
                            label="分类名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="category_count"
                            label="文章数"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="created_time"
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
                                    @click="openUpdateCategory(scope.row)"
                            >编辑
                            </el-button>

                            <el-button
                                    type="danger"
                                    @click="deleteCategoryInfo(scope.row['_id'])"
                            >删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>


            <!-- tag -->

            <div class="tagManage">
                <div class="addTag" @click="tagDialogVisible = true">
                    <i class="el-icon-circle-plus-outline"></i>
                    添加标签
                </div>
                <el-table border stripe
                          :data="tagData"
                          style="width: 100%">
                    <el-table-column
                            prop="name"
                            label="标签名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="tag_count"
                            label="文章数"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="created_time"
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
                                    @click="openUpdateTag(scope.row)"
                            >编辑
                            </el-button
                            >
                            <el-button
                                    type="danger"
                                    @click="deleteTagInfo(scope.row['_id'])"
                            >删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>

        <!-- 添加 -->

        <el-dialog title="添加分类" :visible.sync="categoryDialogVisible" :append-to-body="true" width="25%">
            <el-form :model="categoryForm" :rules="rules" ref="categoryAddForm">
                <el-form-item label="分类名称" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="categoryForm.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="categoryDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="doAddCategory('categoryForm')">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="添加标签" :visible.sync="tagDialogVisible" :append-to-body="true" width="25%">
            <el-form :model="tagForm" :rules="rules" ref="tagForm">
                <el-form-item label="标签名称" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="tagEditForm.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="tagDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="doAddTag('tagForm')">确 定</el-button>
            </div>
        </el-dialog>

        <!-- 编辑 -->
        <el-dialog title="编辑分类" :visible.sync="categoryEditDialogVisible" :append-to-body="true" width="25%">
            <el-form :model="categoryEditForm" :rules="rules" ref="categoryEditForm">
                <el-form-item label="分类名称" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="categoryEditForm.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="categoryEditDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateCategoryInfo('categoryEditForm')">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="编辑标签" :visible.sync="tagEditDialogVisible" :append-to-body="true" width="25%">
            <el-form :model="tagEditForm" :rules="rules" ref="tagEditForm">
                <el-form-item label="标签名称" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="tagEditForm.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="tagEditDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateTagInfo('tagEditForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {
        getCategory,
        getTag,
        addTag,
        addCategory,
        deleteCategory,
        deleteTag,
        updateCategory,
        updateTag
    } from "../../api/tag_category";

    export default {
        name: "Tag",
        data() {
            let checkName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('标签/种类名不能为空'));
                }
                callback()
            }
            return {
                tagData: [],
                categoryData: [],
                categoryForm: {
                    name: ''
                },
                tagForm: {
                    name: ''
                },
                categoryEditForm: {
                    name: '',
                    _id: '',
                    created_time: '',
                    category_count: ''
                },
                tagEditForm: {
                    name: '',
                    _id: '',
                    created_time: '',
                    tag_count: ''
                },
                formLabelWidth: '100px',
                tagDialogVisible: false,
                categoryDialogVisible: false,
                categoryEditDialogVisible: false,
                tagEditDialogVisible: false,
                rules: {
                    name: [
                        {required: true, message:'请输入标签/分类名',trigger: 'blur'}
                    ]
                },
            }
        },
        methods: {
            openUpdateCategory(row) {
                this.categoryEditForm = Object.assign({}, row);
                this.categoryEditDialogVisible = true

            },
            openUpdateTag(row) {
                this.tagEditForm = Object.assign({}, row);
                this.tagEditDialogVisible = true

            },
            deleteTagInfo(id) {
                this.$confirm("此操作将永久删除该文件, 是否继续?", '提示', {type: "warning"}).then(() => {
                    deleteTag(id)
                        .then((response) => {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.getTagInfo()
                        })
                        .catch((error) => {
                            this.$message({
                                type: 'error',
                                message: '删除失败!'
                            });
                        })
                }).catch((error) => {
                    console.log(error);
                })
            },
            deleteCategoryInfo(id) {
                this.$confirm("此操作将永久删除该文件, 是否继续?", '提示', {type: "warning"}).then(() => {
                    deleteCategory(id)
                        .then((response) => {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.getCategoryInfo()
                        })
                        .catch((error) => {
                            this.$message({
                                type: 'error',
                                message: '删除失败!'
                            });
                        })
                }).catch((error) => {
                    console.log(error);
                })

            },
            updateTagInfo(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const data = this.tagEditForm
                        this.tagEditDialogVisible = false
                        updateTag(data)
                            .then((response) => {
                                this.$message({
                                    type: 'success',
                                    message: '更新成功!'
                                });
                                this.getTagInfo()
                            })
                            .catch((error) => {
                                this.$message({
                                    type: 'error',
                                    message: '更新失败!'
                                });
                            })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });

            },
            updateCategoryInfo(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const data = this.categoryEditForm
                        this.categoryEditDialogVisible = false
                        updateCategory(data)
                            .then((response) => {
                                this.$message({
                                    type: 'success',
                                    message: '更新成功!'
                                });
                                this.getCategoryInfo()
                            })
                            .catch((error) => {
                                this.$message({
                                    type: 'error',
                                    message: '更新失败!'
                                });
                            })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });

            },
            getTagInfo() {
                getTag()
                    .then((response) => {
                        this.tagData = response.data
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            getCategoryInfo() {
                getCategory()
                    .then((response) => {
                        this.categoryData = response.data
                    })
                    .catch((error) => {
                        this.$message({
                            type: 'error',
                            message: '添加失败!'
                        });
                    })
            },
            doAddTag(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.tagDialogVisible = false
                        let data = this.tagForm

                        addTag(data)
                            .then(() => {
                                this.$message({
                                    type: 'success',
                                    message: '添加成功!'
                                });
                                this.getTagInfo()
                            })
                            .catch((error) => {
                                this.$message({
                                    type: 'error',
                                    message: '添加失败!'
                                });
                            })
                    } else {
                        return false;
                    }
                });


            },
            doAddCategory(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let data = this.categoryForm
                        this.categoryDialogVisible = false
                        addCategory(data)
                            .then((response) => {
                                this.$message({
                                    type: 'success',
                                    message: '添加成功!'
                                });
                                this.getCategoryInfo()
                            })
                            .catch((error) => {
                                this.$message({
                                    type: 'error',
                                    message: '添加失败!'
                                });
                            })
                    } else {
                        return false;
                    }
                });

            }
        },
        created() {
            this.getTagInfo()
            this.getCategoryInfo()
        }
    }
</script>

<style scoped lang="scss">
    .addTag {
        text-align: left;
        font-size: 16px;
        margin-bottom: 10px;
        font-weight: bold;
        cursor: pointer;
        display: inline-block;
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

    .categoryManage, .tagManage {
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
</style>