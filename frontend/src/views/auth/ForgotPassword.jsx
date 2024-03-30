import { useState } from 'react'
import apiInstance from '../../utils/axios'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            await apiInstance.get(`user/password-reset/${email}/`).then((res) => {
                alert("Mail adresinize bir e-posta gönderildi.")
                navigate("/create-new-password")
            })
        } catch (error) {
            alert("Email does not exists")
        }
    }

    return (
        <div>
            <h1>Şifremi Unuttum</h1>
            <input 
                onChange={(e) => setEmail(e.target.value)} 
                type='email' 
                placeholder='Mail adresinizi giriniz...' 
                name='' 
                id='' 
            />
            <br />
            <br />
            <button onClick={handleSubmit}>Şifremi Yenile</button>
        </div>
    )
}

export default ForgotPassword