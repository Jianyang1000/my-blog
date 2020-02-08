<template>
    <div class="list">
        <el-table
                border
                stripe
                :data="tableData"
                style="width: 100%">
            <el-table-column prop="name" label="英雄" width="180"></el-table-column>
            <el-table-column prop="age" label="年龄" width="180"></el-table-column>
            <el-table-column prop="sex" label="性别" width="180"></el-table-column>
            <el-table-column prop="address" label="位置" width="180"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="primary"
                            @click="toDetail(scope.row['_id'])">详情
                    </el-button>
                    <el-button
                            size="mini"
                            type="success"
                            @click="modify(scope.row)">修改
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="deleteHero(scope.row['_id'])">删除
                    </el-button>
                    <el-button
                            size="mini"
                            type="warning">添加图片
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="修改数据" :visible.sync="modifyFormVisible">
            <el-form :model="form">
                <el-form-item label="英雄" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄" :label-width="formLabelWidth">
                    <el-input v-model="form.age" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-input v-model="form.sex" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="form.address" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="modifyFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="modifyHero(modifyId)">确 定</el-button>
            </div>
        </el-dialog>


        <el-dialog title="添加数据" :visible.sync="dialogFormVisible" width="31%">
            <el-form :model="form">
                <el-form-item label="英雄" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄" :label-width="formLabelWidth">
                    <el-input v-model="form.age" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-input v-model="form.sex" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="form.address" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addHero">确 定</el-button>
            </div>
        </el-dialog>

        <el-button class="heroAdd" type="primary" size="medium" @click="dialogFormVisible = true"><i class="el-icon-plus"></i>添加</el-button>
    </div>
</template>

<script>
    export default {
        name: 'List',
        data() {
            return {
                tableData: [],
                dialogTableVisible: false,
                dialogFormVisible: false,
                modifyFormVisible: false,
                modifyForm: '',
                modifyId: '',
                form: {
                    name: '',
                    address: '',
                    sex: '',
                    age: ''
                },
                formLabelWidth: '120px'
            }
        },
        methods: {
            getTableData(){
                this.$http('/api/hero').then((result) => {
                    this.tableData = result.data
                })
            },
            addHero(){
                this.dialogFormVisible = false
                let {name,address,sex,age} = this.form
                this.$http.post('/api/hero',this.form).then((response) => {
                    this.$message({
                        type: 'success',
                        message: '添加成功!'
                    });
                    this.getTableData()
                }).catch(() => {
                    this.$message({
                        type: 'error',
                        message: '添加失败!'
                    });
                })
            },
            deleteHero(id){
                this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    this.$http.delete(`/api/hero/${id}`).then((response) => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.getTableData()
                    }).catch(() => {
                        this.$message({
                            type: 'error',
                            message: '删除失败!'
                        });
                    })
                })
            },
            modifyHero(id){
                this.modifyFormVisible = false
                this.$http.put(`/api/hero/${id}`,this.form).then((response) => {
                    this.$message({
                        type: 'success',
                        message: '修改成功!'
                    });
                    this.getTableData()
                }).catch(() => {
                    this.$message({
                        type: 'error',
                        message: '修改失败!'
                    });
                })
            },
            modify(row) {
                this.modifyFormVisible = true
                this.form.name = row.name
                this.form.sex = row.sex
                this.form.address = row.address
                this.form.age = row.age
                this.modifyId = row['_id'];
            },
            toDetail: function(id) {
                // 通过本地缓存实现页面之前切换时，保存查询条件
                var queryParmas = {
                    heroName: this.heroName,
                    heroPosition: this.heroPosition,
                    heroSex: this.heroSex,
                    currentPage: this.currentPage
                };

                sessionStorage.queryParmas = JSON.stringify(queryParmas);

                this.$router.push(`/Detail/${id}`);
            },
        },
        created(){
            this.getTableData()
        },
    }
</script>

<style scoped lang="less">
    .list {
        width: 1200px;
        margin: 0 auto;
        text-align: center;
        .heroAdd {
            margin-top: 30px;
        }
    }
</style>