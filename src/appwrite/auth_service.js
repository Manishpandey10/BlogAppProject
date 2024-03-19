import conf from "../config/config";
import {Client, Account, ID} from 'appwrite'


export class Authwrite{
    client = new Client()
    account;

    constructor(){
        this.client
                .setEndpoint(conf.appwrite_url)
                .setProject(conf.appwrite_projectid)
        this.account= new Account(this.client)        
    }

    async createAccount({email, password, name }){
        try{
            const userAccount = await this.account.create(ID.unique(), email, name )
            if (userAccount)
            {
                return this.login({email,password});
            }
            else{
                return userAccount
            }
        }
        catch(error){
            throw error
        }

    }
    async login({email, password}){
        try {
            const login= this.account.createEmailPasswordSession(email,password)
            return login
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("no user present here !!!!")
        }
    }
    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("oops!! we encountered a error",error)
        }
    }
}

const authWrite = new Authwrite()

export default authWrite