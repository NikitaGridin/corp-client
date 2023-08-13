import instance from "@/axios/axios.client"

export const Auth = async(name: string, password:string) => {
    const data = await instance.post('user/login', {
        username:name,
        password:password
    });

    return data;   
}

export const checkAuth = async() => {
        const data = await instance.get('user/login-check');
        return data;   
}

export const logout = async() => {
        const data = await instance.get('user/logout');
        return data;   
}