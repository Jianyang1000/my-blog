<template>
    <div class="tag_category">
        <div class="tag">
            <div class="title">
                标签
            </div>
            <div class="tag_content">
                <div v-for="tag in tagList">{{tag.name}}</div>
            </div>
        </div>
        <div class="category">
            <div class="title">
                分类
            </div>
            <div class="category_content">
                <div v-for="category in categoryList">{{category.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getBlogCategory,getBlogTag} from "@/api/tag_category";

    export default {
        name: "tag_category",
        data(){
            return {
                tagList: [],
                categoryList: []
            }
        },
        methods: {
            getCategoryInfo(){
                getBlogCategory()
                    .then((response) => {
                        console.log(response);
                        this.categoryList = response.data
                    })
                    .catch((error) => {
                        this.$message.error({message:error})
                    })
            },
            getTagInfo(){
                getBlogTag()
                    .then((response) => {
                        this.tagList = response.data
                    })
                    .catch((error) => {
                        this.$message.error({message:error})
                    })
            }
        },
        created(){
            this.getCategoryInfo()
            this.getTagInfo()
        }
    }
</script>

<style scoped lang="scss">
    .title {
        font-size: 22px;
        margin-bottom: 20px;
    }
    .tag_content,
    .category_content {

        > div {
            display: inline-block;
            margin-right: 10px;
            padding: 4px 9px;
            color: #262a30;
            font-size: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #fff;
            margin-bottom: 5px;
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
                background-color: #262a30;
                color: #fff;
            }
        }
    }
    .tag_category {
        padding: 30px 20px;
    }
    .tag,
    .category {
        max-width: 800px;
        background-color: #fff;
        border-radius: 5px;
        margin: 0 auto 30px;
        padding: 30px 20px 30px 20px;
        text-align: left;

    }
</style>