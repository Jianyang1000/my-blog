<template>
    <div id="header">
        <div id="banner"></div>
        <div class="header_outer">
            <transition enter-active-class="slideInDown" leave-active-class="slideOutUp">
                <div class="header_menu animated fast" v-show="showHead">
                    <div class="header_menu_container">
                        <a href="" class="blog_icon">Jianyang's Blog</a>
                        <nav>
                            <router-link :to="{path:'/blog'}"><i class="el-icon-s-home"></i><span>Home</span>
                            </router-link>
                            <router-link :to="{path:'/blog/archives'}"><i
                                    class="el-icon-s-grid"></i><span>Archives</span></router-link>
                            <router-link :to="{path:'/blog/tag'}"><i class="el-icon-price-tag"></i><span>Tag</span>
                            </router-link>
                            <router-link :to="{path:'/blog/about'}"><i class="el-icon-user-solid"></i><span>About</span>
                            </router-link>
                        </nav>
                    </div>
                </div>
            </transition>
            <div class="header_row">
                <div class="logo">
                    <img src="./logo.jpg" alt="logo" class="logo_image"/>
                </div>
                <div class="header_info">
                    <div class="header_title">
                        Jianyang's Blog
                    </div>
                    <div class="header_introduce">
                        一个专注<span class="bold_word">Web开发</span>与<span class="bold_word">生活</span>的博客
                    </div>
                </div>
                <div class="header_social">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blog-header",
        data() {
            return {
                showHead: true
            }
        },
        methods: {
            listenHead() {
                document.addEventListener('scroll', (e) => {

                    if (window.scrollY >= 100) {
                        this.showHead = false
                    } else {
                        this.showHead = true
                    }
                })
            }
        },
        created() {
            this.listenHead()
        }
    }
</script>

<style scoped lang="scss">
    #header {
        height: 420px;
        position: relative;
        border-bottom: 1px solid #ddd;

        #banner {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('./banner.jpg') center #000;
            background-size: cover;
        }

        .header_outer {
            height: 100%;
            position: relative;

            .header_menu {
                position: fixed;
                width: 100%;
                height: 44px;
                box-shadow: rgba(14, 14, 14, 0.26) 0px 0px 10px;
                display: flex;
                justify-content: center;
                z-index: 2;
                .header_menu_container {
                    max-width: 1100px;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .blog_icon {
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 44px;
                        vertical-align: top;
                        color: #fff;
                        transition: all 0.5s;
                        cursor: pointer;

                        &:hover {
                            letter-spacing: 4px;
                        }
                    }

                    nav {
                        > a {
                            margin-left: 15px;
                            text-decoration: none;
                            color: #fff;

                            i {
                                font-size: 18px;
                            }

                            span {
                                font-size: 15px;
                                letter-spacing: 1px;
                                transition: all 0.5s;
                                margin-left: 3px;

                                &:hover {
                                    letter-spacing: 2px;
                                }
                            }
                        }
                    }
                }
            }

            .header_row {
                padding-top: 50px;

                .logo {
                    height: 130px;
                    display: flex;
                    justify-content: center;

                    .logo_image {
                        display: inline-block;
                        vertical-align: bottom;
                        width: 130px;
                        height: 130px;
                        border-radius: 50%;
                    }
                }

                .header_info {
                    margin: 15px 0;

                    .header_title {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 44px;
                        line-height: 44px;
                        font-size: 44px;
                        color: #fff;
                        cursor: pointer;
                        transition: all 0.5s;

                        &:hover {
                            letter-spacing: 5px;
                        }
                    }

                    .header_introduce {
                        margin: 20px 0;
                        padding: 10px 0;
                        color: #666;
                        letter-spacing: 5px;
                        font-size: 24px;
                        height: 24px;
                        line-height: 24px;
                        display: flex;
                        justify-content: center;
                        font-weight: 100;

                        .bold_word {
                            font-weight: 400;
                        }
                    }

                    .header_social {
                        margin: 8px 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 28px;
                    }
                }

            }
        }

    }
</style>