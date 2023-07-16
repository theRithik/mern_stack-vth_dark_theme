import React from "react";

const ViewOrder=(props)=>{
  const renderOrder=({orderDetails})=>{
        if(orderDetails){
            return orderDetails.map((item)=>{
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.restName}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td style={{color:'green'}}>{item.cost}</td>
                    </tr>
                )
            })
        }

    }
    return(
        <>
           <div className="container" style={{marginTop:'50px'}}>
              <table className="table table-striped table-hover" style={{border:'1px solid',borderRadius:'5px'}}>
                            <thead>
                                <tr>
                                    <th className="col">
                                        orderId
                                    </th>
                                    <th className="col">
                                        Restaurant
                                        </th>
                                        <th className="col">
                                        Name
                                        </th>
                                        <th className="col">
                                        Phone
                                        </th>
                                        <th className="col">
                                        Email
                                        </th>
                                        <th className="col">
                                        Cost
                                        </th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                            {renderOrder(props)}
                            </tbody>
                        </table>
                        </div>
        </>
    )

}
export default ViewOrder