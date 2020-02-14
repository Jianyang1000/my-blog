<template>
    <div class="header" :class="{closeBar:opend}">
        <div class="header_left">
            <a href="javascript:;" class="logoLink"><img src="./logo.png" alt="logo">Jianyang</a>
        </div>
        <div class="header_right">
            <div class="header_collapse">
                <side-collapse class="sidecollapse"></side-collapse>
                <bread-crumb class="bread"></bread-crumb>
            </div>
            <div class="header_information">
                <div class="message">
                    <el-badge is-dot @click.native="toggleMessage">
                        <i class="el-icon-message-solid"></i>
                    </el-badge>
                </div>
                <div class="personal">
                    <user-dropdown></user-dropdown>
                </div>
            </div>
        </div>
    </div>
    <!--<div class="header">
        <div class="header_l">
            <a href="javascript:;" class="logoLink"
            ><img src="./logo.png" alt="logo" />Vue Project</a>
        </div>
        <div class="header_r">
            <div class="headr_d1">
                <side-collapse class="sidecoll"></side-collapse>
                <bread-crumb class="bread"></bread-crumb>
            </div>
            <div class="headr_d2">
                <ul class="headrUl clearFixed">
                    <li id="domMessage">
                        <el-badge is-dot @click.native="toggleMsgShow">
                            <i class="el-icon-message-solid iconFont"></i>
                        </el-badge>
                    </li>
                    <li id="domFullScreen">

                    </li>
                    <li id="domPersonal">

                    </li>
                </ul>
            </div>
        </div>
    </div>-->
</template>

<script>
    import SideCollapse from '@/components/SideCollapse'
    import BreadCrumb from '@/components/BreadCrumb'
    import UserDropdown from '@/components/UserDropdown'
    export default {
        name: "Header",
        data() {
            return {}
        },
        computed: {
            opend() {
                return this.$store.state.opend
            }
        },
        components: {
            'side-collapse': SideCollapse,
            'bread-crumb': BreadCrumb,
            'user-dropdown': UserDropdown
        },
        methods: {
            toggleMessage() {
                this.$store.commit('SET_MSGISOPEN')
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../style/variables';
    .header {
        height: 50px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
        width: 100%;
        display: flex;
        justify-content: space-between;
        > .header_left {
            width: 200px;
            height: 100%;
            border-bottom: 1px solid #454b61;
            background-color: #3a3f51;
            transition: width 0.3s ease-in-out;
            box-sizing: border-box;
            overflow: hidden;
            .logoLink {
                color: $white;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-weight: bold;
                height: 100%;
                line-height: 50px;
                margin-left: 18px;
                font-size: 15px;
                transition: font-size 0s ease-in-out 0.3s;
                img {
                    height: 28px;
                    vertical-align: middle;
                    margin-right: 8px;
                    position: relative;
                    top: -3px;
                }
            }
        }
        &.closeBar {
            .header_left {
                width: 64px !important;
                .logoLink {
                    font-size: 0 !important;
                    transition: font-size 0s ease-in-out 0.3s;
                }
            }
            .header_right {
                width: calc(100% - 64px);
            }

        }

        > .header_right {
            width: calc(100% - 200px);
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
            transition: width 0.3s ease-in-out;
            > .header_collapse {
                margin-left: 20px;
                display: flex;
                align-items: center;
                .bread {
                    margin-left: 20px;
                }
                .sidecoll {
                    margin-bottom: -2px;
                }
            }
            .header_information {
                display: flex;
                align-items: center;
                padding-left: 10px;
                padding-right: 20px;
                .message {
                    padding: 0 10px;
                    display:flex;
                    align-items: center;
                    height: 50px;
                    font-size: 16px;
                    cursor: pointer;
                    &:hover {
                        background-color: #f6f8f8;
                    }
                }
                .personal{
                    padding: 0 20px 0 10px;
                }
            }

        }
    }

    /*.header {
        .header_l {
            overflow: hidden;
            text-align: center;
        }
        .headr_d2 {
            float: right;
            height: 100%;
            .userDrop {
                height: 50px;
                .userDrop_text {
                    margin-right: 8px;
                    i {
                        margin-left: 2px;
                    }
                }
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    vertical-align: middle;
                }
            }
            .userDd {
                .el-dropdown-menu__item {
                    padding: 0 12px;
                }
            }
            .headrUl {
                height: 100%;
                li {
                    float: left;
                    height: 100%;
                    line-height: 50px;
                    padding: 0 10px;
                    cursor: pointer;
                    .iconFont {
                        font-size: 18px;
                        height: 50px;
                        vertical-align: initial;
                        line-height: 50px;
                    }
                    .el-badge__content.is-fixed.is-dot {
                        right: 9px;
                        top: 16px;
                    }
                    &:hover {
                        background-color: #f6f8f8;
                    }
                    &:last-child {
                        padding: 0 20px 0 10px;
                    }
                }
            }
        }
    }

    .el-dropdown-menu__item {
        i {
            font-size: 16px;
        }
        a {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .notificatBar {
        position: fixed;
        height: calc(100% - 50px);
        bottom: 0;
        right: 0;
        width: 360px;
        box-shadow: -3px -3px 8px rgba(0, 0, 0, 0.2);
        background-color: $white;
        z-index: 990;
    }*/
</style>