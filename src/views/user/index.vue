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

                <el-button type="primary" icon="el-icon-circle-plus" @click="userAddDialogVisible = true">添加用户
                </el-button>
            </div>
            <el-table border stripe :data="userList">
                <el-table-column prop="username" label="用户名"></el-table-column>
                <el-table-column prop="email" label="邮箱"></el-table-column>
                <el-table-column prop="introduce" label="个人介绍"></el-table-column>
                <el-table-column
                        prop="count"
                        label="权限"

                ></el-table-column>
                <el-table-column prop="created_time" label="注册时间"></el-table-column>
                <el-table-column label="操作" width="300">
                    <template slot-scope="scope">
                        <el-button
                                type="primary"
                                @click="openUserEditDialog(scope.row)"
                        >编辑
                        </el-button>
                        <el-button
                                type="danger"
                                @click="deleteUserInfo(scope.row['_id'])"
                        >删除
                        </el-button>
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
        <el-dialog title="编辑用户" :visible.sync="userEditDialogVisible" :append-to-body="true" width="25%">
            <el-form :model="userEditForm" :rules="rules" ref="userEditForm">
                <el-form-item label="用户名" :label-width="formLabelWidth"  prop="username">
                    <el-input v-model="userEditForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
                    <el-input v-model="userEditForm.password"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
                    <el-input v-model="userEditForm.email"></el-input>
                </el-form-item>
                <el-form-item label="个人介绍" :label-width="formLabelWidth" prop="introduce">
                    <el-input v-model="userEditForm.introduce"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="userEditDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateUserInfo('userEditForm')">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="添加用户" :visible.sync="userAddDialogVisible" :append-to-body="true" width="25%">
            <el-form :model="userAddForm" :rules="rules" ref="userAddForm">
                <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
                    <el-input v-model="userAddForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
                    <el-input v-model="userAddForm.password"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
                    <el-input v-model="userAddForm.email"></el-input>
                </el-form-item>
                <el-form-item label="个人介绍" :label-width="formLabelWidth" prop="introduce">
                    <el-input v-model="userAddForm.introduce" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="userAddDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addUserInfo('userAddForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {getUsers, deleteUser, updateUser, addUser} from "../../api/user";

    export default {
        name: "",
        data() {
            return {
                userList: [],
                userAddForm: {
                    username: '',
                    email: '',
                    introduce: ''
                },
                userEditForm: {
                    username: '',
                    email: '',
                    introduce: ''
                },
                formLabelWidth: '100px',
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 2,  message: '长度最少2个字符', trigger: 'blur' }
                    ],
                    email: [
                        {message: '请输入邮箱', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入用户密码', trigger: 'blur' },
                        { min: 6,  message: '长度最少6个字符', trigger: 'blur' }
                    ],
                    introduce: [
                        {message: '请输入用户个人介绍', trigger: 'blur'}
                    ],
                },
                userEditDialogVisible: false,
                userAddDialogVisible: false,
            }
        },
        methods: {
            getUserList() {
                getUsers()
                    .then((response) => {
                        this.userList = response.data
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            openUserEditDialog(row) {
                this.userEditDialogVisible = true
                this.userEditForm = Object.assign({}, row)
            },
            updateUserInfo(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.userEditDialogVisible = false
                        const data = this.userEditForm
                        updateUser(data)
                            .then((response) => {
                                this.$message({
                                    type: 'success',
                                    message: '更新成功!'
                                });
                                this.getUserList()
                            })
                            .catch((error) => {
                                this.$message({
                                    type: 'error',
                                    message: '更新失败!'
                                });
                            })
                    } else {
                        return false;
                    }
                });


            },
            addUserInfo(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.userAddDialogVisible = false
                        const data = this.userAddForm
                        addUser(data)
                            .then((response) => {
                                this.$message({
                                    type: 'success',
                                    message: '添加成功!'
                                });
                                this.getUserList()
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
            deleteUserInfo(id) {
                this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {type: 'warning'})
                    .then(() => {
                        deleteUser(id)
                            .then(() => {
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                                this.getUserList()
                            })
                            .catch((error) => {
                                this.$message({
                                    type: 'error',
                                    message: '删除失败!'
                                });
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                    })

            }

        },
        created() {
            this.getUserList()
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