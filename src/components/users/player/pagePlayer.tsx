import React, {FC} from 'react';
import NavPlayer from './navPlayer';
import MainPlayer from './mainPlayer';
import Footer from '../../home/footer';

const PagePlayer:FC = ()=>{
    return(
        <div>
            <NavPlayer/>
            <MainPlayer/>
            <Footer/>
        </div>
    )
}

export default PagePlayer;