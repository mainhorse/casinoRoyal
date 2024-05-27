import React, {FC} from 'react';
import logo from '../../../img/logo.png';
import casinoMachine from '../../../img/casinoMachine.png';
import user from '../../../img/user.png';
import casino from '../../../img/casino.png';
const NavPlayer:FC = ()=>{
    return(
        <div>
            <nav>
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
                <div style={{ marginRight : '5%', alignSelf : 'center'}}>
                    <span>
                        <button style={{cursor :'pointer', width : '5vw', height : '100%', background : 'transparent', border : 'none'}}><img src={casinoMachine} alt="icon user" style= {{
                            width : '40px',
                            height :'40px',
                            border : 'none',
                            marginRight : '5vw',
                            background : 'none',
                        }}/></button>
                    </span>
                    <ul style={{position : 'fixed', 
                                padding : '0', 
                                margin : '5vh 0', 
                                marginRight : '-15px',
                                width : '15vw',
                                height : '30vh',
                                display : 'flex',
                                flexDirection : 'column',
                                backgroundColor : '#FFFFFF'}}>
                        <li className='liUser'>
                            <img src={user}  alt="datos usuario" style={{ width : '20px', height : '20px'}}/><a href="#" style ={{textDecoration : 'none', color : 'black'}}> Usuario </a>
                        </li>
                        <li className='liUser'>
                            <img src={casino}  alt="apuestas" style={{ width : '20px', height : '20px'}} /><a href="#" style ={{textDecoration : 'none', color : 'black'}}> Apuestas </a>
                        </li>
                        <li className='liUser'>
                            <img src=""  alt="apuestas"  style={{ width : '20px', height : '20px'}}/><a href="#" style ={{textDecoration : 'none', color : 'black'}}> Historial </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
            </nav>
        </div>
    )
}

export default NavPlayer;