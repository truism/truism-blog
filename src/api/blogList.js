import request from "@/utils/request";

export default {
    getBlogList(page) {
        return request({
            url: `/blog/${page}`,
            method: "GET"
        })
    },


}
