import './App.css';
import { useState } from 'react';
function App() {
  const [newitem,setNewitem]=useState("");
  const [items,setitems]=useState([])

  const adding=()=>{
   const item={
    id:Math.floor(Math.random()*1000),
    value:newitem
   };
   setitems(oldlist=>[...oldlist,item])
   setNewitem("")
   console.log(items)
  }
  const deleteitem=(id)=>
  {
const newarray=items.filter(item=>item.id !==id);
setitems(newarray)
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <div className='inpdiv'>
          <h1 className='titl'>To-Do Application</h1>
          <input type='text' placeholder='Enter Task 'onChange={e=>setNewitem(e.target.value)} value={newitem} className='inp'></input><button className='addbut' onClick={adding}>ADD</button>
        </div>
        
          {items.map(item=>{
            return(<div className='items' key={item.id}><h2 className='indivitem'>{item.value}</h2> <button className='buton' onClick={()=>deleteitem(item.id)}>Delete</button></div>)
          })}
            
      </header>
    </div>
  );
}

export default App;
