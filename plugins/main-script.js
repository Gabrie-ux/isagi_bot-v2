const handler = async (m, { conn }) => {
  const texto = `
 _*REPO DE el BOT*_ 

\`\`\`Repositorio OFC:\`\`\`
https://github.com/Gabrie-ux/isagi_bot

> 🌟 Deja tu estrella así nos motivas a seguir mejorando la bot.

🔥 *Grupo oficial del bot:* https://chat.whatsapp.com/KoJjHo6o3Ew7P5qkja
  `.trim()

  await conn.reply(m.chat, texto, m)
}

handler.help = ['script']
handler.tags = ['info']
handler.command = ['script']

export default handler
