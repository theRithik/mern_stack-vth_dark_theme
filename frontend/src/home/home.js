import React from "react";
import Search from './search';
import QuickSearch from './quickSearch'
import Header from "../header";


const Home =()=>{
    return(
        <>
        <Header/>
         <Search/>
         <QuickSearch/>
        
        </>
    )
}
export default Home