import React , {FC} from 'react';
import BackgroundHome from '../../../img/backgroundHome.png';


const MainPlayer:FC = ()=>{
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
               
            </main>
        </div>
    )
}

export default MainPlayer;