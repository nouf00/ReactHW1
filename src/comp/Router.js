import React from 'react'

import Nav from './Nav';
import Fot from './Fot';
import Store from './Store';
import Login from './Login'
import Gried from './Gried';
import Searche from './Searche';
import data from './data.json'
import { Routes , Route } from 'react-router-dom';
import Welc from './Welc';
import serbox from './serbox';


function Router() {
  return (
  <div>
    <Nav></Nav>
  <Searche></Searche>
    {/* <Searche></Searche> */}
    {/* <Routes>
     <Route path='/Store' element={<Store/>}></Route>
     </Routes> */}

    <Routes>
     <Route path='/Login' element={<Login/>}></Route>
     </Routes>

     <Routes>
     <Route exact path="/Welc" element={<Welc/>}/>
     </Routes> 
     
     
     <div className='contener'>

     <Store Course="Swaher Bootcamp"
    img='myPic/Swaher.png'
    date= {true} />


      <Store Course= "UI/UX using figma"
    img='myPic/UI-UX.png'
    butt={false}/> 


    <Store Course="Web desing using ON-Code"
    img='myPic/NoCode.PNG'
    date= {false} />


    <Store Course=" web desing for IOS usinf SwiftUI"
    img='myPic/IOS.PNG'
    date= {false} />


    <Store Course="GIT & Githup"
    img='myPic/GitGithup.png'
    date= {false} /> 


   <Store Course="Introdection in DecOps"
    img='myPic/Dvs.png'
    date= {false} />


    </div>
  
   <Fot className="Footer-con"></Fot>
    </div>
  )
}

export default Router