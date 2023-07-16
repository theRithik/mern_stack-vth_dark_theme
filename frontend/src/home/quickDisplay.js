import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Display =(props)=>{
    const output=({metaData})=>{
        if(metaData){
            return metaData.map((item)=>{
                return(
                    <Link to={`/listing/${item.mealtype_id}`} key={item.mealtype_id}>
                    <div className="card quickDisplay1"  style={{width:'18rem', height:'300px',display:'inline-block',margin:'50px 60px 0 15px',borderRadius:'20px',border:'1px solid grey' }}>    
                        <div className="card-header" style={{padding:'0'}}><img src={item.meal_image} alt={item.meal_type} style={{width:'100%',height:'170px',borderRadius:'20px 20px 0 0', border:'1px solid'}}/>
                        </div>
                        <div className="card-body quickDisplay" style={{textAlign:'center'}}>
                            <div className="card-title"><h4 >{item.mealtype}</h4></div>
                            <div className="card-text">{item.content}</div>
                        </div>
                    </div>
                    </Link>
                )
            })
        }
    }
    return(
        <>
        {output(props)}
        </>
    )
}
export default Display