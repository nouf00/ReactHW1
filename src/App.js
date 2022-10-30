// import logo from './logo.svg';
import './App.css';
import Nav from './comp/Nav';
import Fot from './comp/Fot';
import Store from './comp/Store';




function App() {
  return (
    <div >
  <Nav></Nav>
  
  <div className='contener'>
  <Store className='imgSwhaer' 
  Course="معسكر سواهر "
  img='myPic/Swaher.png'
  date= {true} /> 
  <Store 
  Course= " Figma من البداية حتى الاتقان باستخدام UI/UX"
  img='myPic/UI-UX.png'
  butt={false}>
  </Store> 
  <Store 
  Course=" No-Code دورة تصميم المواقع بمنهجية "
  img='myPic/NoCode.PNG'
  date= {false} /> 
  <Store 
  Course="  SwiftUIباستخدام ios دورة لتطوير تطبيقات"
  img='myPic/IOS.PNG'
  date= {false} /> 
  <Store 
  Course="GIT & Githup دورة "
  img='myPic/GitGithup.png'
  date= {false} /> 
  <Store 
  Course="DevOps مقدمة في "
  img='myPic/Dvs.png'
  date= {false} /> 

  
 </div>
 <Fot className="Footer-con"></Fot>
  </div>
  )
}

export default App;
