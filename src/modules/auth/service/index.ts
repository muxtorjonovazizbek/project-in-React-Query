import axiosInstance from "@api";
import { SignIn, SignUp } from "../types";


// ========================= SignIn ==============================

export async function signIn (data: SignIn) {
    return await axiosInstance.post("/auth/sign-in", data)
}


// ========================= SignIn ==============================

export async function signUp (data: SignUp) {
    return await axiosInstance.post("/auth/admin/sign-up", data)
}