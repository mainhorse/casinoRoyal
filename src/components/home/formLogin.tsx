import React, {FC, useState} from "react";
import logo from '../../img/logo.png';

const FormLogin:FC = () =>{
  const user = {
    email : 'user@gmail.com',
    password : 'player1'
  }
  
  const [email, setEmail] = useState<string>('');
  const [ password , setPassword] = useState<string>('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(event.target.value);
  }

  const handPasswordChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(event.target.value);
  }

  const validateUser = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    if(email === user.email && password === user.password){
     
    }else{
      alert('datos invalidos')
    }
  }
   
  

  return (
    <div style={{
      width : '25vw',
      height : '70vh',
      backgroundColor : '#FFFFFF99',
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
      }} className="formHome" onSubmit={validateUser}>
           <div>
            <img src={logo} alt="logo empresa" style={{
              width : '50px',
              borderRadius : '50%'
            }}/>
          </div>
          <label>Email</label>
          <input name="email" type="text"  value={email} onChange={handleEmailChange} className="inputHome"/>
          <label>Password</label>
          <input name="password" type="password" value={password} onChange={handPasswordChange} className="inputHome"/>
          <button name="facebook" className="btbSubmit" style={{backgroundColor : ' #3b5998 '}}> Facebook </button>
          <button name ="Google"  className="btbSubmit" style={{backgroundColor : '#dd4b39'}}>Google</button>
          <button type="submit" className="btbSubmit"> Ingresar </button>
      </form>
    </div>
  )
}



export default FormLogin;