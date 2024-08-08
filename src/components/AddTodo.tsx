import React, { useState } from "react";
import { AiTwotonePlusCircle } from "react-icons/ai";
import { CREATE_TODO } from "../queries";
import { useMutation } from "@apollo/client";

interface AddTodoProps {
    onCreate: () => {};
  }


const AddTodo: React.FC<AddTodoProps> = ({onCreate}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const [addTodo] = useMutation(CREATE_TODO, {
        variables: { input: { name, description } },
        onCompleted: () => {
          setName(''); // Clear input field after successful addition
          setDescription('');
        },
        onError: (err) => {
          console.error('Error adding todo:', err);
        },
      });
    
      const addTodoAction = async () => {
        try {
          await addTodo();
          onCreate();
        } catch (e) {
          console.error('Error executing addTodo mutation:', e);
        }
      };
    return (
        <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center'>
            <div className='w-70'>
                <input type="text" value={name} onChange= {(e) => setName(e.target.value)} placeholder="Enter name" className="text-2xl font-bold mb-4"></input>
                <input type="text" value={description} onChange= {(e: any) => setDescription(e.target.value)} placeholder="Enter description" className='text-2xl'></input>
            </div>
            <div className='content-center w-30' onClick={() => addTodoAction()} >
                <AiTwotonePlusCircle  />
                <p className="items-center"> Add</p>
            </div>
        </div>
    )
}
export default AddTodo;