import { Main } from '../../Layouts/Main/Main'
import { useState } from 'react'
import { ItemTitles } from '../../components/ItemTitles/ItemTitles'
export const Counter = () => {
    const [count, setCount] = useState(0)
    const [timeoutId, setTimeoutId] = useState(null)

    const start = () => {
        if (!timeoutId) {
            const id = setTimeout(function increment() {
                setCount(prev => prev + 1)
                const newId = setTimeout(increment, 1000)
                setTimeoutId(newId)
            }, 1000)

            setTimeoutId(id)
        }
    }

    const counterStop = () => {
        clearTimeout(timeoutId)
        setTimeoutId(null)
        setCount(0)
    }

    return (
        <Main className="flex flex-col items-center space-y-4 p-4">
            <ItemTitles content={count} styles="text-4xl font-bold text-gray-200"/>
            <div className="flex space-x-4">
                <button onClick={start}  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all">Empezar Contador</button>
                <button onClick={counterStop} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all">Detener Contador</button>
            </div>
        </Main>
    )
}
