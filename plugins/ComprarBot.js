const handler = async (m, {conn}) => {
  m.reply(global.ComprarBot);
};
handler.command ='comprarbot',/^(ComprarBot|Comprar|comprar|ComprarBot)$/i;
export default handler;

global.ComprarBot = `
〔 *ISAGI - BOT* 〕

*BOT PARA GRUPO* :
> wa.me/51941247696

*BOT PERZONALIZADO* :
> wa.me/51941247696
`;