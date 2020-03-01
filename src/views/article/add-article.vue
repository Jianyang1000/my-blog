<template>
    <div class="addArticle">
        <el-card>
            <div class="header-wrap">
                发布文章
                <div class="action-btn-wrap">
                    <span @click="publish" v-if="!articleId">发布</span>
                    <span @click="save" v-if="articleId">保存</span>
                </div>
            </div>
            <div class="input-wrap">

                <div class="fix-input-wrap">
                    <UP class="upload-cover"
                        :default-img="article.cover"
                        ratio="2"
                        WHRatio="2"
                        maxWidth="300"
                        maxHeight="150"
                        tip="上传文章封面图"
                        maxSize="2"
                        @uploadSuccess="uploadSuccess"></UP>
                    <el-input
                            class="input-title"
                            v-model="article.title"
                            placeholder="请输入文章标题">
                    </el-input>
                    <el-input
                            class="input-title"
                            type="textarea"
                            :rows="6"
                            :maxlength="150"
                            resize="none"
                            v-model="article.subMessage"
                            placeholder="请输入文章简介">
                    </el-input>
                    <div class="label-wrap">
                        <span>阅读加密：</span>
                        <el-checkbox v-model="article.is_encrypt" size="large"></el-checkbox>
                    </div>
                    <div class="label-wrap">
                        <span>分类：</span>
                        <el-select
                                v-model="category"
                                filterable
                                allow-create
                                default-first-option
                                placeholder="请选择文章分类">
                            <el-option
                                    v-for="item in categoryList"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.name">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="label-wrap">
                        <span>标签：</span>
                        <el-select
                                v-model="tags"
                                filterable
                                allow-create
                                default-first-option
                                multiple
                                placeholder="请选择文章标签">
                            <el-option
                                    v-for="item in tagList"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.name">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </div>
            <mavon-editor class="editor"
                          v-model="article.content"
                          ref=md

                          :boxShadow="false"
                          defaultOpen="edit"
                          :toolbars="{
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: false, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: false, // 展示html源码
          help: true, // 帮助
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: false, // 保存（触发events中的save事件）
          navigation: false, // 导航目录
          alignleft: false, // 左对齐
          aligncenter: false, // 居中
          alignright: false, // 右对齐
          subfield: true, // 单双栏模式
          preview: true, // 预览
        }"/>
        </el-card>

    </div>
</template>

<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex'
    import {getTag,getCategory} from "../../api/tag_category";
    import {publishArticle,editArticle} from '@/api/article'
    import {markdown,formatDate} from '@/utils/markdown'
    import UP from '@/components/upload/upCover.vue'

    export default {
        name: "addArticle",
        components: {
            'UP': UP
        },
        data() {
            return {
                articleId: '',
                article: {
                    content: '',
                    title: '',
                    cover: '',
                    subMessage: '',
                    is_encrypt: '',
                },
                tags: [],
                category: '',
                tagList: [],
                categoryList: [],
                accessKey: '9zMRpUgazU_jd9Jpq3Cel3fyFF7D5xAp_KlOpqd7',
                secretKey: 'aFi5jH7EXqffyILnGKwjvYMOCl1IG7n1ww_P0voK'
            }
        },
        methods: {
            ...mapActions([
                'getQiniuToken',
                'uploadToQiniu',
                'getArticle',
                'getCategoryList',
                'getTagList',
                'saveArticle',
                'publishArticle',
                'modifyArticle'
            ]),
            uploadTest(){
                var mac = new qiniu.auth.digest.Mac(this.accessKey, this.secretKey);
            },
            uploadSuccess(image){

                let imgUrl = 'http://q6gpc1mpo.bkt.clouddn.com/' + image
                this.article.cover = imgUrl
            },
            init(){
                this.getTagList()
                this.getCategoryList()
            },
            markdownHtml(str) {
                return markdown(str)
            },
            getParams() {
                let html = this.markdownHtml(this.article.content)
                let params = {
                    title: this.article.title,
                    cover: this.article.cover,
                    sub_message: this.article.subMessage,
                    is_encrypt: this.article.is_encrypt ? '1' : '0',
                    content: this.article.content,
                    html_content: html,
                    page_view: 0,
                    status: 0
                }
                params.category = this.articleCategory()
                params.tag = this.articleTags()
                if (this.article.id) {
                    params.id = this.article.id
                }
                return params
            },
            publish() {
                let params = this.getParams()
                if (!params.title) {
                    this.$message.error({message: '文章标题不能为空!'});
                    return
                }
                if (!params.sub_message) {
                    this.$message.error({message: '文章简介不能为空!'});
                    return
                }
                if (!params.content) {
                    this.$message.error({message: '文章内容不能为空!'});
                    return
                }
                publishArticle(params)
                    .then((response) => {
                        this.$message.success({message: '已发布!'});
                        /*this.updateRoute('articlePreview', data)*/
                    })
                    .catch((error) => {
                        this.$message.error({message: error});
                    })
            },
            save() {
                let params = this.getParams()
                if (!params.title) {
                    this.$message.error({message: '文章标题不能为空!'});
                    return
                }
                if (!params.sub_message) {
                    this.$message.error({message: '文章简介不能为空!'});
                    return
                }
                if (!params.content) {
                    this.$message.error({message: '文章内容不能为空!'});
                    return
                }
                editArticle()
                    .then(() => {
                        this.$message.success({message: '修改成功!'});
                    })
                    .catch(() => {
                        this.$message.error({message: error});
                    })
            },
            articleCategory() {
                let category = this.categoryList.find(item => item.name === this.category)
                if (category) {
                    return category.name
                } else {
                    return ''
                }
            },
            articleTags() {
                let tags = []
                this.tags.forEach(value => {
                    console.log(value);
                    let tag = this.tagList.find(item => item.name === value)
                    if (tag) {
                        tags.push(tag.name)
                    }
                })
                console.log(tags);
                return tags
            },
            getTagList(){
                getTag()
                    .then((response) => {
                        const tagList = response.data
                        this.tagList = tagList
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            getCategoryList(){
                getCategory()
                    .then((response) => {
                        const categoryList = response.data
                        this.categoryList = categoryList
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        },
        created() {
          this.init()
        }
    }
</script>

<style scoped lang="scss">
    @import '../../style/variables';

    .addArticle {
        padding: 36px 30px;
    }

    .header-wrap {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: bold;
        align-items: center;
        padding: 18px 18px 18px 0;
        background-color: $color-white;

        .action-btn-wrap {
            > span {
                padding: 5px 10px;
                margin-right: 5px;
                font-size: 14px;
                cursor: pointer;
                background-color: $color-main;
                color: $color-white;
                border-radius: 8px;

                &:hover {
                    background-color: lighten($color-main, 10%);
                }

                &:last-child {
                    margin-right: 0px;
                }
            }
        }
    }

    .input-wrap {
        .fix-input-wrap > div {
            margin-bottom: 10px;
            text-align: left;
        }

        .label-wrap {
            display: flex;
            align-items: center;
            font-size: 16px;
            width: 100%;
            color: #606266;

            > span {
                flex-shrink: 0;
            }

            > div {
                width: 100%;

            }

            .el-checkbox__inner {
                width: 16px !important;
                height: 16px !important;
            }
        }

    }

    .edit_wrap {

    }
</style>