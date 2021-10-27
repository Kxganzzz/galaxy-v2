const os = process
global.DeveloperMode = 'false' //true Or false
global.owner = ['62881037046507', '62881037046507'] || os.env["62881037046507"]// Put your number here
global.linkGC = ['https://chat.whatsapp.com/GOFJlWsbjYG3EIK0rDOYsb:']
global.mods = ['62881037046507', '62881037046507'] // Want some help?
global.prems = ['62881037046507', '62881037046507'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  vhtear: 'https://vhtear.com',
  zeks: 'https://api.zeks.xyz',
  clph: 'https://recoders-area.caliph.repl.co'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'kurrxd09',
  'https://recoders-area.caliph.repl.co': 'FreeApi',
  'https://vhtear.com': 'AdiOfficial404',
  'https://api.zeks.xyz': 'apivinz'
}

// Sticker WM
global.packname = 'Sticker By Aditz Botz'
global.author = 'ADITZZ SULTAN'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
