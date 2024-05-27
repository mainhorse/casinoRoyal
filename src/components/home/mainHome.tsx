import React , {FC} from 'react';
import FormRegister from './formRegister';
import FormLogin from './formLogin';
import BackgroundHome from '../../img/backgroundHome.png';
import { url } from 'inspector';
const MainHome:FC = ()=>{
    return(
        <div style={{
            width : '100vw',
            height : '86vh',
            backgroundImage : `url(${BackgroundHome})`,
            backgroundRepeat : 'no-repeat',
            backgroundAttachment : 'fixed',
            backgroundSize : 'cover',
            display : 'flex',
            flexDirection : 'column',
            alignItems : 'center',
            justifyContent : 'center'
        }}>
            <main style={{
                width : '70%',
                height : '90%', 
                backgroundColor : 'transparent',
                display : 'flex',
                flexDirection : 'row',
                alignItems : 'center',
                justifyContent : 'space-evenly'
                }}>
                <FormRegister/>
                <FormLogin/>
            </main>
        </div>
    )
}

export default MainHome;