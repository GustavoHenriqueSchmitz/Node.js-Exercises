import * as fs from 'fs'

function createDir(dirName=String) {
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName, (err)=>{
            if (err) {
                throw err
            }
            console.log('Diretório criado com sucesso!')
        })
    } else {
        console.log('Impossível efetuar a ação, o diretório já existe.')
    }
}

function renameDirFile(dirName=String, newDirName=String) {
    if (fs.existsSync(dirName)) {
        fs.renameSync(dirName, newDirName, (err)=>{
        if (err) {
            throw err
        }
        console.log('Arquivo ou diretório renomeado com sucesso!')
        })
    } else {
        console.log('A pasta ou arquivo especificado não existe.')
    }
}

function deleteDir(dirName=String, recursive=Boolean, force=Boolean) {
    if (fs.existsSync(dirName)) {
        fs.rmdirSync(dirName, {recursive, force}, (err)=>{
            if (err) {
                throw err
            }
            console.log('Diretório deletado com sucesso!')
        })
    } else {
        console.log('O diretório especificado não existe!')
    }
}

function createFile(fileName=String, initialContent=String) {
    if (!fs.existsSync(fileName)) {
        fs.writeFile(fileName, initialContent, (err)=>{
            if (err) {
                throw err
            }
            console.log('Arquivo criado com sucesso!')
        })
    } else {
        console.log('Impossível efetuar a ação, o arquivo já existe.')
    }
}

createDir('./files')
createDir('./test')
renameDirFile('./test','files2')
deleteDir('./files2', true, false)
createFile('./files/test_file', '')
