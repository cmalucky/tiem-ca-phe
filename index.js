const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
   token: "MTAxMDAxNTgxOTE0MjU0OTYyNQ.GogHhV.UgREnqCzzGgMMYN8cYYiCzzDSCsilkKhCvLy4I", 
   prefix: "!",
   intents: "all"
 })

bot.onMemberUpdate()

bot.variables({
 captchacode: "",
 prize: "",
 date: "",
 cid: "",
 time: "",
 host: "",
 win: "",
 mid: "",
 setup: "",
})

//Events
bot.onMessage()
bot.onInteractionCreate()
bot.interactionCommand({
  name: "verify",
  prototype: 'button',
  code: `$setUserVar[captchacode;$randomString[5]]`
})
  bot.interactionCommand({
  name: "verify",
  prototype: 'button',
  code: `$interactionReply[;{newEmbed:{description:*<a:stttar:1010330887218532433> Nếu không thấy đoạn mã thì có thể nhấn lại nút __Làm mới__*
<a:stttar:1010330887218532433> Nhấn nút __Nhập mã__ ở bên dưới để xác minh!}{color:928275}
{image:https://tiefleta.sirv.com/captcha-bg.png?text.0.text=$getUserVar[captchacode]&text.0.color=ffffff&text.0.opacity=75&text.0.font.family=Ropa%20Sans&text.0.font.weight=300&text.0.font.style=italic}};{actionRow:
{button:Làm mới:1:verify:no:<a:reload:1014121698511044618>}{
{button:Nhập mã:success:c1:no:<a:zz_pencil:1015628425802825800>}};;;yes]
`
})                 

//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
 
bot.status({
  text: "Tiệm cà phê",
  type: "WATCHING",
  time: 15
})

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./commands/");

bot.onJoin()
bot.joinCommand({ //command
 channel: "1009370137624846386", //channel where it will log
 code: `
$giveRoles[$guildID;$authorID;1009383592587165776] $author[1;$username#$discriminator[$authorID];$authorAvatar]
 $randomText[Chào <@$authorID> đã đến với: **__Tiệm cà phê__**;**__Tiệm cà phê__** Kính chào quý khách <@$authorID>!]
$color[25C059]
$thumbnail[$serverIcon]
$title[<a:letterw:999152387069583400> <a:lettere:999151178971619328> <a:letterl:999151702232023131> <a:letterc:999151025317486664> <a:lettero:999151863960182795> <a:letterm:999151760155365417> <a:lettere:999151178971619328>ㅤ]
$description[<a:Thanks:1010367403051458690> **Cảm ơn quý khách đã vào tiệm của chúng tôi**

<a:dot:999956646048579595>Đọc <#1009380539662348288> để không vi phạm luật
<a:dot:999956646048579595> Vui lòng quý khách xác minh tại <#1009383340866019389> để bắt đầu vào tiệm ạ
<a:dot:999956646048579595> Rồi quý khách có thể chọn đồ ăn/ uống tại <#1010378206987169822>
<a:dot:999956646048579595> Vui vẻ nói chuyện với nhau tại <#1010017266638794822> 
<a:dot:999956646048579595> Mở máy phát nhạc tại <#1010080734637211668>

<a:happypanda:1010367840475418664> *Chúc mọi người vui vẻ khi ở tiệm !!*]
$image[$randomText[https://media.discordapp.net/attachments/901076082323763230/1010119592619814953/SPOILER__.gif;https://media.discordapp.net/attachments/901076082323763230/1010372771089494127/SPOILER_50dc231d-54ac-46be-ad9e-d97e4cc83af7.gif;https://media.discordapp.net/attachments/901076082323763230/1010372770821050458/SPOILER_Green_Cafe.gif;https://media.discordapp.net/attachments/901076082323763230/1010372770489712690/SPOILER_f8925b67-ec85-4160-a6be-1c981654534b.gif]]
$footer[1;Hiện tiệm đã có $membersCount quý khách!;$randomText[https://cdn.discordapp.com/emojis/901727366001340437.gif?v=1&size=48&quality=lossless;https://cdn.discordapp.com/emojis/901733605057888276.gif?v=1&size=48&quality=lossless]] 
$addTimestamp` //Message sent to <channel>
   })



bot.joinCommand({ //command
 channel: "1009370137624846386", //channel where it will log
 code: `$dm
$randomText[Chào <@$authorID> đã đến với: **__Tiệm cà phê__**;**__Tiệm cà phê__** Kính chào quý khách <@$authorID>!]
$color[25C059]
$author[1;$username#$discriminator[$authorID];$userAvatar]
$thumbnail[$serverIcon]
$title[<a:letterw:999152387069583400> <a:lettere:999151178971619328> <a:letterl:999151702232023131> <a:letterc:999151025317486664> <a:lettero:999151863960182795> <a:letterm:999151760155365417> <a:lettere:999151178971619328>ㅤ]
$description[<a:Thanks:1010367403051458690> **Cảm ơn quý khách $username đã vào tiệm của chúng tôi**

<a:dot:999956646048579595>Đọc <#1009380539662348288> để không vi phạm luật
<a:dot:999956646048579595> Vui lòng quý khách xác minh tại <#1009383340866019389> để bắt đầu vào tiệm ạ
<a:dot:999956646048579595> Rồi quý khách có thể chọn đồ ăn/ uống tại <#1010378206987169822>
<a:dot:999956646048579595> Vui vẻ nói chuyện với nhau tại <#1010017266638794822> 
<a:dot:999956646048579595> Mở máy phát nhạc tại <#1010080734637211668>

<a:happypanda:1010367840475418664> *Chúc bạn $username vui vẻ khi ở tiệm !!*]
$image[$randomText[https://media.discordapp.net/attachments/901076082323763230/1010119592619814953/SPOILER__.gif;https://media.discordapp.net/attachments/901076082323763230/1010372771089494127/SPOILER_50dc231d-54ac-46be-ad9e-d97e4cc83af7.gif;https://media.discordapp.net/attachments/901076082323763230/1010372770821050458/SPOILER_Green_Cafe.gif;https://media.discordapp.net/attachments/901076082323763230/1010372770489712690/SPOILER_f8925b67-ec85-4160-a6be-1c981654534b.gif]]
$footer[1;Thanks for join my server, $username!;$randomText[https://cdn.discordapp.com/emojis/901727366001340437.gif?v=1&size=48&quality=lossless;https://cdn.discordapp.com/emojis/901733605057888276.gif?v=1&size=48&quality=lossless]]
$addTimestamp`
})

