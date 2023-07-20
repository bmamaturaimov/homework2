import { useState } from 'react';
import './App.css';
import Delete from './componente/Delete';
import Input from './componente/Input';

function App() {

  
  const array=[]
  const [state2,setState2]=useState(array)
  
  function save(obj){
    setState2((newArr)=>[...newArr,obj])
  }

  const delet = (id)=>{
    const arr = state2.filter((el)=>{
      if (el.id !== id){
        return el
      }
    })
    setState2 (arr)
  }
  //  function save (obj) {
  //   console.log(obj);
  //  }

  return (
    <div className="App">
      <Input onSave={save}/>
    {state2.map((el)=>{
      return(

        <Delete onDelete={delet} key={el.id} name={el.name} id={el.id}/>
      )

    })}
    


    </div>
  );
}

export default App;
