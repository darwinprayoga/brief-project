import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Post() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [state, setState] = useState(null)

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'GET' })
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.error(err)
                return null
            })

    }, [setState])

    return (
        <div className='m-8 md:m-14'>
            <button onClick={() => navigate('/')}>
                <h3 className='text-blue-700'>Back</h3>
            </button>
            {state &&
                <div className='grid grid-cols-1 md:grid-cols-3 md:flex-row mt-6'>
                    <img className='col-span-1 mb-6 md:mb-0' src="/1.jpg" />
                    <span className='col-span-2 md:pl-8'>
                        <h2 className='mb-4'>{state.title}</h2>
                        <p className='mb-14'>{state.body}</p>
                        <p>{new Date().toDateString()}</p>
                    </span>
                </div>}
        </div>
    )
}
