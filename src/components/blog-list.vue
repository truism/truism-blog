<template>
    <div class="container">
        <ul v-for="blog in blogList">
            <li class="blog">
                <h3>
                    <a href="#" @click.prevent="goToDetail(blog.id)">
                        {{blog.title}}
                    </a>
                </h3>
                <span>
                    {{blog.updateTime}}
                </span>
            </li>
        </ul>
        <a href="#" @click="getNewBlogList" style="text-decoration: none; color: #333333; float: right; margin-top: 36px;">下一页</a>
    </div>
</template>

<script>
    import blogListApi from "@/api/blogList";
    export default {
        name: "blog",
        data() {
            return {
                blogList: [
                    {
                        id: 1,
                        title: "博客一",
                        updateTime: "2020-5-20",
                    },
                    {
                        id: 2,
                        title: "博客一",
                        updateTime: "2020-5-20",
                    },
                    {
                        id: 3,
                        title: "博客一",
                        updateTime: "2020-5-20",
                    },
                    {
                        id: 4,
                        title: "博客一",
                        updateTime: "2020-5-20",
                    },
                ],
            }
        },

        created() {
            this.getBlogList();
        },

        methods: {
            getBlogList: function() {
                blogListApi.getBlogList(1).then(response => {
                    const resp = response.data;
                    if(resp.flag) {
                        this.blogList = resp.data;
                    }

                })
            },

            getNewBlogList: function() {

            },

            goToDetail: function (id) {
                this.$router.push("/index/blog-detail/" + id);
            }
        }
    }
</script>

<style scoped>

    .container {
        margin-left: 280px;
        margin-top: 46px;
    }

    li.blog {
        margin-top: 40px;
    }

    li.blog a {
        text-decoration: none;
        color: #333;
    }

</style>
