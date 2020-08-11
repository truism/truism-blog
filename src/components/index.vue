<template>
    <div class="box">
        <el-row>
            <app-menu></app-menu>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="18">
                <router-view></router-view>
            </el-col>

        </el-row>
    </div>
</template>

<script>
    console.log(process.env.VUE_APP_BASE_API);
    import menu from "@/components/menu";

    export default {
        name: "index",
        components: {
            'app-menu' : menu,
        },

        data() {
            return {

            }
        },

        methods: {

        },
    }
</script>

<style scoped>



</style>
