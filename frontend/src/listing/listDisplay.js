import React from "react";
import { Component } from "react";
import axios from 'axios'
import './ListDisplay.css'
import ListMenu from './listMenu'
import { Link } from "react-router-dom/cjs/react-router-dom";

const url="http://localhost:5000/admin/meals?mealtype_id="
const rurl="http://localhost:5000/admin/filtering"
class ListDisplay extends Component{
    constructor(props){
        super(props)
        this.state={
            restaurantList:'',
            restData:''
          
        }
    }

    handleChange=(e)=>{
        if(e.target.checked){
    const data2= e.target.value.split('-')[1]
    const data1= e.target.value.split('-')[0]
 const output=this.state.restaurantList.filter((value)=>{
    return value.cost>=data1 && value.cost<=data2
})
this.setState({restData:output})
}
else{
    this.setState({restData:this.state.restaurantList})
}
    }

handleClick=(e)=>{
const data = e.target.value
    
    fetch(rurl,{
            method:'POST',
            headers:{
                "accept":"application/json",
                "Content-Type":"application/json"
             },
             body:JSON.stringify({
                id:data
             })
        })
        .then((res)=>res.json())
        .then((result)=>{
            this.setState({restaurantList:result})
        })
    
    }

    // navbar start//////////////////////////////////////////////
 handleMove=()=>{
    document.getElementById("login").style.display="block"
   console.log('clicked')
  
  }
 handleOut=()=>{
    document.getElementById("login").style.display="none"
  
  }

handleClick1=()=>{
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
    document.getElementById('filters').style.color='white'
    var boxes= document.getElementsByClassName('card')
    for(let i=0; i<boxes.length; i++){
        boxes[i].classList.add('cardDesign')
    }
  // page2//////////////
  
    }
    else{
     document.getElementById('themeIcon1').innerText="dark_mode"
      sessionStorage.setItem('mode',"light_mode")
      document.getElementById('themeIcon1').style.color='white'
      document.getElementsByTagName('BODY')[0].style.backgroundColor='white'
      document.getElementById('footers').style.color='black'
      document.getElementById('filters').style.color='black'
      var boxes2= document.getElementsByClassName('card')
  for(let i=0; i<boxes2.length; i++){
  
  }
    }
  }
  ////////////nav End

    render(){
        return(
            <>
               {/* nav Start */}
               <nav className="navbar">
    
    <a  href="/" className="navbar-brand" onClick={this.handleClick1}>Xomato</a>
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
            <div className="conatiner" style={{marginTop:'50px'}}>
                <div className="row">
                    <div className="col-md-3" style={{display:'inline-block',}}>
                        <div className="filter" id="filters">
                            <h4 style={{textAlign:"center",marginTop:'5px',marginBottom:'15px'}}>Filter</h4>
                            <form>
                                <h6 style={{textAlign:'center'}}>Based on Cost</h6>
                             <div className="form-check form-switch">
                                <div className="cost-filter">
                                <input className="form-check-input" type="radio" name="check1" value="0-5000" onClick={this.handleChange} defaultChecked/>
                                <label className="form-check-label">All</label></div>
                                
                                <div className="cost-filter">
                         <input className="form-check-input" type="radio" name='check1' value='0-300' onClick={this.handleChange}    />
                         <label  className="form-check-label"> 0 - ₹300</label>
                         </div>
                         <div className="cost-filter">
                         <input className="form-check-input" type="radio" name="check1" value='300-600' onClick={this.handleChange}   />
                         <label  className="form-check-label"> ₹300 - ₹600</label></div>
                         <div className="cost-filter">
                         <input className="form-check-input" type="radio" name="check1" value='600-1200' onClick={this.handleChange}   />
                         <label  className="form-check-label"> ₹600 - ₹1200</label></div>
                         <div className="cost-filter">
                         <input className="form-check-input" type="radio" name="check1" value='1200-2000' onClick={this.handleChange}   />
                         <label  className="form-check-label"> ₹1200 - ₹2000</label></div>
                         </div> 
                         </form><hr style={{marginLeft:'20%', marginRight:'20%',border:'1px solid'}}/>
                         <form>
                            <h6 style={{textAlign:'center'}}>Based on Cuisine Type</h6>
                         <div className="form-check form-switch">
                         <div className="cost-filter">
                         <input className="form-check-input" type="radio" name='check1' value='1' onClick={this.handleClick}    />
                         <label  className="form-check-label">North Indian</label>
                         </div>
                         <div className="cost-filter">
                         <input className="form-check-input" type="radio" name='check1' value='2' onClick={this.handleClick}    />
                         <label  className="form-check-label">South Indian</label>
                         </div>
                         <div className="cost-filter">
                         <input className="form-check-input" type="radio" name='check1' value='3' onClick={this.handleClick}    />
                         <label  className="form-check-label">Chinese</label>
                         </div>
                         <div className="cost-filter">
                         <input className="form-check-input" type="radio" name='check1' value='4' onClick={this.handleClick}    />
                         <label  className="form-check-label">Fast Food</label>
                         </div>
                         <div className="cost-filter">
                         <input className="form-check-input" type="radio" name='check1' value='5' onClick={this.handleClick}    />
                         <label  className="form-check-label">Street Food</label>
                         </div>
                         </div>
                         </form>
                        </div>
                    </div>
                    <div className="col-8"  >
                    <ListMenu listData= {this.state.restData?this.state.restData:this.state.restaurantList}/>
                </div>
                </div>
            </div>
            </>
        )
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        const id=this.props.match.params.id
        sessionStorage.setItem('mealId',id);
        axios(`${url}+${id}`)
        .then((res)=>{
            this.setState({restaurantList:res.data})
        })
    }
}
export default ListDisplay