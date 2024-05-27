import React, {FC} from 'react';
import NavHome from './navHome';
import MainHome from './mainHome';
import Footer from './footer';

const Home:FC = () =>{
    return (
        <div>
            <NavHome/>
            <MainHome/>
            <Footer/>
        </div>
    )
}
export default Home;