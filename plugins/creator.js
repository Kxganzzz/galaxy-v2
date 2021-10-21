let handler = function (m) {
  // this.sendContact(m.chat, '628873421382', 'gsattt', m)
  this.sendContact(m.chat, '62881037558649', 'Kxyudi', m)
  m.reply('wa.me/62881037558649')
}
handler.help = ['owner', 'creator', 'pemilikbot']
handler.tags = ['info']

handler.command = /^(owner|creator|pemilikbot)$/i

module.exports = handler
