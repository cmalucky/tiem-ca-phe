module.exports ={
  name: "info",
  code:`
  $onlyPerms[admin;manageserver;$deletecommand <a:XGIF:1015223551957143583>  Bạn không có quyền sử dụng lệnh này!]
$color[763819]
$thumbnail[1;$userAvatar[$mentioned[1;yes]]]
 $title[1;Hồ sơ $username[$mentioned[1;yes]]]
 $addField[1;**Trạng thái tùy chỉnh**;$getCustomStatus[$mentioned[1;yes]];yes]
 $addField[1;**Avatar**;[Avatar Link\\]($userAvatar[$mentioned[1;yes];2048;yes]);yes]
$addField[1;** 💿 Server**;\<a:casino2:1008150015451074630> \ **Quyền**: $userPerms[$mentioned[1;yes]];yes]
$addField[1;** <:title:1016607970475397182>  Info người dùng**; \<:name:1013452818818011138> \ **Tên**: $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]
\<a:card:1016607202628349992> \ **ID**: $mentioned[1;yes]
\<a:status:1016607502286209044> \ **Trạng thái**: $status[$mentioned[1;yes]]
\<a:zz_pencil:1015628425802825800> \ **Danh hiệu**: $getUserBadges[$mentioned[1;yes]]
\<a:pc:1016607636260667433> \ **Nền tảng**: $platform[$mentioned[1;yes]]
\<:created:1016608075781783642> \ **Ngày tạo**: $creationDate[$mentioned[1;yes];date] ($creationDate[$mentioned[1;yes];time]);yes]
 `
}