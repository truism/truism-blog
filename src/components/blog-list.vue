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
                    {{blog.updateTime | formatDate}}
                </span>
            </li>
        </ul>
        <a href="#" @click="getNewBlogList" class="nextPage" v-if="blogList.length == 10">下一页</a>
    </div>
</template>

<script>
    import blogListApi from "@/api/blogList";
    export default {
        name: "blog",
        data() {
            return {
                blogList: [],
            }
        },

        created() {
            this.getBlogList();
        },

        watch: {
          '$store.state.pageNum': function () {
             this.getBlogList();
          },
        },

        methods: {
            getBlogList: function() {
                blogListApi.getBlogList(this.$store.state.pageNum).then(response => {
                    const resp = response.data;
                    if(resp.flag) {
                        this.blogList = resp.data;
                    }
                })
            },

            getNewBlogList: function() {
                this.$store.commit('add');
                this.getBlogList();
            },

            goToDetail: function (id) {
                this.$router.push("/index/blog-detail/" + id);
            }
        },

        filters: {
            formatDate: function (val) {
                let time = new Date(val);
                let yyyy = time.getFullYear();
                let MM = time.getMonth() + 1;
                let dd = time.getDate();
                return yyyy + "-" + MM + "-" + dd;
            }
        },
    }
</script>

<style scoped>

    .container {
        margin-left: 280px;
        margin-top: 46px;
        margin-bottom: 200px;
    }

    li.blog {
        margin-top: 40px;
    }

    li.blog a {
        text-decoration: none;
        color: #333;
    }

    a.nextPage {
        text-decoration: none;
        color: #333333;
        position: absolute;
        right: 660px;
        bottom: 120px;
    }

</style>
