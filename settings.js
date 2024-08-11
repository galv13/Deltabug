require("./all/module.js")
//========== Setting Owner ==========
global.owner = "AlwaysDeltaXs"
global.namaowner = "Delta"
global.namabot = "deltacrash"
//======== Setting Bot ========
global.foother = "©𝘋𝘦𝘭𝘵𝘢𝘤𝘳𝘢𝘴𝘩 𝘙𝘦𝘷𝘰𝘭𝘶𝘵𝘪𝘰𝘯™"
global.packname = "Dibuat oleh"
global.author = "DeltaCrash"
global.footer2 = '👾'
//========== Setting Event ==========
global.welcome = false
global.autoread = false
global.anticall = true
global.owneroff = false
//========= Setting Message =========
global.msg = {
"error": "\ Maaf ada yg salah\`","done": "\`Berhasil\`","wait": "\`Mohon tunggu\`", 
"group": "\`Group Only\`","private": "\`Private Only\`", 
"admin": "\`Admin Only\`","adminbot": "\`Dapat digunakan ketika bot menjadi admin\`", 
"owner": "\`Owner Only\`","developer": "\`Fitur Khusus Delta\`"
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})