module.exports = [{
    name: "gws",
        code: `
    $onlyPerms[admin;manageserver;$deletecommand <a:XGIF:1015223551957143583>  Bạn không có quyền sử dụng lệnh này!]
    $setMessageVar[host;$authorID;$get[id]]
    $setMessageVar[win;$message[2];$get[id]]
    $setMessageVar[time;$message[1];$get[id]]
    $setMessageVar[date;$dateStamp;$get[id]]
    $setMessageVar[prize;$messageSlice[2];$get[id]]
    $setTimeout[gw;$get[sc]s;{
    "cid":"$channelID",
    "date":"$dateStamp",
    "time":"$message[1]",
    "host":"$authorID",
    "win":"$message[2]",
    "mid":"$get[id]",
    "prize":"$messageSlice[2]"
    }]
    $let[sc;$splitText[1]$textSplit[$math[$get[p]/1000];.]]
    $let[id;$sendMessage[Bắt Đầu Giveaway! {reactions:🎉} {newEmbed:{title:$messageSlice[2]} {description:Kết thúc trong: <t:$splitText[1]$textSplit[$math[($datestamp+$parseTime[$message[1]])/1000];.]:R>
    Chủ tạo: <@!$authorID>
    Số người thắng: $message[2]} {color:BLUE}};yes]]
    
    $onlyIf[$messageSlice[2]!=;Thiếu Tiêu Đề Giải Thưởng]
    $onlyIf[$isNumber[$message[2]]==true;Số người thắng là một con số lớn hơn 0]
    $onlyIf[$get[p]!=-1;Vui lòng nhập thời gian \`1s, 1m, 1d.....\`
    *s: giây*
    *m: phút*
    *h: giờ*
    *d: ngày*
    Sử dụng lệnh: \`!gws (thời gian) (số người thắng) (Tên giveaway)]
    $let[p;$parseTime[$if[$message[1]!=;$message[1];1s10ms]]]
    `
    
    },
     {
      name: "gw",
         type: "timeout",
         code: `
    $editMessage[$timeoutData[mid];Kết Thúc Giveaway! {newEmbed:{title:$timeoutData[prize]} {description:Đã kết thúc
    Chủ Tạo: <@!$timeoutData[host]>
    Người thắng:$if[$get[random]==;Không Ai Thắng;$get[random]]} {color:RED}};$timeoutData[cid]]
    $channelSendMessage[$timeoutData[cid];$if[$get[random]!=;Chúc mừng $get[random] Bạn Đã Thắng **$timeoutData[prize]**;Không ai chơi giveaway nên chẳng ai thắng cả!]]
    
    $let[random;$djsEval[
    var arrayy = "$getReactions[$timeoutData[cid];$timeoutData[mid];🎉;yes;id]".split(",")
    arrayy.splice(arrayy.indexOf("$clientId"),1)
    var array = arrayy
    var win = ""
    let u = $timeoutData[win]
    while (u != 0 && array.length > 0) {
    let r = Math.floor(Math.random()*array.length); 
    win += "<@!"+array[r]+">" + " "
    array.splice(array.indexOf(array[r]), 1)
    
    u = u - 1
    
    }
    win.split(" ").filter(function(a) {
    return a!='<@!undefined>' && a != ''
    }).join(", ")
    ;yes]]
    $onlyIf[$getMessage[$timeoutData[cid];$timeoutData[mid]]!=Giveaway Ended!;]
    `
         
    }]