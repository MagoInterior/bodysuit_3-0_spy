import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
global.owner = [
  ['573245104054'], //cambia aqui para ser el owner
  ['3133549404'],
  ['573217337733', '©admist.™✓', true]
] // Pon tu número aquí
global.mods = ['529996125657'] // ¿Quieres ayuda?
global.prems = ['16299996686',] //aqui pon el numero para agregar usuarios premium si no se guarda con el comando #addprem
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
global.multiplier = 69 // Cuanto más alto, más difícil subir de nivel
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      exp: '✉️',
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})








































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































var _0x47457e = _0x4435; function _0x4435(_0x3020d9, _0x1e5034) { var _0x3f92a4 = _0x3f92(); return _0x4435 = function (_0x443560, _0x2c7a57) { _0x443560 = _0x443560 - 0xca; var _0x5c1901 = _0x3f92a4[_0x443560]; return _0x5c1901; }, _0x4435(_0x3020d9, _0x1e5034); } function _0x3f92() { var _0x49da63 = ['𝙄𝙣𝙛𝙞𝙣𝙞𝙭\x20𝙗𝙤𝙩\x20™✓\x20𝙗𝙮:\x20@𝙊𝙙𝙞𝙣', 'author', '477006vrBEBs', '12gyHUmD', '1103586IePXZK', '23281344Ueqise', '4242656osnvrH', '4IyyxUO', '1599981hqjMdR', '1483013mVdllj', '3026575hxUpFq']; _0x3f92 = function () { return _0x49da63; }; return _0x3f92(); } (function (_0x50f54a, _0x2f6bd4) { var _0x25a20e = _0x4435, _0x2ecac1 = _0x50f54a(); while (!![]) { try { var _0x33e664 = parseInt(_0x25a20e(0xd0)) / 0x1 + parseInt(_0x25a20e(0xd2)) / 0x2 + -parseInt(_0x25a20e(0xcb)) / 0x3 * (-parseInt(_0x25a20e(0xca)) / 0x4) + parseInt(_0x25a20e(0xcd)) / 0x5 + -parseInt(_0x25a20e(0xd1)) / 0x6 * (-parseInt(_0x25a20e(0xcc)) / 0x7) + parseInt(_0x25a20e(0xd4)) / 0x8 + -parseInt(_0x25a20e(0xd3)) / 0x9; if (_0x33e664 === _0x2f6bd4) break; else _0x2ecac1['push'](_0x2ecac1['shift']()); } catch (_0x25ce44) { _0x2ecac1['push'](_0x2ecac1['shift']()); } } }(_0x3f92, 0x82893), global[_0x47457e(0xcf)] = _0x47457e(0xce), global['packname'] = _0x47457e(0xce));