import React, {FC} from 'react';
import logo from '../../img/logo.png';
const NavHome:FC = () =>{
    return (
        <div style={{width : '100vw', height : '8vh'  ,display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'center', backgroundColor : '#FFFFFF'}}>
            <nav style={{width : '100%', height : '100%',display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between'}}>
                <div style={{width: '20%', height : '90%', marginLeft : '5%', display : 'flex'}}> 
                    <img src={logo} alt="logo" style={{
                        width : '80px',
                        height : '80px',
                        borderRadius : '50%',
                        marginTop : '2px'
                    }}/>
                    <h1 style={{alignSelf : 'flex-start', marginLeft : '2%'}}> Apuestas online</h1>
                </div>
                
                <ul style={{width : '20%', height : '100%', listStyle : 'none', display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'space-around', marginRight : '5%' }}>
                    <li>
                        <a href="#"  style= {{color: 'GrayText',textDecoration : 'none', fontSize : '1.2vw'}}>Registro</a>
                    </li>
                    <li>
                        <a href="" style= {{color: 'GrayText', textDecoration : 'none', fontSize : '1.2vw'}}>Ingreso</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavHome;