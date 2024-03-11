import conf from "../config/config";
import {Client, ID, Databases, Query, Storage} from 'appwrite'

export class DatabaseService{
    client= new Client();
    databases;
    Bucket;
    constructor(){
    this.client
    .setEndpoint(conf.appwrite_url)
    .setProject(conf.appwrite_projectid)
    this.databases= new Databases()
    this.Bucket= new Storage()
}
    async createPost({Title, slug, Content, Image,Status, userid})
    {
        try {
            return await  this.databases.createDocument(
                conf.appwrite_databaseid,
                conf.appwrite_collectionid,
                slug,{
                    Title,Content, Image, Status , userid})
                }
            
         catch (error) {
            throw error;
        }
    }




    async updatePost(slug,{Title,Content,Image, Status}){
        try {
            return await this.databases.updateDocument(
                conf.appwrite_databaseid,
                conf.appwrite_collectionid,
                slug,{Title,Content, Image, Status}
                
            )
        } catch (error) {
            throw error
        }
    }

    async deletePost({slug}){
        try {
            return await this.databases.deleteDocument(
                conf.appwrite_databaseid,conf.appwrite_collectionid,slug
            )
            return true
        } catch (error) {
            throw error
               
        }
    }
    async getPost({slug}){
        try {
            return await this.databases.getDocument(
                conf.appwrite_databaseid,conf.appwrite_collectionid,slug
            )
        } catch (error) {
            console.error("unable to get post !!!")
            return false
        }
    }

    async getActivePost(queries=Query.equal["status","active"]){
        try {
            return await this.databases.listDocuments(
                conf.appwrite_databaseid, conf.appwrite_collectionid, queries
            )
        } catch (error) {
            return error
        }
    }



}




const service = new DatabaseService()

export default service