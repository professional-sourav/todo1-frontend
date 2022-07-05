import React, { useRef } from 'react'
import { useMutation } from '@apollo/client';
import { NEW_TODO } from '../../graphql/schema/todo';
import { GET_TODOS } from './../../graphql/schema/todo';

const NewTodo = () => {

    const [addTodo, { data, loading, error }] = useMutation(NEW_TODO, {
        refetchQueries: [GET_TODOS]
    });

    const contentref = useRef();

    const handleAddTodo = (event) => {

        event.preventDefault();

        console.log(contentref.current.value);

        addTodo({
            variables: {
                content: contentref.current.value
            },
            onCompleted: (data) => console.log(data)
        });
    }

    return (
        <div>
            {
                loading ? 'Submitting...' : ''
            }
            {
                error ? `Submission error! ${error.message}` : ""
            }
            <form>
                <div className='formControl'>
                    <label htmlFor="input_todo">Todo: </label>
                    <input 
                    type="text" 
                    ref={contentref}
                    placeholder="Enter the todo"
                    id="input_todo" />
                    <button
                    className='btn'
                    onClick={handleAddTodo}>Add</button>
                </div>
            </form>
        </div>
    )
}

export default NewTodo