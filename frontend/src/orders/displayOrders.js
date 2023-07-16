import React from "react";
import { Component } from "react";
import axios from "axios";
import ViewOrder from "./viewOrder";

const url='http://localhost:5000/admin/getDetails'
class DisplayOrder extends Component{
    constructor(){
        super()
        this.state={
            order:''
        }
    }
   

    render(){
        return(
            <>
         <ViewOrder orderDetails={this.state.order}/>
            </>

        )
    }
    componentDidMount(){
        axios.get(url)
        .then((res)=>{console.log(res.data)
            this.setState({order:res.data})
        })
    }
}
export default DisplayOrder