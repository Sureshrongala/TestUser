import React from 'react'


const Login =()=>{
    return(
        <div>
            <form className='form-container'>
                <input type="text" name="name" className='form-control' placeholder='Enter Username'/>
                <input type='password' name='password' className='form-control' placeholder='Enter Password'/>
                <button>LogIn</button>
            </form>
        </div>
    )
}
export default Login