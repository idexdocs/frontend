import AddButton from "@/components/AddButton";
import React, { useState } from "react";
import Image from "next/image";
import { login } from "@/pages/api/http-service/user";
import { useRouter } from 'next/router';

const center = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '10px',
};

const button = {
    margin:'0 auto',
    display:'block',
}

export default function Login() {
    const [loginImage, setLoginImage] = useState("/images/logo-fort-house.png");
    const { push } = useRouter();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLoginClick = async () => {
        const request = {
            ...formData
        };
        try {
            const loginData = await login(request);
            if (loginData) {
                push('/secure/athletes');
                console.log(loginData)
            }
        } catch (error) {
            console.error('Error creating athlete:', error);
        }
    };

    return (
        <>
            <div style={center}>
                <Image
                    src={loginImage}
                    width={210}
                    height={140}
                    alt="company logo"
                />
                <br/>
                <br/>
                <br/>
                <label className="ms-3" style={{ color: 'white', fontSize: '20px' }}>Usuário</label>
                <input type="text" className="form-control input-create bg-dark" placeholder="Digite o seu usuário" name="email" value={formData.email} onChange={handleInputChange} style={{ height: '45px' }} />
                <br/>
                <label className="ms-3" style={{ color: 'white', fontSize: '20px' }}>Senha</label>
                <input type="password" className="form-control input-create bg-dark" placeholder="Digite a sua senha" name="password" value={formData.password} onChange={handleInputChange} style={{ height: '45px' }} />
                <br/>
                <button type="button" className="btn btn-success" style={button} onClick={handleLoginClick}>Login</button>
            </div>
        </>
    );
}