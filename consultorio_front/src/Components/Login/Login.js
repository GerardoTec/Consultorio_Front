import React from 'react';
import './login.css';
import { Navigate } from "react-router-dom";

const Login = () => {

    const toDasboard = () =>{
        <Navigate to={"login/menu-main"} />
    }

    return (
        <div className='principal'>
            <div className='container'>
                <div className='login'>
                <span className='borderLine'></span>
                    <form>
                        <h1 className='font-h1'>VIVADENT</h1>
                        <div className='inputLogin'>
                            <input type='text'
                            required="required"
                            />
                            <span>Correo</span>
                            <i></i>
                        </div>
                        <div className='inputLogin'>
                            <input type='password'
                             required="required"
 
                            />
                            <span>Contraseña</span>
                            <i></i>
                        </div>
                        <div className='link'>
                            <a href='#'>Olvide la contraseña</a>
                        </div>
                        <input type='submit' value='Iniciar sesion' onClick={toDasboard()}/>
                    </form>

                </div>
            </div>

               <img 
                className='imagen'
               />
            
        </div>
    );
};

export default Login;