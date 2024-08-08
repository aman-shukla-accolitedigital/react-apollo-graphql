
import { useQuery } from '@apollo/client';
import TodoItem from './components/TodoItem';
import { LIST_TODOS } from './queries';
import AddTodo from './components/AddTodo';


interface DataPros {
  id: string;
  name: string;
  description: string;
}

function App() {
  const { loading, error, data, refetch  } = useQuery(LIST_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    const items: DataPros[] = data?.listTodos?.items;

  return (
    <div className='space-y-4'>
      <h1 className='text-2xl font-bold mb-4 text-center'> List of TODOS</h1>
      <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center'>
      
        <ul>
          {items.map(({ id, name, description } ) => (
            <TodoItem 
            key={id}
            id = {id}
            name = {name}
            description = {description}
            onDelete={refetch}
            />
          
          ))}
        </ul>

      </div>
      <AddTodo
      onCreate = {refetch}
      />
    </div>
  );
}

export default App;
