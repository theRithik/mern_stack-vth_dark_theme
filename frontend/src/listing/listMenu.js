import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import './listMenu.css'

const ListMenu=(props)=>{

//     const cusin=({listData})=>{
//         if(listData){
//             return listData.map((item)=>{
//                 return (
//                     <div className="label">
//                  </div>
//                 )
//             })
//         }
//     }

    const menu=({listData})=>{
        if(listData){
            if(listData.length>0){
            return listData.map((item)=>{
                return (
                   <div className="card" id="listingCard" key={item.restaurant_id} style={{ marginLeft:'30px', marginBottom:'50px',paddingBottom:'20px',border:'1px solid,grey',borderRadius:'30px'}} >
                      <div className="row" key={item.restaurant_id} style={{marginLeft:'10px'}}>
                     
                        <div className="col-md-4"  style={{marginTop:"5px",paddingTop:'10px'}}>
                        <Link to ={`/details?restId=${item.restaurant_id}`}>
                         <img src={item.restaurant_thumb} alt={item.restaurant_name} style={{width:'220px', height:'180px', borderRadius:'20px'}}/>
                        </Link>
                         </div> 

                         <div className="col-md-7" style={{marginTop:"5px",paddingTop:'10px'}} >
                          <Link to ={`/details?restId=${item.restaurant_id}`}>  
                          <h5>{item.restaurant_name}</h5> 
                         <p style={{marginBottom:'0'}}>{item.address}</p>
                         <p style={{marginBottom:'0'}}>{item.rating_text}</p>
                         <h6>Rs.{item.cost}</h6>
                         <div className="label">
                            <span className="btn btn-primary">{item.mealTypes[0].mealtype_name}</span>
                            <span className="btn btn-success" style={{marginLeft:'10px'}}>{item.mealTypes[1].mealtype_name}</span>
                         </div>
                         </Link>
                         {/* {cusin()} */}
                         </div>
                        
                         </div>
                         </div>

                )
            })
        }
        else{
            return(
                <div>
                    <h2>No Data as per the filter</h2>
                </div>
            )
        }
        }
        else{
            return(
                <div className="loading" style={{}}>
                    
                    <img src='https://media.tenor.com/qzuj7-PoJTcAAAAC/loading.gif' alt="loader"/>
                </div>
            )
        }

    }
    return(
        <>
        {menu(props)}
        </>
    )
}
export default ListMenu