<template>
    <div v-bind="returnTag(to)">
        <slot />
    </div>
</template>

<script>
    import { isAbsolutePath } from '@/utils/validate'
    export default {
        name: "Link",
        props: {
            to: {
                type: String,
                required: true
            }
        },
        methods: {
            returnTag(path) {
                if (isAbsolutePath(path)) {
                    return {
                        is: 'a',
                        target: '_blank',
                        href: path
                    }
                } else {
                    return {
                        is: 'router-link',
                        to: path
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>