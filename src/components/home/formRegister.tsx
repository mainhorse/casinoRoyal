import React, {FC} from "react";
import logo from '../../img/logo.png';

const FormRegister:FC = () =>{
  return (
    <div style={{
      width : '25vw',
      height : '70vh',
      backgroundColor : '#FFFFFFAA',
      borderRadius : '12px',
    }}>
      <form  style={{
        width :  '100%',
        height : '100%',
        display: 'flex',
        borderRadius : '12px',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'space-around'
      }} className="formHome">
          <div>
            <img src={logo} alt="logo empresa" style={{
              width : '50px',
              borderRadius : '50%'
            }}/>
          </div>
          <label>Nombre</label>
          <input name="name" type="text" className="inputHome" />
          <label>Email</label>
          <input name="email" type="text" className="inputHome"/>
          <label>Password</label>
          <input name="password" type="password" className="inputHome"/>
          <button className="btbSubmit"> Registrar </button>
      </form>
      
    </div>
  )
}

export default FormRegister;

