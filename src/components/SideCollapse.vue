<template>
    <div class="sideCollapse" id="domColapse">
        <i
                :class="{ 'el-icon-s-unfold': opend, 'el-icon-s-fold': !opend }"
                @click="toggleOpen()"
        ></i>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            opend(){
                return this.$store.state.opend
            },
        },
        methods: {
            toggleOpen() {
                this.$store.commit('toggleOpen', !this.opend)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .sideCollapse i {
        font-size: 18px;
        color: #363f44;
        cursor: pointer;
    }
</style>
