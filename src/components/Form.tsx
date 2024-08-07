import React  from 'react';
import { useState } from 'react';

const Form = ({createTodo}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        createTodo(value);
        setValue('')
    }

    return (
        <form className='mb-4 front-primary w-full'onSubmit={handleSubmit}>
            <input type="text" className='outline-none bg-transparent border 
            border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300'
            placeholder='Qual são suas tarefas hoje?'onChange={(e) => setValue(e.target.value)} value={value}/>
            <button className='bg-gray-700 border-none p-2 
            text-white cursor-poiter rounded ml-2'>Adicionar tarefa</button>
        </form>
    )
}

export default Form