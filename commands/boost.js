module.exports=({
    name: "$alwaysExecute",
    code: `$channelSendMessage[$systemChannelID;$giveRoles[$guildID;$autorID;1009377132914409502] Cảm ơn bạn <@$authorID> đã nâng cấp tiệm]
$onlyIf[$checkContains[$tolowercase[$messageType];premium]==true;]
`})