const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

  console.log('---------------');

  console.log(' Mo3 Bot Is Online')

  console.log('---------------')

  client.user.setStatus("Online")

    client.user.setActivity(" Broadcast Server",{type: 'WATCHING'})

});

            var prefix = "-" ;
            
            
            
            const adminprefix = "-";//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

const devs = ['470500980342128650'];//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

client.on('message', message => {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

    

if (message.content.startsWith(adminprefix + 'setgame')) {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

  client.user.setGame(argresult);

    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)

} else 

  if (message.content.startsWith(adminprefix + 'setname')) {

client.user.setUsername(argresult).then

    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)

return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");

} else

  if (message.content.startsWith(adminprefix + 'setavatar')) {

client.user.setAvatar(argresult);

  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);

      } else     

if (message.content.startsWith(adminprefix + 'setT')) {

  client.user.setGame(argresult, "https://www.twitch.tv/idk");

    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)

}

});
            
            client.on ("guildMemberAdd", member => {

  

   var role = member.guild.roles.find ("name", "Members");

   member.addRole (role);

  

})

client.on ("guildMemberRemove", member => {

   

})


const fs = require('fs');

const moment = require('moment');

const jimp = require('jimp');

const Canvas = require('canvas');

 

client.on('guildMemberAdd', member => {

     const welcomer =  member.guild.channels.find('name', 'chat');

const w = ['./w1.png'];

 

         let Image = Canvas.Image,

            canvas = new Canvas(400, 200),

            ctx = canvas.getContext('2d');

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {

            if (err) return console.log(err);

            let BG = Canvas.Image;

            let ground = new Image;

            ground.src = Background;

            ctx.drawImage(ground, 0, 0, 400, 200);

             

         

 

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;

                jimp.read(url, (err, ava) => {

                    if (err) return console.log(err);

                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {

                        if (err) return console.log(err);

                       

                        ctx.font = "bold 12px Arial";

                        ctx.fontSize = '20px';

                        ctx.fillStyle = "#f1f1f1";

                        ctx.textAlign = "center";

                        ctx.fillText(`welcome to server`, 300, 130);

                       

                        ctx.font = "bold 12px Arial";

                        ctx.fontSize = '20px';

                        ctx.fillStyle = "#f1f1f1";

                        ctx.textAlign = "center";

                        ctx.fillText(member.user.username, 200, 150);

 

                let Avatar = Canvas.Image;

                              let ava = new Avatar;

                              ava.src = buf;

                              ctx.beginPath();

                              ctx.arc(77, 101, 62, 0, Math.PI*2);

                              ctx.stroke();

                                 ctx.clip();

                                 ctx.drawImage(ava, 13, 38, 128, 126);  

                         

               

                             

welcomer.sendFile(canvas.toBuffer())

 

 

 

     

     

                    }  )  

     

                   

 

})

      });                    

});

var dat = JSON.parse("{}");

function forEachObject(obj, func) {

    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });

}

client.on("ready", () => {

    var guild;

    while (!guild)

        guild = client.guilds.get("484660959730728961");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            dat[Inv] = Invite.uses;

        });

    });

});

 

 

 

client.on("guildMemberAdd", (member) => {

    let channel = member.guild.channels.get("484661121920270336");

    if (!channel) {

        console.log("!the channel id it's not correct");

        return;

    }

    if (member.id == client.user.id) {

        return;

    }

    console.log('-');

    var guild;

    while (!guild)

        guild = client.guilds.get("484660959730728961");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            if (dat[Inv])

                if (dat[Inv] < Invite.uses) {

                    setTimeout(function() {

 channel.send(`**invited by** ${Invite.inviter} `) ;

                    },1500);

 }

            dat[Inv] = Invite.uses;

       

       });

    });

});
            
            

