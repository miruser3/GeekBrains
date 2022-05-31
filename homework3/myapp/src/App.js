import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import common from './contans/common';
import { Fab, Paper, TextField } from '@mui/material';
import Send from '@mui/icons-material/Send';
import theme from './theme/theme';


function App() {
  const unputref = useRef()
  const Clickbutton = () => {
    unputref.current.focus()
  };
  const [masseglist, setmes] = useState([])
  const [name, setname] = useState('')
  const change = (event) => { setname(event.target.value) }
  const clockmeButton = () => {
    if (name !== '') {
      setmes([...masseglist, { name: name, auto: common.me, id: 2 }])
      setname('')
    }
  }
  useEffect(() => {
    if (masseglist.length > 0 && masseglist[masseglist.length - 1]?.auto === common.me) {
      setTimeout(() => {
        setmes([...masseglist, { name: 'Привет,это сообщения от бота', auto: common.bot }])
      }, 1500);
    }
  }, [masseglist])

  return (
    <div className='App-header'>
      <div>

      </div>
      <h1 className='my'>My Super  UP</h1>
      <Paper elevation={0}>
        <ul className='massegebox' >
          {masseglist.map((item) => {
            return (
              <div key={item.id}>
                <div className='massege' key={item.index}>
                  <div className='name'>{item.name}</div>
                  <div className='auto'>{item.auto}</div>
                </div>
              </div>)
          })}
        </ul>

      </Paper>

      <div className='controlplace'>

        <TextField type={'text'} value={name} onChange={change}
          style={{ margin: '20px' }}
          id="outlined-basic"
          label=" Введите сообщение"
          variant="outlined"
          autoFocus={true}
          ref={unputref}
        />
        <Fab color='primary'
          style={{ borderColor: theme.palette.secondary }}
          onClick={clockmeButton}><Send /></Fab>
      </div>


    </div>
  );

}

export default App;