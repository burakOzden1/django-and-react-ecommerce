import { useState } from 'react'
import apiInstance from '../../utils/axios'

function ForgotPassword() {
    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        try {
            apiInstance.get(`user/password-reset/${email}/`).then((res) => {
                console.log(res.data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Şifremi Unuttum</h1>
            <input 
                onChange={(e) => setEmail(e.target.value)} 
                type='text' 
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