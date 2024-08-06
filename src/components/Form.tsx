import React, { useState } from 'react'

const Form = () => {
    const [CSSMathValue, setValue] = useState('');

    function setValue(value: string): void {
        throw new Error('Function not implemented.')
    }

    return (
        <form className='mb-4 front-primary w-full' onSubmit={}>
            <input type="text" className='outline-none bg-transparent border 
            border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-black-300'
            placeholder='Qual são suas tarefas hoje?' onChange={(e) => setValue(e.target.value)}/>
            <button className='bg-purple-700 border-none p-10 
            text-white cursor-poiter rounded ml-2'>Adicionar tarefa</button>
        </form>
    )
}

export default Form