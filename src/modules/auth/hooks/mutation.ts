import { useMutation } from "@tanstack/react-query";
import { signIn, signUp } from "../service";
import { SignIn, SignUp } from "../types";
import { message } from "antd";
import { saveAccessToken } from "../../../utils/token-service";
// import Notification from "../../../utils/notification";

export function useSignInMutation() {
    return useMutation({
        mutationFn: (data: SignIn)=> signIn(data),

        onMutate:()=> {
            console.log('mutate');
        },
 
        onSuccess:(res)=> {
            const {access_token} = res?.data?.data?.tokens
            saveAccessToken(access_token)
            window.location.href = "/layout"
            message.success("Success")
            
        },

        onError:(error)=> {
            console.log(error)
            message.error("Error")
        }   
    })
}

export function useSignUpMutation() {
    return useMutation({
        mutationFn: (data: SignUp) => signUp(data),
        
        onSuccess: ()=> {
            window.location.href = '/'
            message.success("Successfully signed up!");
        },
        onError: (error) => {
            console.log(error, 'Error');
            message.success("Error occurred during sign up");
            
            
        }
    })
}