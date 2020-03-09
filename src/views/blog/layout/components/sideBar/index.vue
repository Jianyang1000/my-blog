<template>
    <div class="tool_bar">
        <div class="search" @click="show_search">
            <i class="el-icon-search"></i>
        </div>
        <div class="up" @click.stop="handleClick">
            <i class="el-icon-arrow-up"></i>
        </div>
        <search :show="search_show" @closeSearch="closeSearch"></search>
    </div>
</template>

<script>
    import search from '@/views/blog/components/search'
    import throttle from 'throttle-debounce/throttle';
    export default {
        name: "",
        components: {
          'search': search
        },
        data(){
          return {
              search_show: false
          }
        },
        methods: {
            closeSearch(){
                this.search_show = false
            },
            show_search(){
              this.search_show = true
            },
            scrollToTop() {
                let el = this.el;
                let step = 0;
                let interval = setInterval(() => {
                    if (el.scrollTop <= 0) {
                        clearInterval(interval);
                        return;
                    }
                    step += 10;
                    el.scrollTop -= step;
                }, 20);
            },
            handleClick(e) {
                this.scrollToTop();
                this.$emit('click', e);
            },
            onScroll() {
                const scrollTop = this.el.scrollTop;
                this.visible = scrollTop >= this.visibilityHeight;
            },
            init() {
                this.container = document;
                this.el = document.documentElement;
                if (this.target) {
                    this.el = document.querySelector(this.target);
                    if (!this.el) {
                        throw new Error(`target is not existed: ${this.target}`);
                    }
                    this.container = this.el;
                }
            },
        },
        beforeDestroy() {
            this.container.removeEventListener('scroll', this.throttledScrollHandler);
        },
        mounted() {
            this.init();
            this.throttledScrollHandler = throttle(300, this.onScroll);
            this.container.addEventListener('scroll', this.throttledScrollHandler);
        },

    }
</script>

<style scoped lang="scss">
    .tool_bar {
        position: fixed;
        bottom: 300px;
        right: calc(50% - 525px);
        display: flex;
        flex-direction: column;
        .search,
        .up{
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: #0cc;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 8px;
            font-size: 18px;
            color: #fff;
            cursor: pointer;
            transition: all 0.5s;
            box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
            &:hover{
                box-shadow: 0 4px 10px rgba(0,0,0,0.09), 0 4px 10px rgba(0,0,0,0.17);
                opacity: 0.8;
                text-shadow: 0 1px #1e7293;
            }
        }
    }
</style>