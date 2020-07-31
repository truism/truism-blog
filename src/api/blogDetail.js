import request from "@/utils/request";

export default ({

    getBlogDetail: function (id) {
        return request({
            url: `/blog/detail/${id}`,
            method: "GET"
        })
    },

})
