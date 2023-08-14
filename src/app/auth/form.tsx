"use client"

import { Auth } from "@/services/auth.service"
import { useRouter } from "next/navigation"
import { useUserStore } from "@/context/user"
import { NextPage } from "next"
import { Button, Form, Input, notification } from "antd"
import styles from "./auth.module.css"
import { setCookie } from "nookies"

const FormLogin: NextPage = () => {
    const router = useRouter()
    const { setAuth, auth } = useUserStore()

    if (auth) {
        router.replace("/dashboard")
    }

    const onSubmit = async (values: any) => {
        try {
            const { data } = await Auth(values.name, values.password)
            console.log(data.token)

            setCookie(null, "_token", data.token, {
                path: "/",
            })

            setAuth(true)
            router.replace("/dashboard")
            notification.success({
                message: "Успешно",
                description: "Вход в систему выполнен",
                duration: 2,
            })
        } catch (error) {
            notification.error({
                message: "Ошибка",
                description: "Введены неверные данные",
                duration: 2,
            })
        }
    }

    return (
        <div className={styles.authForm}>
            <h1 className={styles.h1}>Авторизация</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                onFinish={onSubmit}
            >
                <Form.Item
                    label="Логин"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Укажите логин",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Укажите пароль",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default FormLogin
