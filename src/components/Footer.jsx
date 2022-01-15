import React from "react";

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.

// var year = new Date().getFullYear();
// console.log("hi");

function Footer(){

    const currentYear = new Date().getFullYear();

    return (
        <footer>
        <p>Copyright {currentYear}</p>
        </footer> 
    );
}

export default Footer;