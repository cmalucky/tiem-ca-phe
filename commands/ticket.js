module.exports = [{
name: 'ticket',

code: `
$title[🎟️ Créer un ticket]

$description[Cliquez sur le bouton pour créé un ticket !]

$footer[📩]

$color[00ff00]

$addbutton[1;ticket;primary;open;no;📩]

$addTimestamp

$setUserVar[TicketName;$authorID]



},{


  name: "open",
type: "interaction",
    prototype: "button",

  code: `
 $setUserVar[TicketOpen;yes]

$usechannel[$get[id]]

<@$authorID> | 1009537720038719540

$title[🎟️ Ticket]

$description[Veuillez attendre qu un membre du staff prenne en charge votre demande]

$color[BLUE]

$addbutton[1;fermer;danger;close;no;⛔]

$modifyChannelPerms[$authorID;$get[id];+viewchannel] 

$sendDm[Vous avez ouvert un ticket ici <#$get[id]>;$authorID;no]

$let[id;$createChannel[$guildID;Ticket-$username;text;yes;1010946481693397032]]

$onlyIf[$getUserVar[ticketOpen]]==yes;$sendDm[<:Ni_Warn:1006326615904628758> | Vous avez déjà ouvert un ticket !;$authorID;no]]
  `

},{





name: "close",
type: "interaction",
    prototype: "button",
    code: `$title[1;DeleteTicket]

$usechannel[$channelID]

$description[1;<@$authorID> voulez vous vraiment delete le ticket ?]

$color[1;d21010]

$modifyChannelPerms[$getUserVar[TicketName];$channelID;-viewchannel]
$setUserVar[TicketOpen;no]

bot.command({

name: 'ticket',

code: `
$title[🎟️ Créer un ticket]

$description[Cliquez sur le bouton pour créé un ticket !]

$footer[📩]

$color[00ff00]

$addbutton[1;ticket;primary;open;no;📩]

$addTimestamp

$setUserVar[TicketName;$authorID]

`

},{


  name: "open",
type: "interaction",
    prototype: "button",
    code: `
 $setUserVar[TicketOpen;yes]

$usechannel[$get[id]]

<@$authorID> | 1009537720038719540

$title[🎟️ Ticket]

$description[Veuillez attendre qu'un membre du staff prenne en charge votre demande]

$color[BLUE]

$addbutton[1;fermer;danger;close;no;⛔]

$modifyChannelPerms[$authorID;$get[id];+viewchannel] 

$sendDm[Vous avez ouvert un ticket ici <#$get[id]>;$authorID;no]

$let[id;$createChannel[$guildID;Ticket-$username;text;yes;1010946481693397032]]

$onlyIf[$getUserVar[ticketOpen]]==yes;$sendDm[<:Ni_Warn:1006326615904628758> | Vous avez déjà ouvert un ticket !;$authorID;no]]
  `

},{




name: "close",

type: "interaction",
    prototype: "button",
code: `$title[1;DeleteTicket]

$usechannel[$channelID]

$description[1;<@$authorID> voulez vous vraiment delete le ticket ?]

$color[1;d21010]

$modifyChannelPerms[$getUserVar[TicketName];$channelID;-viewchannel]
$setUserVar[TicketOpen;no]
`

}]
