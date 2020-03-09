<template>
    <div class="blogLayout">
        <b-header></b-header>
        <page-main></page-main>
        <side-bar></side-bar>
    </div>
</template>

<script>
    import BHeader from './components/header'
    import PageMain from './components/PageMain'
    import SideBar from './components/sideBar'
    export default {
        name: "BlogLayout",
        components: {
            'b-header': BHeader,
            'page-main': PageMain,
            'side-bar': SideBar
        }
    }
</script>

<style scoped lang="scss">

</style>