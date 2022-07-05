import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import { GET_TODOS } from './../../graphql/schema/todo';
import Todo from './Todo';
import NewTodo from './NewTodo';
import client from './../../graphql/graphql';

const Todos = () => {

    const { loading, error, data }  = useQuery(GET_TODOS);

    return (
        <div> 
        <h4>All Todos</h4>
        <ul>
        {
            loading 
                ? <li>Loading...</li> 
                : data.todos.map( 
                    (todo, index) => <Todo key={index} {...todo} /> 
                )
        }
        </ul>
        <NewTodo />
        </div>
    )
}

export default Todos