bot.joinCommand({ //command
 channel: "1010463737196585030", //channel where it will log
 code: `$color[763819]
$thumbnail[1;$userAvatar[$mentioned[1;yes]]]
 $title[1;Hồ sơ $username]
 $addField[1;**Trạng thái tùy chỉnh**;$getCustomStatus[$mentioned[1;yes]];yes]
 $addField[1;**Avatar**;[Avatar Link\\]($userAvatar[$mentioned[1;yes];2048;yes]);yes]
$addField[1;** 💿 Server**;\<a:casino2:1008150015451074630> \ **Quyền**: $userPerms[$mentioned[1;yes]];yes]
$addField[1;** <:title:1016607970475397182>  Info người dùng**; \<:name:1013452818818011138> \ **Tên**: $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]
\<a:card:1016607202628349992> \ **ID**: $mentioned[1;yes]
\<a:status:1016607502286209044> \ **Trạng thái**: $status[$mentioned[1;yes]]
\<a:zz_pencil:1015628425802825800> \ **Danh hiệu**: $getUserBadges[$mentioned[1;yes]]
\<a:pc:1016607636260667433> \ **Nền tảng**: $platform[$mentioned[1;yes]]
\<:created:1016608075781783642> \ **Ngày tạo**: $creationDate[$mentioned[1;yes];date] ($creationDate[$mentioned[1;yes];time]);yes]` //Message sent to <channel>
   })

bot.onLeave()
bot.leaveCommand({
        channel: "1009380066851041311",
        code: `$randomText[Tạm biệt quý khách! Mong quý khách sẽ sớm quay lại __**Tiệm cà phê**__!;__**Tiệm cà phê**__ Tạm biệt quý khách mong quý khách quay lại!]
$color[FB0403]
$author[1;$username#$discriminator;$userAvatar]
$thumbnail[$serverIcon]
$title[<a:letterg:999151296261148743> <a:lettero:999151863960182795> <a:lettero:999151863960182795> <a:letterd:999151116078026762> ㅤ <a:letterb:999150960372875304> <a:lettery:999152490132033596> <a:lettere:999151178971619328> ]
$description[<a:PeepoWaveGoodbye:1010543662956027904> **Tạm biệt quý khách, hẹn gặp lại =((**]
$image[$randomText[https://media.discordapp.net/attachments/901076082323763230/1010537498176405565/SPOILER_81acea53-c6d4-4d1d-9f7d-5e5f566a8d47.gif;https://media.discordapp.net/attachments/901076082323763230/1010537498432262174/SPOILER_29b28dd9-5670-47cb-b340-b658a339ed2e.gif]]
$footer[1;Tiệm bây giờ còn lại: $membersCount quý khách;$randomText[https://cdn.discordapp.com/emojis/1010530322498199633.gif?v=1&size=48&quality=lossless;https://cdn.discordapp.com/emojis/1010530431566889010.gif?v=1&size=48&quality=lossless]]
$addTimestamp`
})
bot.leaveCommand({
        channel: "1009380066851041311",
        code: `$dm
$randomText[Tạm biệt quý khách $username! Mong quý khách sẽ sớm quay lại __**Tiệm cà phê**__!
**Mong quý khách quay lại tại: https://discord.gg/BRHXBnKWQd**;__**Tiệm cà phê**__ Tạm biệt quý khách $username mong quý khách quay lại!
**Mong quý khách quay lại tại: https://discord.gg/BRHXBnKWQd**]
$color[FB0403]
$author[1;$username#$discriminator[$authorID];$userAvatar]
$title[<a:letterg:999151296261148743> <a:lettero:999151863960182795> <a:lettero:999151863960182795> <a:letterd:999151116078026762> ㅤ <a:letterb:999150960372875304> <a:lettery:999152490132033596> <a:lettere:999151178971619328> ]
$description[<a:PeepoWaveGoodbye:1010543662956027904> **Tạm biệt quý khách $username, hẹn gặp lại =((**]
$image[$randomText[https://media.discordapp.net/attachments/901076082323763230/1010537498176405565/SPOILER_81acea53-c6d4-4d1d-9f7d-5e5f566a8d47.gif;https://media.discordapp.net/attachments/901076082323763230/1010537498432262174/SPOILER_29b28dd9-5670-47cb-b340-b658a339ed2e.gif]]
$footer[1;Tiệm bây giờ còn lại: $membersCount quý khách;$randomText[https://cdn.discordapp.com/emojis/1010530322498199633.gif?v=1&size=48&quality=lossless;https://cdn.discordapp.com/emojis/1010530431566889010.gif?v=1&size=48&quality=lossless]]
$addTimestamp`
})
