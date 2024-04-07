import { useState } from 'react'
import apiInstance from '../../utils/axios'
import { useNavigate, Link } from 'react-router-dom'

function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            await apiInstance.get(`user/password-reset/${email}/`).then((res) => {
                alert("An Email Has been Sent to you.")
                setIsLoading(false)
            })
        } catch (error) {
            alert("Email Does Not Exists")
            setIsLoading(false)
        }
    }

    return (
        <div>
            <section>
                <main className="" style={{ marginBottom: 100, marginTop: 50 }}>
                    <div className="container">
                        {/* Section: Login form */}
                        <section className="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-xl-5 col-md-8">
                                    <div className="card rounded-5">
                                        <div className="card-body p-4">
                                            <h3 className="text-center">Login</h3>
                                            <br />

                                            <div className="tab-content">
                                                <div
                                                    className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                                    <div>
                                                        {/* Email input */}
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="Full Name">
                                                                Email 
                                                            </label>
                                                            <input type="text" id="username" name="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                                                        </div>

                                                        {isLoading === true
                                                            ? <button disabled type='button' className='btn btn-primary btn-rounded w-100 mb-4'>
                                                                Processing...
                                                            </button>

                                                            : <button onClick={handleSubmit} type='button' className='btn btn-primary btn-rounded w-100 mb-4'>
                                                                Send Email <i className='fas fa-paper-plane'></i>
                                                            </button>
                                                        }

                                                        <div className="text-center">
                                                            <p className='mt-4'>
                                                                Want to sign in? <Link to="/login">Login</Link>
                                                            </p>
                                                            <p className='mt-0'>
                                                                <Link to="/forgot-password/" className='text-danger'>Forgot Password?</Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default ForgotPassword