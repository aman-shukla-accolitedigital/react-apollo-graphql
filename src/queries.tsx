import { gql } from '@apollo/client';

export const LIST_TODOS = gql`
    query listTodos {
    listTodos {
        items {
        id
        name
        when
        where
        description
        }
    }
    }
`;

export const DELETE_TODO = gql`
    mutation DeleteTodo($input: DeleteTodoInput!) {
        deleteTodo(input: $input) {
        id
    }
  }
`;

export const CREATE_TODO = gql`
  mutation AddTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
        id
        name
        description
    }
  }
`;