import request from "@/utils/request";

export default ({
    sendMessage: function (message) {
        return request({
            url: "/message/",
            method: "POST",
            data: message,
        })
    },
})
