import { useSignInMutation } from "../hooks/mutation"


const SignIn = ()=> {
  const {mutate} = useSignInMutation()
  const save = ()=> {
    const payload = {
      phone_number: "565656",
      password: "565656"
    }
    mutate(payload)
  } 
  return (
    <>
      <h1>Sign-In</h1>
      <button onClick={save}>Save</button>
    </>

  )
}

export default SignIn