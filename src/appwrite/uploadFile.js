import conf from "../config/config";
import{Client, ID, Storage} from 'appwrite'
import dbService from "./dbconf";

export class FileUpload{
    client = new Client();
    
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwrite_url)
            .setProject(conf.appwrite_projectid)
            this.bucket = new Storage(this.client)
            
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwrite_bucketid,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.error("Failed to upload!!")
        }
    }
    async deleteFile(fileID){
        try {
            return await this.bucket.deleteFile(
                conf.appwrite_bucketid,
                fileID
            )
            
        } catch (error) {
            throw error
        }
    }
    filePreview(fileID){
        try {
            return this.bucket.getFilePreview(conf.appwrite_bucketid, fileID)
        } catch (error) {
            
        }
    }
    async fileDownload(fileID){
        try {
            return await this.bucket.getFileDownload(conf.appwrite_bucketid, fileID)
        } catch (error) {
            throw console.error("There is a problem while downloading the file Try again after someTime");
        }
    }
}

const uploadService = new FileUpload()

export default uploadService
