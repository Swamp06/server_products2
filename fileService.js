import {v4 as uuidv4} from "uuid"


class FileService{
    async saveFile(file){
        try {
            const fileType = file.name.split(".").pop()
            const fileName = `${uuidv4()}.${fileType}`

            const filePath = `./files/${fileName}`

            await file.mv(filePath)
            return fileName
        } catch (error) {
            console.log("Ошибка при добавлении файла: " + error);
            
        }
    }
}

export default new FileService
