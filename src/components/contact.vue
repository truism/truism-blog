<template>
    <div class="contact">
        <h3>留言</h3>
        <el-form ref="form" :rules="rules" :model="message" label-width="120px;" label-position="top">
            <el-form-item label="邮箱" size="medium" prop="userEmail">
                <el-input v-model="message.userEmail" placeholder="请输入邮箱" size="medium" style="width: 240px;"></el-input>
            </el-form-item>
            <el-form-item label="留言内容" size="medium" prop="content">
                <el-input type="textarea" v-model="message.content" :rows="8"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="info" @click="sendMessage">提交</el-button>
                <el-button type="info" @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

    import messageApi from "@/api/message";

    export default {
        name: "contact",
        data() {
            return {
                message: {
                    userEmail: "",
                    content: "",
                },
                rules: {
                    userEmail: [{required: true, message: '请输入邮箱', trigger: 'blur'}],
                    content: [{required: true, message: '请输入留言内容', trigger: 'blur'}],
                }
            }
        },

        methods: {
            sendMessage: function () {
                this.$refs['form'].validate(valid => {
                    if(valid) {
                        messageApi.sendMessage(this.message).then(response => {
                            const resp = response.data;
                            if(resp.flag) {
                                this.$message({
                                    message: resp.message,
                                    type: "info"
                                });
                                this.$refs['form'].resetFields();
                            }
                        })
                    }else {
                        return false;
                    }
                });
            },

            resetForm: function (formName) {
                this.$nextTick(() => {
                    this.$refs[formName].resetFields();
                })
            },
        }
    }
</script>

<style scoped>

    div.contact {
        width: 680px;
        margin-top: 60px;
        margin-left: 420px;
    }

</style>
