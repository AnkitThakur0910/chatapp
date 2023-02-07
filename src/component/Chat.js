import React,{useEffect} from 'react'
import './Style.css'
import { socket } from './Sockett'
import {room} from './Home'
function Chat() {

  console.log(room)
  useEffect(() => 
  {
    socket.on('new_msg_from_server', (mess,sender_gmail) => {
      console.log(mess,sender_gmail)
      displaymessage(mess);
    
    })}
   
  ,[])

  function displaymessage(mess) {
    const elem = document.createElement('p');
    elem.style.backgroundColor = "lightpink"
    elem.style.maxWidth = "fit-content"
    elem.style.paddingLeft = 10 + "px"
    elem.style.paddingRight = 10 + "px"
    elem.style.borderRadius = 8 + "px"
    elem.style.fontSize = 20 + "px"
    elem.style.fontFamily = "cursive"

    elem.innerText = mess;

    const ele = document.getElementById('messages')
    ele.appendChild(elem)
  }

  function handler() {
    const arg1 = document.getElementsByTagName('input')[1].value
    let arg2 = document.getElementsByTagName('input')[0].value
    socket.emit('new_msg', {gmail : arg1},arg2)
    const elem = document.createElement('p');
    elem.style.backgroundColor = "lightgreen"
    elem.style.maxWidth = "fit-content"
    elem.style.paddingLeft = 10 + "px"
    elem.style.paddingRight = 10 + "px"
    elem.style.borderRadius = 8 + "px"
    elem.style.fontSize = 20 + "px"
    elem.style.fontFamily = "cursive"

    elem.innerText = arg2;

    const ele = document.getElementById('messages')
    ele.appendChild(elem)
    document.getElementsByTagName('input')[0].value = ""
  }
  return (
    <>
{/*     
    <div className="chat-page" style={{display : "block",boxSizing : "border-box",width : "100%",height : "100%"}}>
    <a href='#signup'><button style={{padding : "10px",backgroundColor : "red",border : "none",color :"white",borderRadius : "5px"}}>SIGN IN</button></a>
     <div style={{display : "flex",width : "100%",height:"100%" , justifyContent : "center",alignItems : "center",}}>
        <div className='mobile-chat' style={{display : "block",boxSizing : "border-box",height : "650px",width : "35%",minWidth : "375px",backgroundColor : "white"}}>
          <div style={{display : "flex",width : "100%",height:"100%",flexDirection : "column"}}>
           <div style={{display : "block",boxSizing : "border-box",width : "100%",height : "100px",backgroundColor : "white"}}>
            <div style={{display : "flex",width : "100%",justifyContent : "center",alignItems : "flex-end"}}>
            <h1 style={{fontFamily: "Gagalin",color:'#088F8F',margin : "0%",flexGrow : "1"}}>CHATTER</h1>
            <i class="fa fa-circle-o" style={{fontSize:"24px",color : "black",flexGrow : "1"}}></i>
            <i class="fa fa fa-bug" style={{fontSize:"24px",color : "black",flexGrow : "1"}}></i>
            <i class="fa fa-address-book" style={{fontSize:"24px",color : "black",flexGrow : "1"}}></i>
            <i class="fa fa-bookmark" style={{fontSize:"24px",color : "black",flexGrow : '1'}}></i>
            </div>
           </div>
           <div className = "chatk" style={{display : "block",width : "100%",height : "800px",overflow : "auto",boxSizing : "border-box"}}>
            <div style={{display : "flex",width : "100%",height : "200px",marginBottom : "20px"}}>
           <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",width : "46%",height : "100%",margin : "2%",zIndex : "6",position : "relative",borderRadius : '10px',boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
          <div style={{display : "flex",width : "100%",height : "100%",alignItems : "center",flexDirection : "column"}}>
          <div className='profile' style={{display : "block",boxSizing : "border-box",width : "100%",height : "60%"}}></div>
          <div style={{fontSize : "20px",fontWeight : "bold"}}>Ankit</div>

          <div style={{color : "gray",overflow : "hidden"}}>Sleeping...</div>
          <div style={{display : "inline",width : "100%"}}>
           <button style={{backgroundColor : "#088F8F",border : "0",borderRadius : "3px",padding : '10px',marginLeft : "10px",color : "white"}}>
            Chat
           </button>
           <i class="fa fa-bookmark-o" style={{fontSize:"24px",color : "#088F8F",float : "right",marginRight : "10px"}}></i>
          </div>
          <div></div>
          </div>
          </div>
          
          <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",width : "46%",height : "100%",margin : "2%",zIndex : "6",position : "relative",borderRadius : '10px',boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
          <div style={{display : "flex",width : "100%",height : "100%",alignItems : "center",flexDirection : "column"}}>
          <div className='profile2' style={{display : "block",boxSizing : "border-box",width : "100%",height : "60%"}}></div>
          <div style={{fontSize : "20px",fontWeight : "bold"}}>Amit</div>

          <div style={{color : "gray",overflow : "hidden"}}>study...</div>
          <div style={{display : "inline",width : "100%"}}>
           <button style={{backgroundColor : "#088F8F",border : "0",borderRadius : "3px",padding : '10px',marginLeft : "10px",color : "white"}}>
            Chat
           </button>
           <i class="fa fa-bookmark-o" style={{fontSize:"24px",color : "#088F8F",float : "right",marginRight : "10px"}}></i>
          </div>
          <div></div>
          </div>
          </div>
          </div>

          <div style={{display : "flex",width : "100%",height : "200px",marginBottom : "20px"}}>
           <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",width : "46%",height : "100%",margin : "2%",zIndex : "6",position : "relative",borderRadius : '10px',boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
          <div style={{display : "flex",width : "100%",height : "100%",alignItems : "center",flexDirection : "column"}}>
          <div className='profile3' style={{display : "block",boxSizing : "border-box",width : "100%",height : "60%"}}></div>
          <div style={{fontSize : "20px",fontWeight : "bold"}}>Rahul</div>

          <div style={{color : "gray",overflow : "hidden"}}>just be yourself</div>
          <div style={{display : "inline",width : "100%"}}>
           <button style={{backgroundColor : "#088F8F",border : "0",borderRadius : "3px",padding : '10px',marginLeft : "10px",color : "white"}}>
            Chat
           </button>
           <i class="fa fa-bookmark-o" style={{fontSize:"24px",color : "#088F8F",float : "right",marginRight : "10px"}}></i>
          </div>
          <div></div>
          </div>
          </div>
          
          <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",width : "46%",height : "100%",margin : "2%",zIndex : "6",position : "relative",borderRadius : '10px',boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
          <div style={{display : "flex",width : "100%",height : "100%",alignItems : "center",flexDirection : "column"}}>
          <div className='profile4' style={{display : "block",boxSizing : "border-box",width : "100%",height : "60%"}}></div>
          <div style={{fontSize : "20px",fontWeight : "bold"}}>Akshit</div>

          <div style={{color : "gray",overflow : "hidden"}}>topper</div>
          <div style={{display : "inline",width : "100%"}}>
           <button style={{backgroundColor : "#088F8F",border : "0",borderRadius : "3px",padding : '10px',marginLeft : "10px",color : "white",fontSize : "2p"}}>
            Chat
           </button>
           <i class="fa fa-bookmark-o" style={{fontSize:"24px",color : "#088F8F",float : "right",marginRight : "10px"}}></i>
          </div>
          <div></div>
          </div>
          </div>
          </div>

          <div style={{display : "flex",width : "100%",height : "200px",marginBottom : "20px"}}>
           <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",width : "46%",height : "100%",margin : "2%",zIndex : "6",position : "relative",borderRadius : '10px',boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
          <div style={{display : "flex",width : "100%",height : "100%",alignItems : "center",flexDirection : "column"}}>
          <div className='profile5' style={{display : "block",boxSizing : "border-box",width : "100%",height : "60%"}}></div>
          <div style={{fontSize : "20px",fontWeight : "bold"}}>Ansh</div>

          <div style={{color : "gray",overflow : "hidden"}}>Sniper</div>
          <div style={{display : "inline",width : "100%"}}>
           <button style={{backgroundColor : "#088F8F",border : "0",borderRadius : "3px",padding : '10px',marginLeft : "10px",color : "white"}}>
            Chat
           </button>
           <i class="fa fa-bookmark-o" style={{fontSize:"24px",color : "#088F8F",float : "right",marginRight : "10px"}}></i>
          </div>
          <div></div>
          </div>
          </div>
          
          <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",width : "46%",height : "100%",margin : "2%",zIndex : "6",position : "relative",borderRadius : '10px',boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
          <div style={{display : "flex",width : "100%",height : "100%",alignItems : "center",flexDirection : "column"}}>
          <div className='profile6' style={{display : "block",boxSizing : "border-box",width : "100%",height : "60%"}}></div>
          <div style={{fontSize : "20px",fontWeight : "bold"}}>sharma</div>

          <div style={{color : "gray",overflow : "hidden"}}>Sweeper.</div>
          <div style={{display : "inline",width : "100%"}}>
           <button style={{backgroundColor : "#088F8F",border : "0",borderRadius : "3px",padding : '10px',marginLeft : "10px",color : "white"}}>
            Chat
           </button>
           <i class="fa fa-bookmark-o" style={{fontSize:"24px",color : "#088F8F",float : "right",marginRight : "10px"}}></i>
          </div>
          <div></div>
          </div>
          </div>
          </div>
          </div>
        </div>
        

        </div>
     </div>
     <div id="signup" style = {{display : "flex",width : "100%",justifyContent : "center", alignItems : "center"}}>
      <form style = {{width : "70%"}}>
        <div style={{display : "block",boxSizing : "border-box",width : "100%"}}>
         <input type="file" accept='image/png, image/jpeg'/><i class="fa fa-bookmark-o" style={{fontSize:"24px",color : "#088F8F"}}></i>
        </div>
      </form>
     </div>
    </div> */}
    <div style={{display : "block",boxSizing : "border-box", width : "100%",height : "720px",position : "fixed"}}>
        <div style={{display : "flex",width : "100%",justifyContent : "center",alignItems : "center",height : "100%"}}>
          <div style={{display : "block",boxSizing : "border-box",width : "90%",borderRadius : "20px",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",height : "90%"}}>
            <div style={{display : "flex",width : "100%",height : "100%"}}>
           <div style={{display : "block",boxSizing : "border-box",width : "40%",height : "100%"}}>
           <div style={{display : "flex",width : "100%",flexDirection : "column",height : "100%"}}>
           <div style={{display : "block",boxSizing : "border-box",width : "100%",height : "100px"}}>
            <div style={{display : "flex",width : "100%",height : "100%",backgroundColor : "#0D2F62",justifyContent : "flex-start",alignItems : "center",paddingLeft : "10px"}}>
            <i className='fas fa-user-alt	' style={{color : "white",fontSize : "24px",marginLeft : "10%"}}></i>
            <div style = {{color : "white",fontSize : "30px",fontFamily : "'Rouge Script',sans-serif",marginLeft : "5%"}}>
             {room}
            </div>
            </div>
            <div id='messages' style={{display : "block",boxSizing : "border-box",width : "100%",height : "460px",backgroundColor : "white",overflow : "auto"}}>

            </div>
            <div style={{display : "block",boxSizing : "border-box",width : "100%",height : "60"}}>
            <div  style={{display : "flex",width : "100%",height : "100%",justifyContent : "flex-start",alignItems : "center"}}>
               <input type  = "text" style={{width : "60%",height : "40px",border : "1px solid #1FB7C0",marginLeft : "10px"}}/>
               <button onClick={handler} style={{width : "25%",height : "40px",border : "none",marginLeft : "10px",fontFamily : "'Lato',sans-serif",fontWeight : "bolder",color : "white",backgroundColor : "#1FB7C0"}}>Send</button>
            </div>
            </div>
           </div>
           </div>
           </div>
           <div style={{display : "block",boxSizing : "border-box",width : "60%",height : "100%",background : "linear-gradient(#061042,#1FB7C0)",overflow : "auto"}}>
            <div style={{display : "flex",flexDirection : "column",width : "100%",height : "100%"}}>
             <div style={{display : "flex",width : "100%",height : "150px",backgroundColor : "#061042",justifyContent : "center",alignItems : "center"}}>
             <input style={{width : "40%",height : "30px",border : "none"}} type="email" placeholder='Enter username' />
             
             </div>
            
             
             
             <div className='clients-overflow' style={{display : "block",boxSizing : "border-box",width : "100%",height : "100%-150px",overflow : "auto"}}>
            <div style={{display : "flex",flexDirection : "column",width : "100%",height : "100%"}}>
             

             <div style={{display : "block",boxSizing : "border-box",width : "100%",minHeight : "270px",marginBottom : "10px"}}>
             <div style={{display : "flex",width : "100%",height : "100%"}}>
             <div style={{display : "block",boxSizing : "border-box",width : "40%",height : "200px",marginLeft : "6%",marginRight : "4%"}}>
              <div className='user1' style={{display : "block",boxSizing : "border-box",height : "100%",width : "100%"}}>

              </div>
              <div style={{display : "flex",boxSizing : "border-box",border : "2px solid white",justifyContent : "center",marginTop : "10px",height : "50px",alignItems : "center",gap : "30%"}}>
                <h1 style={{color : "white",margin : "0",fontWeight : "500"}}>Steve</h1><div style={{display : "flex",boxSizing : "border-box",gap : "20px"}}><i className="fa fa-bookmark-o" style={{fontSize:"24px",color : 'white'}}></i><i className="fa fas fa-circle-notch" style={{fontSize:"24px",color : 'white'}}></i><i className="fa fa-trash-o" style={{fontSize:"24px",color : 'white'}}></i>
                </div>
              </div>
             </div>
             <div style={{display : "block",boxSizing : "border-box",width : "40%",height : "200px",marginLeft : "4%",marginRight : "6%"}}>
              <div className='user2' style={{display : "block",boxSizing : "border-box",height : "100%",width : "100%"}}>

              </div>
             <div style={{display : "flex",boxSizing : "border-box",border : "2px solid white",justifyContent : "center",marginTop : "10px",height : "50px",alignItems : "center",gap : "30%"}}>
                <h1 style={{color : "white",margin : "0",fontWeight : "500"}}>Steve</h1><div style={{display : "flex",boxSizing : "border-box",gap : "20px"}}><i className="fa fa-bookmark-o" style={{fontSize:"24px",color : 'white'}}></i><i className="fa fas fa-circle-notch" style={{fontSize:"24px",color : 'white'}}></i><i className="fa fa-trash-o" style={{fontSize:"24px",color : 'white'}}></i>
                </div>
              </div>
             </div>

             </div>
             </div>
             <div style={{display : "block",boxSizing : "border-box",width : "100%",minHeight : "270px",marginBottom : "10px"}}>
             <div style={{display : "flex",width : "100%",height : "100%"}}>
             <div style={{display : "block",boxSizing : "border-box",width : "40%",height : "200px",marginLeft : "6%",marginRight : "4%"}}>
              <div className='user1' style={{display : "block",boxSizing : "border-box",height : "100%",width : "100%"}}>

              </div>
             <div style={{display : "flex",boxSizing : "border-box",border : "2px solid white",justifyContent : "center",marginTop : "10px",height : "50px",alignItems : "center",gap : "30%"}}>
                <h1 style={{color : "white",margin : "0",fontWeight : "500"}}>Steve</h1><div style={{display : "flex",boxSizing : "border-box",gap : "20px"}}><i className="fa fa-bookmark-o" style={{fontSize:"24px",color : 'white'}}></i><i className="fa fas fa-circle-notch" style={{fontSize:"24px",color : 'white'}}></i><i className="fa fa-trash-o" style={{fontSize:"24px",color : 'white'}}></i>
                </div>
              </div>
             </div>
             <div style={{display : "block",boxSizing : "border-box",width : "40%",height : "200px",marginLeft : "4%",marginRight : "6%"}}>
              <div className='user2' style={{display : "block",boxSizing : "border-box",height : "100%",width : "100%"}}>

              </div>
             <div style={{display : "flex",boxSizing : "border-box",border : "2px solid white",justifyContent : "center",marginTop : "10px",height : "50px",alignItems : "center",gap : "30%"}}>
                <h1 style={{color : "white",margin : "0",fontWeight : "500"}}>Steve</h1><div style={{display : "flex",boxSizing : "border-box",gap : "20px"}}><i className="fa fa-bookmark-o" style={{fontSize:"24px",color : 'white'}}></i><i className="fa fas fa-circle-notch" style={{fontSize:"24px",color : 'white'}}></i><i className="fa fa-trash-o" style={{fontSize:"24px",color : 'white'}}></i>
                </div>
              </div>
             </div>

             </div>
             </div>

             <div style={{display : "block",boxSizing : "border-box",width : "100%",height : "270px",marginBottom : "10px"}}>
             <div style={{display : "flex",width : "100%",height : "100%"}}>
             <div style={{display : "block",boxSizing : "border-box",width : "40%",height : "200px",marginLeft : "6%",marginRight : "4%"}}>
              <div className='user1' style={{display : "block",boxSizing : "border-box",height : "100%",width : "100%"}}>

              </div>
             <div style={{display : "flex",boxSizing : "border-box",border : "2px solid white",justifyContent : "center",marginTop : "10px",height : "50px",alignItems : "center",gap : "30%"}}>
                <h1 style={{color : "white",margin : "0",fontWeight : "500"}}>Steve</h1><div style={{display : "flex",boxSizing : "border-box",gap : "20px"}}><i className="fa fa-bookmark-o" style={{fontSize:"24px",color : 'white'}}></i><i className="fa fas fa-circle-notch" style={{fontSize:"24px",color : 'white'}}></i><i className="fa fa-trash-o" style={{fontSize:"24px",color : 'white'}}></i>
                </div>
              </div>
             </div>
             <div style={{display : "block",boxSizing : "border-box",width : "40%",height : "200px",marginLeft : "4%",marginRight : "6%"}}>
              <div className='user2' style={{display : "block",boxSizing : "border-box",height : "100%",width : "100%"}}>

              </div>
             <div style={{display : "flex",boxSizing : "border-box",border : "2px solid white",justifyContent : "center",marginTop : "10px",height : "50px",alignItems : "center",gap : "30%"}}>
                <h1 style={{color : "white",margin : "0",fontWeight : "500"}}>Steve</h1><div style={{display : "flex",boxSizing : "border-box",gap : "20px"}}><i className="fa fa-bookmark-o" style={{fontSize:"24px",color : 'white'}}></i><i className="fa fas fa-circle-notch" style={{fontSize:"24px",color : 'white'}}></i><i className="fa fa-trash-o" style={{fontSize:"24px",color : 'white'}}></i>
                </div>
              </div>

             </div>

             </div>
             </div>
            </div>
            </div>
            </div>
           </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Chat