import React from 'react';
import "./Menu.css";
const Menu = () => {

    const activate = (event) =>{
        const list = document.querySelectorAll('.list');
        list.forEach((item)=>{
            if(event.target.innerText === item.innerText){
                item.classList.add('activate')
            }else{
                item.classList.remove('activate');
            }
        });
    }
    return (
        <div className='body-menu'>
            <div className='navigation '>
                    <div className='perfil list'>
                        <span className='icon'>
                            <img 
                                className='img-perfil '
                            />
                        </span>
                        <span className='title'>Ing.Gerardo Rodriguez</span>
                    </div>
               
                <ul >
                <li onClick={activate} className='list activate'>
                        <a href='#'>
                            <span className='icon'><ion-icon name="add-circle"></ion-icon></span>
                            <span className='title'>Registrar paciente</span>
                        </a>
                    </li>
                    <li onClick={activate} className='list'>
                        <a href='#'>
                            <span className='icon'><ion-icon name="person"></ion-icon></span>
                            <span className='title'>Pacientes</span>
                        </a>
                    </li>
                    <li onClick={activate} className='list'>
                        <a href='#'>
                            <span className='icon'><ion-icon name="calendar"></ion-icon></span>
                            <span className='title'>Citas</span>
                        </a>
                    </li>
                    <li onClick={activate} className='list'>
                        <a href='#'>
                            <span className='icon'><ion-icon name="hammer"></ion-icon></span>
                            <span className='title'>Material</span>
                        </a>
                    </li>
                    <li onClick={activate} className='list'>
                        <a href='#'>
                            <span className='icon'><ion-icon name="log-out"></ion-icon></span>
                            <span className='title'>Cerrar sesion</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;