<template>
    <div class="article_content">
        <slot></slot>
        <link rel="stylesheet" href="//cdn.bootcss.com/github-markdown-css/2.4.1/github-markdown.css">
        <div class="markdown-body" id="markdown-preview-body" v-html="contents" v-highlight></div>
    </div>
</template>

<script>
    import {
        mapActions
    } from 'vuex'
    export default {
        name: "md-preview",
        props: ['contents'],
        data(){
            return {
                imgList: []
            }
        },
        watch: {
            contents (content) {
                this.setArticleMenu(false)
                setTimeout(this.init, 300)
            }
        },
        methods: {
            ...mapActions('app/',[
                'setArticleMenu',
                'setArticleMenuSource',
                'setArticleMenuTag'
            ]),
            init() {
                document.body.scrollTop = document.documentElement.scrollTop = 0
                this.getImg()
                this.getMenu()
            },
            getImg() {
                let imgDomList = document.getElementById('markdown-preview-body').getElementsByTagName('img')
                this.imgList = []
                Array.prototype.slice.call(imgDomList).forEach((img, index) => {
                    img.indexTag = index
                    img.onclick = this.showBigImg
                    this.imgList.push({
                        src: img.src,
                        w: img.width,
                        h: img.height,
                        target: img
                    })
                })
            },
            showBigImg(e) {
                this.$photoPreview.open(e.target.indexTag, this.imgList)
            },
            getMenu() {
                let headNodes = document.getElementById('markdown-preview-body').getElementsByClassName('my-blog-head')
                let headList = []
                let pos = 0
                Array.prototype.forEach.call(headNodes, item => {
                    headList.push({
                        id: item.id,
                        index: parseInt(item.tagName.replace('H', '')),
                        title: item.innerText
                    })
                })
                let tree = this.treeify(headList, 0)
                if (tree.length === 0) {
                    tree = false
                }
                let source = JSON.parse(JSON.stringify(headList))
                source.forEach(item => {
                    item.children = []
                })
                this.setArticleMenuTag('1.')
                this.setArticleMenuSource(source)
                this.setArticleMenu(tree)
            },
            treeify(data, tag) {
                let tree = []
                let index = 0
                data.forEach(item => {
                    item.children = []
                    let len = tree.length
                    if (len === 0) {
                        item.tag = tag + (++index) + '.'
                        tree.push(item) // 第一个元素，直接放进tree
                    } else {
                        let last = tree[len - 1]
                        if (item.index <= last.index) { // 如果index比tree最后一个的index小或等于，说明是同级存进去
                            item.tag = tag + (++index) + '.'
                            tree.push(item)
                        } else {
                            last.children.push(item) // 否则存进最后一个元素的children
                        }
                    }
                })
                // 因为上面一层循环，只能处理两层，所以需要遍历孩子节点，出现index不一样的说明不是同级，需要对孩子节点再递归调用生成
                tree.forEach(item => {
                    let children = item.children
                    let ids = []
                    index = 0
                    // 判断是否存在index不一样的
                    children.forEach(child => {
                        child.tag = item.tag + (++index) + '.'
                        if (ids.indexOf(child.index) === -1) {
                            ids.push(child.index)
                        }
                    })
                    if (ids.length > 1) {
                        // ids的元素大于1说明存在，需要再递归孩子节点
                        item.children = this.treeify(children, item.tag)
                    }
                })
                return tree
            }
        }
    }
</script>

<style scoped lang="scss">
    .markdown-body {
        text-align: left;
        width: 100%;
        color: #555555 !important;
        @media (max-width: 768px){
            font-size: 12px !important;
        }
        img {
            max-width: calc(100% - 10px) !important;
            padding: 4px;
            border: 1px solid #eeeeee !important;
            cursor: zoom-in;
        }
        li {
            list-style: disc;
            li {
                list-style: circle;
            }
        }
    }
</style>