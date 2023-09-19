var warningExpireDate = 31
var dangerExpireDate = 365
var now = new Date().getTime() // 当前时间戳
var modified = new Date(GLOBAL_CONFIG_SITE.postUpdate).getTime()
var postinfo = document.getElementsByClassName("post-date")[0]

var datepassing = parseInt(now - modified)
if(datepassing > 3600*24*warningExpireDate*1000){
    var out = parseInt(datepassing / 86400000)
    document.write("<div class=\"note warning\"><p><strong>文章时效性提示</strong><br>这是一篇最后修改于 " + out + " 天前的文章，其中的信息可能已经有所发展或是发生改变。</p></div>")
} else if (datepassing > 3600*24*dangerExpireDate*1000) {
    var out = parseInt(datepassing / 86400000)
    document.write("<div class=\"note danger\"><p><strong>文章时效性提示</strong><br>这是一篇最后修改于 " + out + " 天前的文章，其中的信息可能已经有所发展或是发生改变。</p></div>")

}