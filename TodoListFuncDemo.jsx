import React,{useState} from 'react'
const TodoListFuncDemo =()=>{
    const [item,setItem] = useState('');
    const[items,setItems]=useState([]);
    const addItem=()=>{
        setItems([...items,item]);
        setItem('');
    };
    const deleteItem=(index)=>{
        setItems(items.filter((item,id)=>id!==index));
    }
    return(
        <div>
        <input type="text" value={item}  placeholder="Add Item" onChange={(e)=> setItem(e.target.value)}/>
        &nbsp;&nbsp;
        <button onClick={addItem}>ADD</button>
        <ol>
            {items.map((item,index)=>(
            <li key={index}>{item}
            <button onClick={()=>deleteItem(index)}>DELETE</button></li>
            )
            )}
        </ol>
    </div>
    )
}
export default TodoListFuncDemo;