import { NextPage } from "next"
import FormLogin from "./form"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { getMe } from "@/services/auth.service"
import axios from "axios"

export const checkAuth = async () => {
    const cookieStore = cookies()
    const _token = cookieStore.get("_token")?.value

    axios.defaults.headers.Authorization = `Bearer ${_token}`

    try {
        await getMe() // Make sure to await the asynchronous getMe() function
        return true // User is authenticated
    } catch (error) {
        return false // User is not authenticated
    }
}

const Login: NextPage = async () => {
    const isAuth = await checkAuth() // Wait for the checkAuth() result

    if (isAuth) {
        redirect("/dashboard") // Redirect if authenticated
    }

    return (
        <>
            <FormLogin />
        </>
    )
}

export default Login
