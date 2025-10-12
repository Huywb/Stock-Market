'use client'
import CountrySelect from '@/components/form/CountrySelect'
import FooterLink from '@/components/form/FooterLink'
import InputField from '@/components/form/InputField'
import SelectField from '@/components/form/SelectField'
import { Button } from '@/components/ui/button'
import { signUpWithEmail } from '@/lib/actions/auth.actions'
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/contant'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const SignUp = () => {
    const router = useRouter()
    const {register,handleSubmit,control,
        formState: {errors,isSubmitting}
    } = useForm<SignUpFormData>({
        defaultValues:{
            fullName: "",
            email: "",
            password: "",
            country: "VN",
            investmentGoals: "Growth",
            riskTolerance: "Medium",
            preferredIndustry: "Technology"
        },
        mode: 'onBlur'
    })  

    const onSubmit =async (data: SignUpFormData)=>{
        try {
            const result =await signUpWithEmail(data)
            console.log(result)
            if(!result.success){
                toast.error("Sign up faild")
            }else{
            router.push('/')
            }
        } catch (error) {
            console.error(0)
            toast.error('Sign up faild',{
                description:  error instanceof Error ? error.message : 'Failed to create an account'
            })
        }
    }

    return (
    <>
        <h1 className='form-title'>Sign Up & Personalize</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}     className='space-y-5'>
            {/**Input */}

            <InputField 
                name='fullName' 
                label='Full Name' 
                placeholder="Huy Pham"
                register ={register}
                error={errors.fullName}
                validation={{required: "Full name is required",minLength: 2}} 
            />

            <InputField 
                name='email' 
                label='Email' 
                placeholder="Huypham@gmail.com"
                register ={register}
                error={errors.email}
                validation={{required: "Email is required",
                    pattern:"^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$",
                    message:"Email adress is required"
                }} 
            />

            <InputField 
                name='password' 
                label='Password' 
                placeholder="Enter a strong password"
                type='password'
                register ={register}
                error={errors.password}
                validation={{required: "Password is required",minLength: 8}} 
            />

            <CountrySelect 
                name='Country'
                label='Country'
                control={control}
                error={errors.country}
                required
            />
           
           <SelectField 
                name = 'investmentGoals'
                label = 'Investment Goals'
                placeholder = 'Select your investment goal'
                options = {INVESTMENT_GOALS}
                control = {control}
                error = {errors.investmentGoals}
                required                
            />

            <SelectField 
                name = 'riskTolerance'
                label = 'Risk Tolerance'
                placeholder = 'Select your risk level'
                options = {RISK_TOLERANCE_OPTIONS}
                control = {control}
                error = {errors.riskTolerance}
                required                
            />

            <SelectField 
                name = 'preferredIndustry'
                label = 'Prefered Industry'
                placeholder = 'Select your preferred industry'
                options = {PREFERRED_INDUSTRIES}
                control = {control}
                error = {errors.investmentGoals}
                required                
            />

            <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                {isSubmitting ? 'Creating Account' : 'Star Your Investing Journey'}
            </Button>

            <FooterLink text='Already have an account' linkText='Sign in' href='/sign-in'></FooterLink>
        </form>
    </>
  )
}

export default SignUp
