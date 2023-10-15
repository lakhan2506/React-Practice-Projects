import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../hooks/use-http';

const NewTask = (props) => {
  const {isLoading,error,sendRequest:sendTaskRequest} = useHttp()

  const enterTaskHandler = async (taskText) => {
    const createTask= (taskData)=>{
      const createdTask = { id:taskData.name, text: taskText };

      props.onAddTask(createdTask);
    }

    sendTaskRequest({
      url:'https://react-practic-762f2-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: { text: taskText },
      headers: {
          'Content-Type': 'application/json',
      },
    },createTask);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
