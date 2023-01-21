const fs = require('fs')

global.creator = 'alizin-dev' 
global.apikey = ["alizinapi"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`ATUALIZAND'${__filename}'`)
	delete require.cache[file]
	require(file)
})
