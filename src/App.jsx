import React from 'react';
import Home from './component/home';
import User from './component/user'
import Admin from './component/admin';
import Adminlist from './component/adminlist';
import { useState } from 'react';



const App = () => {
  const [members,setmembers]=useState([]);
  const addMember = (newMember)=>{
    setmembers([
      ...members,
      {...newMember,id:`pid-${members.length + 1}`}
    ]);
  }
  return (
    <>
    <Home/>
   <Admin addMember={addMember}/>
    <Adminlist members={members}/>
    <User users={members}/>
   
    </>
    
  );
};

export default App;

