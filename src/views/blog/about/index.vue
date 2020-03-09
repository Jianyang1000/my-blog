<template>
    <div class="about">
        <md-preview :contents="htmlContent">
            <div class="title">About Me</div>
        </md-preview>
    </div>
</template>

<script>
    import MdPreview from "@/components/MdPreview";
    export default {
        name: "",
        data(){
            return {
                htmlContent: '<pre><code class=\\"language-java\\">{\n  name: &#39;Jianyang&#39;\n  age: 23,\n  gender: &#39;Boy&#39;,\n  profession: &#39;Frontend Developer&#39;,\n  github: &#39;https://github.com/Jianyang1000&#39;,\n  wechat: &#39;ljyabc012&#39;,\n  email: &#39;876722066@qq.com&#39;,\n  description: &#39;too young , too simple , too hungry&#39;,\n\n  skills: [\n    [&#39;Express&#39;, &#39;NodeJS&#39;, &#39;SQL&#39;],\n    [&#39;Hadoop&#39;,&#39;Hive&#39;,&#39;Hbase&#39;,&#39;Spark&#39;],\n    [&#39;JavaScript&#39;, &#39;Vue&#39;,&#39;HTML+CSS&#39;,&#39;Bootstrap&#39;],\n    [&#39;Git&#39;]\n  ],\n\n  devTools: [\n    [&#39;VSCode&#39;, &#39;Webstorm&#39;,&#39;Sublime Text&#39;,&#39;NotePad++&#39;],\n    [&#39;Chrome DevTools&#39;],\n    [&#39;Navicat&#39;, &#39;SQLServr&#39;,&#39;MySql&#39;]\n  ]  \n}</code></pre>\n'
            }
        },
        components: {
            'md-preview':MdPreview
        }
    }
</script>

<style scoped lang="scss">
    .about {
        max-width: 920px;
        margin: 0 auto;
        padding: 30px 20px 30px 20px;
        .article_content {
            background-color: #f9f9f9;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 3px;
            box-shadow: 1px 2px 3px #ddd;
        }
        .title {
            font-size: 25px;
            font-family:  'Josefin Sans','PingFang SC';
            font-weight: 400;
        }
    }
</style>