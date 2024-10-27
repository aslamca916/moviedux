import React from 'react'

export default function Footer(){
    var currentdate = new Date().getFullYear();
    return(
        <div className="footer">
            <p>All rights reserved {currentdate}</p>
            
        </div>
    );
}