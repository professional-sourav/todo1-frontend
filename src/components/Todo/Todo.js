import React from 'react'
import { MARK_COMPLETE, GET_TODOS } from './../../graphql/schema/todo';
import { useMutation } from '@apollo/client';

const Todo = ({ _id, content, completed }) => {

  const [markComplete, { data, loading, error }] = useMutation(MARK_COMPLETE, {
      refetchQueries: [GET_TODOS]
  });

  const handleMarkCompmete = (event, id) => {

    console.log(id);

    markComplete({
      variables: {
        id
      }
    });
  }

  return (
    <li id={_id}>
      <p>{ content } </p>  
      <strong>{ completed }</strong>
      <ul>
        <li>
          <button 
            type='button'      
            onClick={(event) => handleMarkCompmete(event, _id)}      
            disabled={completed}
          >
              {loading ? 'loading...' : 'Mark Complete'}
          </button>
        </li>
      </ul>
    </li>
  )
}

export default Todo
