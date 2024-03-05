import React, {useEffect, useState} from 'react';
import TableTr from './components/TableTr.jsx';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  // 서버에 데이터 요청
  useEffect(()=>{    
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(res=>res.json())
      .then(res=>{
        setData(res)
      });
  }, [])

  return (
    <div className="App">
      <table>
        <tbody>
          {
            data.map((el,i)=> {
              return (
                <TableTr key={`tr-${i}`} item={el}/>
              )
            })
          }          
        </tbody>        
      </table>
    </div>
  );
}

export default App;
