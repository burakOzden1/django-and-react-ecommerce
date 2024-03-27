import React, { useState, useEffect } from 'react'
import { register } from '../../utils/auth'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../../store/auth'

function Register() {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

    useEffect(() => {
        if (isLoggedIn()) {
            navigate("/")
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const { error } = await register(fullname, email, mobile, password, password2)
        if (error) {
            alert(JSON.stringify(error))
        } else {
            navigate("/")
        }
    }

    return (
        <>
        <div>Kayıt Ol</div>
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                placeholder='İsminiz'
                name=''
                id=""
                onChange={(e) => setFullname(e.target.value)}
            />
            <br/>
            <br/>
            <input
                type="email"
                placeholder='Mail Adresiniz'
                name=''
                id=""
                onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <br/>
            <input
                type="number"
                placeholder='Telefon'
                name=''
                id=""
                onChange={(e) => setMobile(e.target.value)}
            />
            <br/>
            <br/>
            <input
                type="password"
                placeholder='Şifre'
                name=''
                id=""
                onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <br/>
            <input
                type="password"
                placeholder='Şifre (Onay)'
                name=''
                id=""
                onChange={(e) => setPassword2(e.target.value)}
            />
            <br/>
            <br/>
            <button type='submit'>Kayıt Ol</button>
        </form>
        </>
    )
}

export default Register