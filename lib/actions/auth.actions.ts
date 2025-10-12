'use server'

import { headers } from "next/headers"
import { auth } from "../better-auth/auth"
import { inngest } from "../inngest/client"


export const signUpWithEmail = async(data: SignUpFormData)=>{
    try {
        const response = await auth.api.signUpEmail({
            body: {
                email: data.email, 
                password: data.password, 
                name: data.fullName
            }
        })

        if(response){
            await inngest.send({
                name: 'app/user.created',
                data: {
                    email: data.email,
                    name: data.fullName,
                    country: data.country,
                    investmentGoals: data.investmentGoals,
                    riskTolerance: data.riskTolerance,
                    preferredIndustry : data.preferredIndustry
                }
            })
        }

        return {success: true, data: response}
    } catch (error) {
        console.log("Sign up faild",error)
        return {success:false,error: 'Sign up faild'}
    }
}

export const signIn = async(data: SignInFormData)=>{
    try {
        const response = await auth.api.signInEmail({
            body: {
                email: data.email,
                password: data.password
            }
        })
        
        return {success: true, data : response}
    } catch (error) {
        console.log("Sign in faild",error)
        return {success:false ,error: "Sign in faild"}
    }
}

export const signOut = async()=>{
    try {
        await auth.api.signOut({headers: await headers()})
    } catch (error) {
        console.log("Sign out faild",error)
        return {susscess: false, error:'Sign out faild'}

    }
}