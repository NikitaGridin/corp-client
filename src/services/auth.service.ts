import instance from "@/axios/axios.client"
import { destroyCookie } from "nookies"

export const Auth = async (name: string, password: string) => {
    const data = await instance.post("auth/login", {
        username: name,
        password: password,
    })

    return data
}

export const checkAuth = async () => {
    const data = await instance.get("user/me")
    return data
}

export const getMe = async () => {
    const data = await instance.get("user/me")
    return data
}

export const logout = async () => {
    destroyCookie(null, "_token", { path: "/" })
}
