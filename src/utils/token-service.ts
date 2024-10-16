// import { useNavigate } from "react-router-dom"
// import { signIn } from "../modules/auth/service"
// import {message} from "antd"
// import saveAccessToken from './token-service';

// const saveAccessToken = async (values: any)=> {
//     const navigate = useNavigate()

//     try {
//         const res = await signIn(values)
       
//         if (res.status === 201) {
//           let access_token = res?.data?.data?.tokens?.access_token
//           localStorage.setItem("access_token", access_token)  
//           message.success("Muvaffaqiyatli kirdingiz!");
//           navigate("/layout");
//         }
//       } catch (error) {
//         console.log(error, "Error");
//         message.error("Xatolik mavjud")
//       } 
// }

// export default saveAccessToken



export const saveAccessToken = (access_token: string)=> {
  localStorage.setItem("access_token",access_token )
}

export const getAccessToken = ()=> {
  localStorage.getItem("access_token")
}

export const removeAccessToken  = ()=> {
  localStorage.removeItem("access_token")
}

