<template>
    <div>
        <el-dropdown class="userDd">
            <div class="userDrop">
                <span class="userDrop_text">Jianyang<i class="el-icon-caret-bottom"></i></span>
                <img src="@/assets/icon.jpg" alt="icon" class="userIcon">
            </div>
            <el-dropdown-menu solt="dropdown">
                <el-dropdown-item>
                    <router-link to="/"><i class="el-icon-s-home"></i>首页</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                    <router-link to="/personal"
                    ><i class="el-icon-s-custom"></i>我的主页
                    </router-link>
                </el-dropdown-item>
                <el-dropdown-item divided>
                    <a @click="_logout"><i class="el-icon-switch-button"></i>登出</a>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: "UserDropDown",
        methods: {
            _logout() {
                this.$store.dispatch('user/loginOut')
            }
        }
    }
</script>

<style scoped lang="scss">
    .userDrop_text {
        margin-right: 8px;
    }
    .userDrop {
        display: flex;
        align-items: center;
    }
    .userIcon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
</style>