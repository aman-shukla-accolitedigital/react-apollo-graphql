
import { useMutation } from '@apollo/client';
import { DELETE_TODO, LIST_TODOS } from '../queries';
import { AiOutlineDelete  } from "react-icons/ai";
import React from 'react';

interface TodoProps {
    id: string;
    name: string;
    description: string;
    onDelete: () => {};
  }

const TodoItem: React.FC<TodoProps> = ({id, name, description, onDelete}) => {

    const [deleteTodo] = useMutation(DELETE_TODO, {
      variables: {input: { id }},
      onCompleted: () => {
        // Optionally handle what happens after a successful deletion
        console.log('Todo deleted successfully');
      },
      refetchQueries: [
        // Refetch the queries to update the UI, if needed
         { query: LIST_TODOS },
      ],
    });
  
    const deleteItems = async () => {
  
      try {
        await deleteTodo();
        onDelete();
      } catch (e) {
        console.error('Error deleting todo:', e);
      }
    }
  
    return ( 
    <li className='p-6 flex flex-row' key={id}>
      <div className='w-64'>
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className='text-2xl'>{description}</p>
      </div>
      <div className='content-center'>
        <AiOutlineDelete onClick={() => deleteItems()} />
      </div>
    </li>);
  }
  export default TodoItem;