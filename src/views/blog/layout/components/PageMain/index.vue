<template>
    <div class="pageMain">
        <transition name="fade-page" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import '@/utils/cherry'
    export default {
        name: "",
        data(){
          return {
              pageHeight: 0
          }
        },
        methods: {

        },
        created(){

        }
    }
</script>

<style scoped lang="scss">

    .pageMain {
        background-color: #EEE;
        min-height: calc(100vh - 421px);
    }
</style>