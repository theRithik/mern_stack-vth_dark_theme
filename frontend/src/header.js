import React from "react";
import {Link} from 'react-router-dom'
import "./header.css"
const Header =()=>{

  const handleMove=()=>{
    document.getElementById("login").style.display="block"
   console.log('clicked')
  
  }
  const handleOut=()=>{
    document.getElementById("login").style.display="none"
  
  }

  const handleClick=()=>{
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
  document.getElementById('backImg').style.backgroundImage="url('https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/df7bbd111202195.5ffdfc0edba8f.gif')"
  var boxes= document.getElementsByClassName('card')
for(let i=0; i<boxes.length; i++){
  boxes[i].style.backgroundColor='grey'
  boxes[i].style.color='white'
}
// page2//////////////

  }
  else{
   document.getElementById('themeIcon1').innerText="dark_mode"
    sessionStorage.setItem('mode',"light_mode")
    document.getElementById('themeIcon1').style.color='white'
    document.getElementsByTagName('BODY')[0].style.backgroundColor='white'
    document.getElementById('footers').style.color='black'
    document.getElementById('backImg').style.backgroundImage="url('https://qph.cf2.quoracdn.net/main-qimg-f5a89b881a599e0b118a6801dcee02f0')"
    var boxes2= document.getElementsByClassName('card')
  for(let i=0; i<boxes2.length; i++){
    boxes2[i].style.backgroundColor='white'
    boxes2[i].style.color='black'
  }
  ////////page2////////
  }
}

      return(
          <>
          <nav className="navbar">
    
      <a  href="/" className="navbar-brand" onClick={handleClick}>Xomato</a>
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
  
          </>
    )
  }
export default Header