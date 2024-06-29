import React from "react";
const Footer = () => {

    return (

        <div className="flex flex-col gap-12 md:flex-row justify-between">
            <ul className="flex gap-6 font-mono text-gray-300
            ">
                <li>
                    <a href="#">Facebook</a>
                
                </li>
                <li>
                    <a href="#">Instagram</a>
                
                </li>
                <li>
                    <a href="#">Twitter</a>
                
                </li>
            </ul>
            <div className="flex gap-2 ">
                <img src=".\public\Help-Avatar.svg" alt="" />
            </div>
            <div>
                <p className="font-mono font-thin">     Have a Question?  
                </p>
                <a href="#" className="font-mono font-medium">Here is The Speacialist</a>
            </div>
        </div>
    )
}

export default Footer 