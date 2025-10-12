import { success } from "better-auth";
import { inngest } from "./client";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./prompts";
import { sendWelcomeEmail } from "../nodemailer";
import { getAllUserForNewEmail } from "../actions/user.actions";


export const sendSignupEmail = inngest.createFunction(
    {id:'sign-up-email'},
    {event : 'app/user.created'},
    async ({event,step})=>{
        const userProfile= `
        - Country: ${event.data.country}
        - Investment goals: ${event.data.investmentGoals}
        - Risk tolerance: ${event.data.riskTolerance}
        - Preferred industry: ${event.data.preferredIndustry}        
        `

    const propmt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace('{{userProfile}}',userProfile)

    const response = await step.ai.infer('generate-welcome-intro',{
        model: step.ai.models.gemini({model: 'gemini-2.5-flash-lite'}),
            body: {
                contents:[
                    {
                        role: 'user',
                        parts: [
                            { text: propmt}
                        ]
                    }
                ]
            }
    })

    await step.run('send-welcome-email',async()=>{
        const part = response.candidates?.[0]?.content?.parts?.[0]
        const introText = (part && 'text' in part ? part.text : null) || 'Thanks for joining Signalist. You now have the tools to track markets and make smarter moves'
        

        const {data : {email, name}} = event
        return await sendWelcomeEmail({
            email,
            name,
            intro: introText
        })
    
    })

    return{
        success: true,
        message: 'Welcome email sent successfull'
    }

    }

)

export const sendDailyNews = inngest.createFunction(
    {id: 'daily-news-summary'},
    [{event: 'app/send.daily.news'},  {cron: '0 12 * * *'}],
    async ({step})=>{
        const users = await step.run('get-all-user',getAllUserForNewEmail)

        if(!users || users.length == 0 ) return {success: false, message: "No user found for email"}
        
 
    }
)