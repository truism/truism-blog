<template>
    <div>
        <div>
            <h3 style="margin-left: 26px; font-style: italic; font-size: 36px;">
                <a href="#" @click.prevent="goToHome" style="text-decoration: none; color: #333333;">Truism</a>
            </h3>
        </div>
        <ul class="menu">
            <li>
                <a href="#" @click="goToHome">首页</a>
            </li>
            <li>
                <a href="#" @click="goToArchive">归档</a>
            </li>
            <li>
                <a href="#" @click="goToMessage">留言</a>
            </li>
            <li>
                <a href="#" @click="goToAbout">关于</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "menu",
        data() {
            return {

            }
        },

        methods: {
            goToHome: function () {
                this.$store.commit('init');
                console.log(this.$store.state.pageNum);
                this.$router.push("/");
            },

            goToArchive: function () {
                this.$router.push("/index/blog-archive");
            },

            goToMessage: function () {
                this.$router.push("/index/contact");
            },

            goToAbout: function () {
                this.$router.push("/index/about");
            },
        }
    }
</script>

<style scoped>
    ul.menu {
        list-style: none;
        margin: 8px 120px 40px 160px;
        background-color: beige;
        justify-content: flex-start;
    }

    ul.menu > li {

    }

    ul.menu > li > a {
        color: black;
        font-weight: bolder;
        font-size: 18px;
        float: left;
        margin-left: 26px;
        text-decoration: none;
        font-style: italic;
    }

</style>

