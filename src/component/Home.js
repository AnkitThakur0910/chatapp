import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Style.css'
import { socket } from './Sockett';

// react renders function only on state change
export let room  = ""


function Home() {
 
  
  useEffect(()=>{
   
    socket.on('connect',()=>{console.log('connection established')})
  },[])
  
  const navigate  = useNavigate();
  const sendGmail = ()=>{
    console.log(room)
    if(room!=="")
    {
      socket.emit('leave_room',room)
    }
    
    const ind = document.getElementsByTagName('input')[0].value;
    
   room = ind
   console.log(room)
   
    socket.emit('join',{gmail : ind})
   
  }
  return (
    <div style={{display : "block",boxSizing : "border-box", width : "100%",height : "700px"}}>
        <div style={{display : "flex",width : "100%",justifyContent : "center",alignItems : "center",height : "100%"}}>
          <div className='chatter-image' style={{display : "block",boxSizing : "border-box",width : "90%",borderRadius : "20px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",height : "90%"}}>
            <div style={{display : "flex",flexDirection : "column",width : "100%",justifyContent : "center",alignItems : "center"}}>
             <div style={{display : "block",boxSizing : "border-box"}}>
               <h1 style={{color : "white",fontFamily : "'Racing Sans One', cursive",fontWeight : "bold",fontSize : "50px",marginTop : "100px",marginBottom : "0"}}>CHATTER</h1>
             </div>
             <div style={{display : "block",boxSizing : "border-box"}}>
               <p style={{color : "lightgray",fontFamily : "'Mulish',sans-serif",fontSize : "14px"}}>Chat with millions of people just with Chatter</p>
             </div><br/><br/><br/>
             
             <div style={{display : "block",boxSizing : "border-box",width : "auto",height : "auto"}}>
               <input style={{minWidth : "300px",minHeight :"40px",borderRadius : "20px",border : "none"}} type = "gmail" name = "gmail" placeholder='Enter gmail id' required />
             </div><br/><br/><br/>
             <div style={{display : "block",boxSizing : "border-box",width : "auto",height : "auto"}}>
                <button onClick = {()=>{sendGmail();navigate('/chat')}} style={{color : "white",fontFamily : "'Lato',sans-serif",minWidth : "300px",minHeight :"40px",borderRadius : "20px",border : "none",background : "rgba(16,39,244,0.6)",cursor : "pointer"}}>Get Started</button>
             </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home

