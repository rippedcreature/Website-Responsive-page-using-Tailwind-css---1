import React from "react";
const Body = () => {

    return (
        <div className="space-y-4 lg:flex">       
      
        <div className="flex items-center justify-center lg:flex-1 lg:h-[400px] ">
            <img src=".\public\Blue-Shape.svg" alt="" className="rotate-[45deg] h-64 md:h-72 lg:h-[400px]"  />
            <img src=".\public\Pink-Shape.svg" alt="" className="absolute rotate-[30deg] h-64 md:h-72 lg:h-[400px]" />
            <img src=".\public\Purple-Shape.svg" alt="" className="absolute rotate-[15deg] h-64 md:h-72 lg:h-[400px]" />
            <img src=".\public\Hero-Model.png" alt="" className="absolute h-64" md:h-72/>
        </div>

        <div className="lg:flex-1">
            <h1 className="text-5xl font-bold font-serif leading-tight">
HOST YOUR WEBSITE IN LESS THAN 5 MINUTES.
            </h1>
  
         <p className="font-mono text-gray-900">
         Tired of website woes?   (Replace with a relevant pain point for your target audience)

[Your Company Name] offers powerful, affordable web hosting solutions to launch your website into the stratosphere!
  </p>  

  <form action="" className="flex flex-col gap-4 md:flex-row">
    <input className="rounded-md px-4 py-3 placeholder:text-gray-700" type="email" placeholder="Enter Email Address" />
    <button className="rounded-md px-4 py-3 bg-blue-600 hover:bg-green-700 text-yellow-50 ">
        Join Waitlist
    </button>
  </form>
  <div className="flex gap-2 ">
  <img src="\public\Checkmark.svg" alt="check" />

<p className="font-mono">No Spam ever if you dont like it unsubscribe anytime
    </p>       
    </div>
 </div>
      
        
        </div>

    )
}

export default Body