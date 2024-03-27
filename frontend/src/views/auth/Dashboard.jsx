import React from 'react'
import { useAuthStore } from '../../store/auth'
import { Link } from 'react-router-dom'

function Dashboard() {
    const [isLoggedIn, setIsLoggedIn] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user
    ])

    return (
        <>
            {isLoggedIn() 
                ? <div>
                    <h1>Panel</h1>
                    <Link to={`/logout`}>Çıkış Yap</Link>
                </div>
                : <div>
                    <h1>Ana Sayfa</h1>
                    <Link to={'/register'}>Kayıt Ol</Link>
                    <Link to={'/login'}>Giriş Yap</Link>
                    <Link to={`/logout`}>Çıkış Yap</Link>
                </div>
            }
        </>
    )
}

export default Dashboard