import React from "react";
import './loginStyle.css'
import { Link } from "react-router-dom/cjs/react-router-dom";


 const url="http://localhost:5000/admin/Register"
const Register =()=>{
    const handleClick=()=>{
const name=document.getElementById('first').value
const email=document.getElementById('secound').value
const password=document.getElementById('third').value
        fetch(url,{
            method:'POST',
             headers:{
                "accept":"application/json",
                "Content-Type":"application/json"
             },
             body:JSON.stringify({
                Name:name,
                Email:email,
                Password:password
             })
            })
             .then((res)=>res.json())
             .then((value)=>{
                console.log(JSON.stringify(value))
                alert(value.token)
                    if(value.status!==200){
               window.location.href='/Register'
               }
               else{
                window.location.href='/login'
                } 
            })
    }
    
  const handleMove=()=>{
    document.getElementById("login").style.display="block"
   console.log('clicked')
  
  }
  const handleOut=()=>{
    document.getElementById("login").style.display="none"
  
  }

  const handleClick1=()=>{
    document.getElementsByTagName('BODY')[0].classList.remove('bodyColor')
  }
const handleColor=()=>{
  document.getElementsByTagName('BODY')[0].classList.add('bodyColor')
}

const handleTheme=()=>{
  const data1= document.getElementById('themeIcon1').innerText
  console.log(data1)
 
  if(data1==="dark_mode"){
   document.getElementById('themeIcon1').innerText="light_mode"
   document.getElementById('themeIcon1').style.color='yellow'
    sessionStorage.setItem("mode","dark_mode")
  document.getElementsByTagName('BODY')[0].style.backgroundColor='black'
  document.getElementById('footers').style.color='white'

  }
  else{
   document.getElementById('themeIcon1').innerText="dark_mode"
    sessionStorage.setItem('mode',"light_mode")
    document.getElementById('themeIcon1').style.color='white'
    document.getElementsByTagName('BODY')[0].style.backgroundColor='white'
    document.getElementById('footers').style.color='black'
  }
}
return(
    <>
      <nav className="navbar">
    
    <a  href="/" className="navbar-brand" onClick={handleClick1}>Xomato</a>
    <div className="d-flex">
    <span className="material-symbols-outlined me-5" id='themeIcon1' onClick={handleTheme}>
dark_mode
</span>
{/* <span class='material-symbols-outlined me-5' onClick={handleTheme2} style={{display:'none'}} id='themeIcon2'>light_mode</span> */}
    <form  onMouseEnter={handleMove} onMouseLeave={handleOut} style={{marginRight:'6px'}}>
  
    <span><svg xmlns="http://www.w3.org/2000/svg" className="me-5"  height="1.3em" width="1.3em" viewBox="0 0 448 512" style={{fill:'white'}}><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
    </span>
    <div className="loginTab" id='login' onMouseEnter={handleMove} onMouseLeave={handleOut} style={{zIndex:'1'}}  >
  <span className="hoverTab"></span>
  <h5 style={{textAlign:'center',color:'black'}}>Hello!</h5>
<Link to='/login'> <h6 onClick={handleColor} className="loginTab1"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg> Login</h6></Link>
<Link to='/Register'>    <h6 onClick={handleColor} className="loginTab1"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"/></svg> Register</h6></Link>
    </div>
    {/* <Link to='/login' className="btn btn-warning me-3">Login</Link>
      <Link to='/register' className="btn btn-light me-3" >Register</Link> */}
    </form>
    </div>
</nav>
         <div className="container1">
    <div className="Login-border">
    <h3 style={{textAlign:'center', color:'white', position:'relative',top:'10%'}}> Register</h3>
        <div className="login" style={{marginTop:'90px'}}>
        <div style={{padding:"20px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" id="person" viewBox="0 0 448 512" style={{fill:'#6A679E'}}><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
        <input type="text" id='first' placeholder="Name" name='Name' className="login_input" required/> <br/><br/>
        <svg xmlns="http://www.w3.org/2000/svg" id="person" height="1em" viewBox="0 0 512 512" style={{fill:'#6A679E'}}><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
        <input type="email" id='secound' placeholder="UserName/Email" name='Email' style={{marginLeft:'0'}} className="login_input" required/>
       <br/><br/>
       <svg xmlns="http://www.w3.org/2000/svg" id="person" height="1em" viewBox="0 0 448 512" style={{fill:'#6A679E'}}><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
        <input type='password' id='third' placeholder="Password" className="login_input" name="Password" style={{marginBottom:'20px'}} required/>
        </div>
        </div>
   <button className="login-submit" onClick={handleClick}><span>Register Now</span></button>
    <div className="login-background">
        <span className="login-background1"></span>
    </div>
    </div>
    </div>
        </>
    )
}
export default Register