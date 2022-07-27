import * as fs from 'fs'

function CreateDir(dirName) {
    if (!fs.existsSync('./files')) {
        fs.mkdirSync(dirName, (err)=>{
            if (err) {
                throw err
            }
            console.log('Arquivo criado com sucesso!')
        })
    } else {
        console.log('Impossível efetuar a ação, a pasta já existe.')
    }
}

CreateDir('files')