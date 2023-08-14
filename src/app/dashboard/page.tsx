import { getMe } from "@/services/auth.service"
import axios from "axios"
import { NextPage } from "next"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const checkAuth = async () => {
    const cookieStore = cookies()
    const _token = cookieStore.get("_token")?.value

    if (!_token) {
        redirect("/auth")
    }
    axios.defaults.headers.Authorization = `Bearer ${_token}`

    try {
        await getMe()
        return true
    } catch (error) {
        return false
    }
}

const Dashboard: NextPage = async () => {
    const isAuth = await checkAuth() // Wait for the checkAuth() result

    if (!isAuth) {
        redirect("/auth") // Redirect if authenticated
    }
    return (
        <div>
            Dashboard
            <button className="py-4 px-8 bg-red-600 rounded-lg font-bold text-white">Выйти</button>
        </div>
    )
}

export default Dashboard
