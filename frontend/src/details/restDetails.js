import React from "react";
import axios from "axios";
import { Component } from "react";
import './restDetails.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MenuDisplay from "./menuDisplay"

const url="http://localhost:5000/admin/deatils/"
const menuUrl="http://localhost:5000/admin/menu/"
class RestDetails extends Component {
    constructor(){
        super()
        this.state={
            restDeatils:'',
            menuList:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1,
            userMenu:''
        }
    }

    placeOrder=()=>{
        if(this.state.userMenu===''){
            alert('please select an item')
        }
        else{
        sessionStorage.setItem('menu', JSON.stringify(this.state.userMenu))
        this.props.history.push(`/placeOrder/${this.state.restDeatils.restaurant_name}`)
        }
    }

    orders=(id)=>{
        this.setState({userMenu:id})
    }
// navbar start//////////////////////////////////////////////
 handleMove=()=>{
        document.getElementById("login").style.display="block"
       console.log('clicked')
      
      }
     handleOut=()=>{
        document.getElementById("login").style.display="none"
      
      }
    
 handleClick=()=>{
        document.getElementsByTagName('BODY')[0].classList.remove('bodyColor')
      }
       handleColor=()=>{
      document.getElementsByTagName('BODY')[0].classList.add('bodyColor')
    }
    handleTheme=()=>{
        const data1= document.getElementById('themeIcon1').innerText
        console.log(data1)
       
        if(data1==="dark_mode"){
         document.getElementById('themeIcon1').innerText="light_mode"
         document.getElementById('themeIcon1').style.color='yellow'
          sessionStorage.setItem("mode","dark_mode")
        document.getElementsByTagName('BODY')[0].style.backgroundColor='black'
        document.getElementById('footers').style.color='white'
        document.getElementById('restBack').style.backgroundImage="url('https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/df7bbd111202195.5ffdfc0edba8f.gif')"
      // page2//////////////
      
        }
        else{
         document.getElementById('themeIcon1').innerText="dark_mode"
          sessionStorage.setItem('mode',"light_mode")
          document.getElementById('themeIcon1').style.color='white'
          document.getElementsByTagName('BODY')[0].style.backgroundColor='white'
          document.getElementById('footers').style.color='black'
          document.getElementById('restBack').style.backgroundImage="url('https://qph.cf2.quoracdn.net/main-qimg-f5a89b881a599e0b118a6801dcee02f0')"
        }
      }
      ////////////nav End
    render(){
        let details= this.state.restDeatils
        return(
            <>
            {/* nav Start */}
               <nav className="navbar">
    
    <a  href="/" className="navbar-brand" onClick={this.handleClick}>Xomato</a>
    <div className="d-flex">
    <span className="material-symbols-outlined me-5" id='themeIcon1' onClick={this.handleTheme}>
dark_mode
</span>
{/* <span class='material-symbols-outlined me-5' onClick={handleTheme2} style={{display:'none'}} id='themeIcon2'>light_mode</span> */}
    <form  onMouseEnter={this.handleMove} onMouseLeave={this.handleOut} style={{marginRight:'6px'}}>
  
    <span><svg xmlns="http://www.w3.org/2000/svg" className="me-5"  height="1.3em" width="1.3em" viewBox="0 0 448 512" style={{fill:'white'}}><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
    </span>
    <div className="loginTab" id='login' onMouseEnter={this.handleMove} onMouseLeave={this.handleOut} style={{zIndex:'1'}}  >
  <span className="hoverTab"></span>
  <h5 style={{textAlign:'center',color:'black'}}>Hello!</h5>
<Link to='/login'> <h6 onClick={this.handleColor} className="loginTab1"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg> Login</h6></Link>
<Link to='/Register'>    <h6 onClick={this.handleColor} className="loginTab1"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"/></svg> Register</h6></Link>
    </div>
    {/* <Link to='/login' className="btn btn-warning me-3">Login</Link>
      <Link to='/register' className="btn btn-light me-3" >Register</Link> */}
    </form>
    </div>
</nav>
{/* nav End */}


{/* body start */}
            <div className="container" id="restBack" style={{paddingTop:'50px'}}>
                <div className="row">
                    <div className="col-md-6" style={{display:'inline-block',marginTop:'10px'}}>
                        <img src={details.restaurant_thumb} alt={details.restaurant_name} style={{width:'500px',height:'400px', borderRadius:'20px'}} />
                    </div>
                    <div className="col-md-6">
                        <h3 style={{marginBottom:'5px'}}>{details.restaurant_name}</h3>
                        <span className="review">231 Customers Rating Average</span>
                        <h6 className="price">Old price <del style={{color:'red'}}>Rs 800</del></h6>
                        <h5>Offer price <span className="offer">Rs {details.cost}</span></h5> 
                        <h6>Best taste of Fresh Chai with Samosa At your Door and DineIn </h6>
                        <img src='./sanitize.jpg' alt="sanitized" className="sanitize"/>
                        <nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist" style={{marginTop:'10px'}}>
    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">About</button>
    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Contact</button>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent" style={{height:'200px'}}>
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">  <h2>{details.restaurant_name}</h2>
                            <p>{details.restaurant_name}  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                           </p>
</div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0"> 
                           <h5 style={{paddingTop:'30px'}}> Address: {details.address}</h5>
                            <h6 >Contact: {details.contact_number?details.contact_number:9944556643}</h6></div>
                            
 </div>
 <button className="btn btn-danger"><Link to={`/listing/${this.state.mealId}`}>Back</Link></button>
 <button className="btn btn-success" onClick={this.placeOrder}>Procced</button>
                    </div>
                </div>
                <hr/>
                <div className="col-md-12">
                    <MenuDisplay restMenu={this.state.menuList}
                    finalOrder={(data)=>{this.orders(data)}}
                  />

                </div>
            </div>
            </>
        )
    }
    // async Await using for api calling
   async componentDidMount(){
        const id= this.props.location.search.split('=')[1]
      const response = await axios(`${url}${id}`)
      const menuResponse = await axios(`${menuUrl}${id}`)
     this.setState({restDeatils:response.data[0], menuList:menuResponse.data})

        
    }
}
export default RestDetails