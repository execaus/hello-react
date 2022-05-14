import React, {useRef} from 'react';
import axios, {AxiosResponse} from "axios";

interface AuthResponse {
    session: string
    account: {
        name: string
        email: string
    }
}

const AuthBlock = () => {
    const refLogin: React.Ref<any> = useRef()
    const refPassword: React.Ref<any> = useRef()

    const authorize = () => {
        const login = (refLogin.current as HTMLInputElement).value
        const password = refPassword.current.value

        axios({
            withCredentials: true
        })

        axios.post("http://localhost:8080/auth/sign-in", {
            identifier: login,
            password: password
        })
            .then((response: AxiosResponse<AuthResponse>) => {
                alert(response.data.session)
            })
    }

    return (
        <div>
            <input placeholder="login" type="text" ref={refLogin}/>
            <input placeholder="password" type="text" ref={refPassword}/>
            <button onClick={authorize}>Войти</button>
        </div>
    );
};

export default AuthBlock;