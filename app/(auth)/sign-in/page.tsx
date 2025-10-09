'use client'
import FooterLink from '@/components/form/FooterLink'
import InputField from '@/components/form/InputField'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useForm } from 'react-hook-form'

const SignIn = () => {

  const {register, handleSubmit, formState: {errors,isSubmitting}} = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password:""
    },mode:'onBlur'
  })

  const onSubmit = async(data:SignInFormData)=>{
    try {
      console.log('data sign in',data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex flex-col justify-center xl:min-h-[90%]'>
      <h1 className='form-title'>Log In Your Account</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>

        <InputField 
          name='email' 
          label='Email'
          placeholder='Huypham@gmail.com'
          register={register}
          error={errors.email}
          validation={{required: "Email is required",
                    pattern:"^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$",
                    message:"Email adress is required"
                }} 
        />

        <InputField 
          name='password'
          label='Password'
          type='password'
          placeholder='Enter a strong password'
          register={register}
          error={errors.password}
          validation={{required:"Password is required",minLength: 8}}
        />

        <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
            {isSubmitting ? 'Signing In' : 'Sign In'}
        </Button>

        <FooterLink text='Not have an account' href='sign-up' linkText='Sign up'></FooterLink>

      </form>
    </div>
  )
}

export default SignIn

