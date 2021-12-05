import React from "react";
//import logo from "../assets/images/logo.png";

const Header=()=>{
    return(
        <header className="header">
            <nav>
                <div className="logo">
                    <h1>To do List</h1>
                    {/* <img src={logo} alt="TodoList"></img> */}
                </div>
            </nav>
        </header> 
    );
};

export default Header;