import React from 'react'
import i1 from "../../assets/callpapers.svg";
export default function Contact(){
  return (
    <>
     <div className="row m-3 p-2 mt-5 align-items-center " id="mainpage">
        <div className="col-md-7  mt-5  col-12 m-0 p-0">
          <div>
            <br />
            <br />
            <h1>Contact Us</h1>
            <br />
            <br />
          </div>
          <div className="col-10" style={{ fontFamily: "Nunito" }}>

          </div>
        </div>

        <div className="col-md-5 col-12 m-0 mt-5 p-0 bg-white h-100 ">
          <img className="m-0 w-100 justify-content-end" src={i1} alt="..." />
        </div>

       
      </div> 
      <div className="row m-3 p-2 mt-5 align-items-center " id="mainpage">
        <div className="col-md-7  mt-5  col-12 m-0 p-0">
          <div>
            <br />
            <br />
            <p style={{fontSize:"1.5rem"}}>Christ Deemed to be University
            <br />
            <br />
            Address:
            <br/>
            Dharmaram College Post, Hosur Road, 
            <br/>
            Bengaluru - 560029, Karnataka, India
            <br/>
            <br/>
            Contact:
            <br/>
            Dr. Chandra J - +91 98863 06307
            </p>
          </div>
          <div className="col-10" style={{ fontFamily: "Nunito" }}>
                    
          </div>
        </div>

        <div className="col-md-5 col-12 m-0  p-0 bg-white h-100 ">
        <p style={{fontSize:"1.5rem"}}>
        <br/>
        <br/>
        Modern College of Business and Science
        <br/>
        <br/>
        Address:
        <br/>
        Bawshar street Muscat Bawshar Al-Khuwair 133 Sultanate of Oman

        <br/>
        <br/>

        Contact: +968-24583583
        </p>
        </div>

       
      </div> 
      
      
    </>
   
    
  )
}
