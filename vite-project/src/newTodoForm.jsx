import { useState } from 'react'

export function NewTodoForm ( {addTodo} ) {
    const [newItem, setNewItem] = useState('')


    function handleSubmit(e) {
        e.preventDefault()

        if (newItem === "") return

        addTodo(newItem)
    
        // setTodos(currentTodos => {
        //   return [
        //     ...currentTodos,
        //     { id: uuidv4(), title: newItem, completed:
        //     false },
        //     ]
        // })
        
        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input type="text"
            onChange={e => setNewItem(e.target.value)} 
            value={newItem} 
            id="item"
          />
        </div>
        <button className='btn'>Add</button>
      </form>
    )
}