import React from 'react'

const Form = () => {
    return (
        <form className='mb-4 front-primary w-full'>
            <input type="text" className='outline-none bg-transparent border 
            border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300'
            placeholder='Qual são suas tarefas hoje?'/>
            <button className='bg-purple-700 border-none p-10 
            text-white cursor-poiter rounded ml-2'>Adicionar tarefa</button>
        </form>
    )
}

export default Form