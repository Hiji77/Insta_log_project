import logo from './logo.svg';
import './App.css';
import { renderIntoDocument } from 'react-dom/test-utils';
import {useState} from 'react';
import { type } from '@testing-library/user-event/dist/type';

function Instalogo(){
  return(
<div >
        <img className='insta-img' src="https://fontmeme.com/images/instagram-new-logo.png"></img>
      </div>
  )
}
function Login(props){
  return(
<div className='log-id'>
        <input type="text" placeholder={props.title}></input>
    </div>
  )
}
function Password(){
  return(
    <div className='log-pass'>
    <input type="password" placeholder='비말번호'></input>
  </div>
  )
}
function Logbtn(props){
  return(
    <div>
    <button onClick={(event)=>{
        props.onChageMode();  
    }}>로그인</button>
    </div>
  )
}
function Facebook(){
  return(
    <div>
      <p><h5 className='facebook'> 
      <a href='https://www.facebook.com'>Facebook으로 로그인</a>
      </h5></p>
    </div>
  )
}
function Forget(){
  return(
    <div>
    <p className='forget'>비밀번호를 잊으셨나요?</p>
    </div>
  )
}

function App() {
// 아이디 값, pw 갑 주기
// 
 
let [ID, SetID]= useState('kkdesign')

  const Answerid= ID.includes('@')  
  
    console.log(Answerid); 
     return(
 <div> 

    <div className='logwrrap'>

    <Instalogo></Instalogo>
    <Login title='전화번호, 사용자 이름 또는 메일'></Login>
    <Password></Password>
    <Logbtn onChageMode={()=>{
      alert('hi')
    }}></Logbtn> 
    <Facebook></Facebook>
    <Forget></Forget>


    </div>
 </div>
 );
}

export default App;
