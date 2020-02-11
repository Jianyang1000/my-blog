<template>
    <div class="detail">
        <div class="gobackWrap">
            <el-button type="success" size="medium" @click="goback" class="goback" icon="el-icon-arrow-left">返回上一页</el-button>
        </div>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <main class="clearfix">
            <section class="main-left">
                <h3 class="detail-title">召唤师名称：</h3>
                <p class="detail-introduct">{{name}}</p>
            </section>
            <section class="main-right">
                <h3 class="detail-title">背景介绍：</h3>
                <p class="detail-introduct ">{{explain}}</p>
            </section>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        data(){
          return {
              imgArray: [],
              name: '',
              explain: ''
          }
        },
        methods: {
            getMessage(id){
                this.$http(`/api/hero/${id}`).then((result) => {
                    this.name = result.data.name
                    console.log(result.data);
                })
            },
            goback() {
                this.$router.go(-1);
            }
        },
        created() {
            console.log(this.$route.params);
            let heroId = this.$route.params.id
            console.log(heroId);
            this.getMessage(heroId)
        }
    }
</script>

<style scoped lang="scss">
    .detail {
        width: 1200px;
        margin: 60px auto 0;
        .gobackWrap {
            margin-bottom: 30px;
            text-align: left;
        }
        .el-carousel__item h3 {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 200px;
            margin: 0;
        }

        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }
        main{
            padding: 50px 0;
            display: flex;
            justify-content: space-between;
            > section {
                border: 1px solid #ccc;
            }
            .main-left{
                width: 40%;
            }
            .main-right{
                width: 50%;
            }
            .detail-title{
                background: #ccc;
                padding: 10px 20px;
                margin: 0;
            }
            .detail-introduct{
                line-height: 30px;
                font-size: 20px;
                font-style: italic;

            }
        }
    }
</style>