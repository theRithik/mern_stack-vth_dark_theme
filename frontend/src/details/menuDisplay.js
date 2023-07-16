import React from "react";
import { Component } from "react";


class MenuDisplay extends Component{
       

    placeOrder=[]
    handleClick=(data)=>{
        this.placeOrder.push(data)
        this.props.finalOrder(this.placeOrder)
    }

    removeOrder=(id)=>{
        if(this.placeOrder.indexOf(id)>-1){
                this.placeOrder.splice(this.placeOrder.indexOf(id),1)
        }
        this.props.finalOrder(this.placeOrder)
        console.log(this.placeOrder)

    }

            renderOrder=(orders)=>{
                if(orders){
                    return orders.map((item,index)=>{
                        return (
                            <p key={index} style={{display:'inline-block'}}>{item},</p>
                        )
                    })
                }
                else{
                    return(
                        <p>no item Added</p>
                    )
                }
            }
    renderMenu=({restMenu})=>{
        if(restMenu){
            return restMenu.map((item)=>{
                return(
                    <div className="row" key={item.menu_id}>
                        <div className="col-md-7">
                            <h6>{item.menu_id} <img src={item.menu_image} style={{width:'70px',height:'70px'}} alt={item.menu_name}/> 
                            <span style={{fontSize:'13px'}}> {item.menu_name} - Rs.{item.menu_price}</span>
                            </h6>                 
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-success" onClick={()=>this.handleClick(item.menu_id)} style={{padding:'5px 2px 0 2px',marginTop:'10px', marginRight:'20px'}}><span className="material-symbols-outlined">add</span></button>
                            <button className="btn btn-danger" onClick={()=>{this.removeOrder(item.menu_id)}} style={{padding:'5px 2px 0 2px',marginTop:'10px'}}><span className="material-symbols-outlined">remove</span></button>
                        </div>

                    </div>
                )
            })
        }

    }
   
    render(){
        return(
            <>
            <div className="col-md-12">
                    <h3 style={{textAlign:'center'}}>Menu</h3>
                    <h4>Item Added</h4>
                    <h4>Item Number  {this.renderOrder(this.placeOrder)} Added.
                        
                    </h4>
            
            {this.renderMenu(this.props)}
            </div>
            </>
        )
    }
}
export default MenuDisplay