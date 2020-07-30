<template>
    <div class="container">
        <ul v-for="blog in blogList">
            <li class="blog">
                <h3>
                    <a href="#">
                        {{blog.title}}
                    </a>
                </h3>
                <span>
                    {{blog.updateTime}}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "blog",
        data() {
            return {
                blogList: [
                    {
                        title: "博客一",
                        updateTime: "2020-5-20",
                    },
                    {
                        title: "博客一",
                        updateTime: "2020-5-20",
                    },
                    {
                        title: "博客一",
                        updateTime: "2020-5-20",
                    },
                    {
                        title: "博客一",
                        updateTime: "2020-5-20",
                    },
                ],
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
