import React from 'react'

const Aboutus = () => {
   const mystyle={
     height:"91.62vh",
     width:"100%",
    /* border:"1mm solid black",
    // marginLeft:"2mm",*/
     overflow:"hidden",
    /* backgroundSize:"contain",*/
    /*borderRadius:"20px",*/
  }
   
  const box={
      width: "36%",
      height: "15.5cm",
      border: "1mm solid aqua",
      display: "block",
      marginLeft: "30%",
      backgroundColor:"#56605c" ,
      marginTop: "3%",
      borderRadius: "25px",
  }
  return (
    <div>
        <div class="aa"  style={mystyle} >

          <div id='box' style={box} >
           <h1 style={{textAlign:"center",color:"aqua",marginTop:"6mm"}}>About US</h1>
           <br /><br/>
           <p style={{color:"aqua",textAlign:"center"}}>This is Notes app.User can create their account here and store their notes.</p>
           <p style={{color:"aqua",textAlign:"center"}}>Owner:-<span style={{color:"white"}}> Arpit Pandey</span></p>
           <p style={{color:"aqua",textAlign:"center"}}>Headquarter:-<span style={{color:"white"}}>Lucknow Uttar Pradesh</span></p>
           <p style={{color:"aqua",textAlign:"center"}}>Contact No:-<span style={{color:"white"}}>9999921112,123984893</span></p>
           <p style={{color:"aqua",textAlign:"center"}}>Email:<span style={{color:"white"}}>arpitpandey6785@gmail.com</span></p>
           <p style={{color:"aqua",textAlign:"center"}}>You can share your experience or feedback on above email address, or if you have any type of
            query you can contact us on above phone number.Our team is working consistenty to improve customer experince.
           </p>

           
           </div>
       </div>
      
    </div>
  )
}

export default Aboutus
