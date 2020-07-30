<template>
    <div>
        <div>
            <h3 style="margin-left: 26px; font-style: italic; font-size: 36px;">Truism</h3>
        </div>
        <ul class="menu">
            <li>
                <a @click="goToHome">首页</a>
            </li>
            <li>
                <a @click="goToArchive">归档</a>
            </li>
            <li>
                <a @click="goToMessage">留言</a>
            </li>
            <li>
                <a @click="goToAbout">关于</a>
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

            },

            goToArchive: function () {

            },

            goToMessage: function () {

            },

            goToAbout: function () {

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

