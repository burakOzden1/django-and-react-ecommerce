import {useEffect} from 'react'
import { logout } from '../../utils/auth'
import { Link } from 'react-router-dom'

function Logout() {
    useEffect(() => {
        logout()
    }, [])
    
  return (
    <div>
        <h1>Çıkış Yap</h1>
        <Link to={'/register'}>Kayıt Ol</Link>
        <br/>
        <br/>
        <Link to={'/login'}>Giriş Yap</Link>
    </div>
  )
}

export default Logout