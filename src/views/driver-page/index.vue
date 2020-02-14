<template>
    <div class="driver">
        <el-card class="box-card">
            <p class="driverWord"><i class="el-icon-s-opportunity"></i>点击按钮可查看本管理系统的基本操作</p>
            <el-button type="primary" @click.stop="guide">引导</el-button>
        </el-card>
    </div>

</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped lang="scss">
    .driver {
        .driverWord {
            font-size: 14px;
            margin-bottom: 20px;
            i {
                margin-right: 5px;
                color: #ffc107;
                font-size: 18px;
            }
        }
        .box-card {
            text-align: left;
        }
    }

</style>