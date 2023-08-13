import instance from "@/axios/axios.client";
import { cookies } from 'next/headers';

export const getAllNews = async() => {
    const cookieStore = cookies();
    const myCookie = cookieStore.get('connect.sid')?.value;
    const config = {
        headers: {
          Cookie: `connect.sid=${myCookie}`,
        },
      };
    const data = await instance.get('news', config );
    return data;   
}