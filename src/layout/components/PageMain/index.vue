<template>
    <div class="pageMain" :class="{closeBar:opend}">
        <transition name="fade-page" mode="out-in">
            <keep-alive>
                <router-view v-if="true"></router-view>
            </keep-alive>
            <router-view v-if="false"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "",
        computed: {
            opend() {
                return this.$store.state.app.opend
            }
        },
    }
</script>

<style scoped lang="scss">
    .pageMain {
        width: calc(100% - 200px);
        position: fixed;
        left: 200px;
        top: 50px;
        padding: 30px 36px;
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;
        overflow: auto;
        height: calc(100% - 48px);
        background-color: #F0F3F4;
        &.closeBar {
            left: 64px;
            width: calc(100% - 64px);
            transition: all 0.3s ease-in-out;
        }
    }

    .noPadding {
        padding: 0 !important;
    }
    // transition scss
    .fade-page-enter-active,
    .fade-page-leave-active {
        transition: all 0.5s;
    }
    .fade-page-enter {
        opacity: 0;
        transform: translateX(-30px);
    }
    .fade-page-leave-to {
        opacity: 0;
        transform: translateX(-30px);
    }

</style>