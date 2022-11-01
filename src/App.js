// import logo from './logo.svg';
import './App.css';
import Nav from './comp/Nav';
import Fot from './comp/Fot';
import Store from './comp/Store';
import Login from './comp/Login'
import Gried from './comp/Gried';
import Searche from './comp/Searche';


function App() {
  return (
    <div >
  <Nav></Nav>
  <Searche></Searche>
  <ul className='contener'>

  <li><Store className='imgSwhaer' 
  Course="Swaher Bootcamp"
  img='myPic/Swaher.png'
  date= {true} /> </li>

 <li> <Store 
  Course= "UI/UX using figma"
  img='myPic/UI-UX.png'
  butt={false}>
  </Store> </li>

  <li><Store 
  Course="Web desing using ON-Code"
  img='myPic/NoCode.PNG'
  date= {false} /> </li>

 <li> <Store 
  Course=" web desing for IOS usinf SwiftUI"
  img='myPic/IOS.PNG'
  date= {false} /> </li>


  <li><Store 
  Course="GIT & Githup"
  img='myPic/GitGithup.png'
  date= {false} /> </li>


  <li><Store 
  Course="Introdection in DecOps"
  img='myPic/Dvs.png'
  date= {false} /> </li>
   </ul>
   
 <Fot className="Footer-con"></Fot>
{/* <Login></Login>  */}

  </div>
  )
}

export default App;
