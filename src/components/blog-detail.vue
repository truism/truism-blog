<template>
    <div class="blogDetail">
        <h2 style="margin-top: 58px; margin-left: 260px;">{{blog.title}}</h2>
        <p v-html="blog.content" style="margin-left: 320px;">

        </p>
        <p style="margin-left: 340px; margin-top: 80px; margin-bottom: 36px; float: right;">
            {{blog.updateTime}}
        </p>
    </div>
</template>

<script>

    import blogDetailApi from "@/api/blogDetail";
    import marked from "marked";

    export default {
        name: "blog-detail",

        data() {
            return {
                blog: {
                    title: "",
                    content: "",
                    updateTime: "",
                },

            }
        },

        created() {
            this.getBlogDetail(this.$route.params.id);
        },

        methods: {
            getBlogDetail: function (id) {
                blogDetailApi.getBlogDetail(id).then(response => {
                    const resp = response.data;
                    if(resp.flag) {
                        this.blog.title = resp.data.title;
                        this.blog.content = marked(resp.data.content);
                        this.blog.updateTime = resp.data.updateTime;
                    }
                })
            }
        },
    }
</script>

<style scoped>
    div.blogDetail {
        width: 80%;
        margin-left: auto;
    }

</style>
