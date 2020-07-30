<template>
    <div class="box">
        <el-row>
            <app-menu></app-menu>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="18">
                    <!--<app-blogList></app-blogList>-->
                    <app-blog-detail></app-blog-detail>
            </el-col>

        </el-row>
    </div>
</template>

<script>
    import menu from "@/components/menu";
    import blogList from "@/components/blog-list";
    import blogDetail from "@/components/blog-detail"

    export default {
        name: "index",
        components: {
            'app-menu' : menu,
            'app-blog-list': blogList,
            'app-blog-detail': blogDetail,
        },

        data() {
            return {

            }
        },

        created: {

        },

        methods: {

        },
    }
</script>

<style scoped>

</style>
