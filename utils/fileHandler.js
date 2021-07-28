const fs = require('fs');
const {v4 : uuid} = require ('uuid');
const  extensionesValidas = ["png","jpg", "jpeg", "gif"];

const saveFile = ({mimetype, path}, allowE, destFolder = `./public/images`) =>{
    try{
    const [type, extension] = mimetype.split("/");
    if (!allowE.includes(extension)) throw "formato incorrecto";
    const uid = uuid();
    const fileName =`${uid}.${extension}`;
    const fileNameOut = `${destFolder}/${fileName}`;
    fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));
    fs.unlink(path, (err) => console.log(err));
    return fileName;
     } catch(e){
        fs.unlink(path, (err) => console.log(err));
        console.log(e);
    }
}

const imgFile = (file) => saveFile(file, extensionesValidas);
const imgFilep = (file) => saveFile(file, extensionesValidas, `./public/images/productos` )


module.exports = {imgFile, imgFilep}