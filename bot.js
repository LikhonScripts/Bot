bot.command('instadl', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split("tiktokdl ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://api.vhtear.com/tiktokdl?link='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res);
         ctx.replyWithVideo(res.data.result.video);
    }).catch(e => {
         console.log(e);
   })
})*/

bot.launch()