client.on('message',async message => {

  var time = moment().format('Do MMMM YYYY , hh:mm');

  var room;

  var title;

  var duration;

  var gMembers;

  var currentTime = new Date(),

hours = currentTime.getHours() + 3 ,

minutes = currentTime.getMinutes(),

done = currentTime.getMinutes() + duration / 60000 ,

seconds = currentTime.getSeconds();

if (minutes < 10) {

minutes = "0" + minutes;

}

var suffix = "AM";

if (hours >= 12) {

suffix = "PM";

hours = hours - 12;

}

if (hours == 0) {

hours = 12;

}

  var filter = m => m.author.id === message.author.id;

  if(message.content.startsWith(prefix + "giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');

    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {

      message.channel.awaitMessages(filter, {

        max: 1,

        time: 20000,

        errors: ['time']

      }).then(collected => {

        let room = message.guild.channels.find('name' , collected.first().content);

        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');

        room = collected.first().content;

        collected.first().delete();

        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {

          message.channel.awaitMessages(filter, {

            max: 1,

            time: 20000,

            errors: ['time']

          }).then(collected => {

            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');

            duration = collected.first().content * 60000;

            collected.first().delete();

            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {

              message.channel.awaitMessages(filter, {

                max: 1,

                time: 20000,

                errors: ['time']

              }).then(collected => {

                title = collected.first().content;

                collected.first().delete();

                msg.delete();

                message.delete();

                try {

                  let giveEmbed = new Discord.RichEmbed()

                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)

                  .setFooter(message.author.username, message.author.avatarURL);

                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {

                     let re = m.react('🎉');

                     setTimeout(() => {

                       let users = m.reactions.get("🎉").users;

                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);

                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]

                       let endEmbed = new Discord.RichEmbed()

                       .setAuthor(message.author.username, message.author.avatarURL)

                       .setTitle(title)

                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)

                       .setTimestamp()

					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});

					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})

                     },duration);

                   });

                } catch(e) {

                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);

                  console.log(e);

                }

              });

            });

          });

        });

      });

    });

  }

});



client.on("message", message => {

		var args = message.content.split(' ').slice(1); 

	var msg = message.content.toLowerCase();

	if( !message.guild ) return;

	if( !msg.startsWith( prefix + 'role' ) ) return;

	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');

	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){

		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );

		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );

		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 

		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 

		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){

			message.mentions.members.first().removeRole( role1 );

			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');

		}

		if( args[0].toLowerCase() == "all" ){

			message.guild.members.forEach(m=>m.removeRole( role1 ))

			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');

		} else if( args[0].toLowerCase() == "bots" ){

			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))

			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');

		} else if( args[0].toLowerCase() == "humans" ){

			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))

			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');

		} 	

	} else {

		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );

		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );

		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 

		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 

		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){

			message.mentions.members.first().addRole( role1 );

			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');

		}

		if( args[0].toLowerCase() == "all" ){

			message.guild.members.forEach(m=>m.addRole( role1 ))

			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');

		} else if( args[0].toLowerCase() == "bots" ){

			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))

			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');

		} else if( args[0].toLowerCase() == "humans" ){

			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))

			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم إعطاء الشخص رتبة**');

		} 

	} 

});




            

client.on('message' , message => {

  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "send")) {

    let args = message.content.split(" ").slice(1);

    let suggestmessage = args.join(" ").slice(22);

    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {

        return message.reply("Please Mention the channel!")

    }

    if (!suggestmessage) {

        return message.reply("Plase Give Text To send Channel!")

    

         

    }

     message.delete();

suggestchannel.send("@everyone  `||` @here ");

    let embed = new Discord.RichEmbed()

        .addField("**message**", `${suggestmessage}`)

        .setFooter(`by ${message.author.tag}`)

        .setTimestamp()

    suggestchannel.send({

        embed

    }).then(msg => {

        msg.react("✅").then(r => msg.react("❎"))

    });

    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));

    return;

}

});




client.on('message', message => {

if (message.content.startsWith('-inv-info')) {

let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 

  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;

  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL

  message.guild.fetchInvites().then(invs => {

    let member = client.guilds.get(message.guild.id).members.get(oi);

    let personalInvites = invs.filter(i => i.inviter.id === oi);

    let urll = invs.filter(i => i.inviter.id === oi);

    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);

    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);

   let exec = personalInvites.reduce((p, v) => v.inviter);

 let possibleInvites = [['Total de membros recrutados:']];

possibleInvites.push([inviteCount, exec]);

        let user = message.mentions.users.first() || message.author;

        let mem = message.guild.member(user);

        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();

        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

const alpha = new Discord.RichEmbed()

.setAuthor(img)

.addField('🏆 Invite Infos',  `\n\n► لقد قمت بدعوة ما مجموعه \`\`${Number(inviteCount)}\`\` عضو.\n\n► لقد انضممت لسرفر مند\`${daysJoined.toFixed(0)}\`يوم .\n\n► لقد انضممت بهذه الدعوة\`${exec}\``,true)

.setThumbnail(imagemm)

.setColor(0x4959e9);

message.channel.send(alpha);

});

};

  });



client.login(process.env.BOT_TOKEN);  //
