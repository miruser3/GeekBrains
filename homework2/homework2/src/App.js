import './App.css';
import React, {useState, useEffect} from 'react';
function App() {
  const [MessagesList,setmassage] = useState([]);
  const [name,setname] = useState('');
  const [auto,setauto] = useState('');
  const handchange=(event)=>{setname(event.target.value)}
  const handchange1=(event)=>{setauto(event.target.value)}
  const addmassege =()=>{
    setmassage([...MessagesList,{name:name,auto:auto,id:2}])
  }
  useEffect(()=>{
    setTimeout(() => {
      alert('You clicked on: ');
    }, 3000);
  },[MessagesList])
  return(
    <div>
      <input value={name} onChange={handchange}></input>
      <input value={auto} onChange={handchange1}></input>
      <button onClick={addmassege}>отправке сообщения</button>
      {MessagesList.map((message)=>{return(<div key={message.id}><div>{message.name}</div><div>{message.auto}</div></div>)})}
    </div>
  );
}

export default App;
