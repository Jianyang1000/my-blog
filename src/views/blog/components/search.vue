<template>
    <transition  enter-active-class="slideInDown" leave-active-class="fadeOut">
    <div class="searchBar animated faster" v-if="show">
        <span class="search_close" @click="closeSearch">×</span>
        <input type="text" placeholder="Search..." class="search_field">
        <div class="search_container">
            <ul class="search_result"></ul>
        </div>
    </div>
    </transition>
</template>

<script>
    export default {
        name: "search",
        props:{
            show: Boolean
        },
        methods: {
            closeSearch(){
                this.$emit('closeSearch')
            }
        }
    }
</script>

<style scoped lang="scss">
    .searchBar {
        position: fixed;
        left: 50%;
        top: 50%;
        margin-top: -80px;
        margin-left: -240px;
        width: 400px;
        padding: 30px;
        background-color: #fff;
        box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
        .search_close {
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            height: 20px;
            line-height: 20px;
            padding: 1px 8px;
            font-size: 20px;
            background-color: #e8e8e8;
            color: #666;
            cursor: pointer;
            &:hover {
                background-color:#0cc;
                color: #fff;
            }
        }
        .search_field {
            padding: 10px;
            width: 360px;
            border: 0;
            color: #666;
            background-color: #f1f1f1;
            float: left;
        }
    }
</style>