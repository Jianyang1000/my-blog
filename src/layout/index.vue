<template>
    <div class="wrapper">
        <m-header></m-header>
        <page-main></page-main>
        <side-bar></side-bar>
    </div>
</template>

<script>
    import MHeader from './components/header'
    import PageMain from './components/PageMain'
    import SideBar from './components/sideBar'
    export default {
        name: "layout",
        components: {
            MHeader,
            PageMain,
            SideBar
        },
    }
</script>

<style scoped lang="scss">

</style>