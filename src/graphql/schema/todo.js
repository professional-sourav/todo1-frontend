import { gql } from '@apollo/client';

export const GET_TODOS = gql`
    query GetTodos {
        todos {
            _id
            content
            completed
        }
    }
`;

export const NEW_TODO = gql`
    mutation AddTodo($content: String) {
        addTodo(content: $content) {
            content
        }
    }
`;

export const MARK_COMPLETE = gql`
   mutation MarkComplete($id: String) {
        markComplete(id: $id) {
            completed  
        }
    }
`;