"use strict";
function isWeiXin() {
    return "micromessenger" == window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
}
function shareWX() {
    function e() {
        return {
            title: "Tencent Live Conference (TLC) 2019 - 'Focus on the front end, embrace the flow of information'",
            desc: "Tencent Live Conference (TLC)  is Tencent's influential technology conference for developers. The theme of this years is 'Focus on the front end, embrace the flow of information'",
            link: i,
            imgUrl: "https://qpic.url.cn/feeds_pic/Q3auHgzwzM7vqSndf7TQW6b9gDXXIwib4sa7BVXeRBsjlKSm7y6JvRQ/"
        }
    }
    function n(n) {
        var i = {
            debug: !1,
            appId: "wx46043b46111e904e",
            timestamp: n.timestamp,
            nonceStr: n.nonceStr,
            signature: n.signature,
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
        };
        wx.config(i),
        wx.ready(function() {
            var n = e();
            wx.onMenuShareTimeline({
                title: n.title,
                link: n.link,
                imgUrl: n.imgUrl,
                success: function() {},
                cancel: function() {}
            }),
            wx.onMenuShareAppMessage({
                title: n.title,
                desc: n.desc,
                link: n.link,
                imgUrl: n.imgUrl,
                type: "",
                dataUrl: "",
                success: function() {},
                cancel: function() {}
            }),
            wx.onMenuShareQQ({
                title: n.title,
                desc: n.desc,
                link: n.link,
                imgUrl: n.imgUrl,
                success: function() {},
                cancel: function() {}
            }),
            wx.onMenuShareWeibo({
                title: n.title,
                desc: n.desc,
                link: n.link,
                imgUrl: n.imgUrl,
                success: function() {},
                cancel: function() {}
            }),
            wx.onMenuShareQZone({
                title: n.title,
                desc: n.desc,
                link: n.link,
                imgUrl: n.imgUrl,
                success: function() {},
                cancel: function() {}
            })
        }),
        wx.error(function(e) {
            console.error(e)
        })
    }
    parseInt((new Date).getTime() / 1e3, 10),
    parseInt(1e6 * Math.random(), 10);
    var i = window.location.href.replace(/#.*$/, "");
    $.ajax({
        url: "https://ivweb.io/api/v1/wechat/share",
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        data: {
            appid: "wx46043b46111e904e",
            url: i
        },
        timeout: 5e3,
        success: function(e) {
            console.log("ajax response result:", e.sign),
            n(e.sign)
        },
        error: function(e) {
            console.error("获取weixin签名失败", e)
        }
    })
}
isWeiXin() && shareWX()