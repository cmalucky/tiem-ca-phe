module.exports = [{
    name: "c1",
    type: "interaction",
    prototype: "button",
    code:`
    $interactionModal[Xác minh bạn là con người!;c2;
     {actionRow:
       {textInput:Nhập mã xác minh#COLON#:1:captchacode:yes:Nhập mã xác minh trong ảnh tại đây!:3:30}
     }
     ]
     $wait[1s]
    `
  },{
   name: "c2",
   type: "interaction",
   prototype: 'modal',
   $if: "v4",
   code: `$if[$checkContains[$textInputValue[captchacode];$getUserVar[captchacode;$interactionData[user.id]]]==true]
   $giveRoles[$guildID;$authorID;1009370197334954094]
$interactionReply[<a:tickgif:1012614934976286790> **__Xác minh thành công!__**
<a:dot:999956646048579595> Hãy chuyển đến <#1010017266638794822> để nhắn tin cùng mọi người nào!;;;;;yes]
$takeRoles[$guildID;$authorID;1009383592587165776]
  $else
   $interactionReply[<a:XGIF:1015223551957143583> **Mã sai! Vui lòng nhập lại mã!**;;;;;yes]
  $endif
  $log[$textInputValue[captchacode] $getUserVar[captchacode;$interactionData[user.id]] $checkContains[$textInputValue[captchacode];$getUserVar[captchacode;$interactionData[user.id]]]]
   `
  }]