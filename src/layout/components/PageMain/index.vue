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
                return this.$store.state.opend
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
</style>