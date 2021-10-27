let handler = function (m) {
  // this.sendContact(m.chat, '62881037046507', 'yudi', m)
  this.sendContact(m.chat, '62881037046507', 'Kxyudi', m)
  m.reply('wa.me/62881037046507')
}
handler.help = ['owner', 'creator', 'pemilikbot']
handler.tags = ['info']

handler.command = /^(owner|creator|pemilikbot)$/i

module.exports = handler
