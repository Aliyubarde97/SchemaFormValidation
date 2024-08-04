
import './App.css'
import { z} from 'zod'
import { Resolver, zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';

 const schema = z.object({
  name: z.string().min(3, {message: 'atlist three character'}),
  age:z.number({invalid_type_error:'age filled is Required'}).min(18, {message:'age must be atlist 18'})
});

type  FormData = z.infer<typeof schema>

function App() {

  const {register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver:zodResolver(schema)});
  const onSubmit = (data:FieldValues ) => console.log(data)
  
    
  
 

  return (
    <>
      
     <form action="" onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label htmlFor="">Name</label><br />
        <input type="text" {...register('name')}  id='name' />
        {errors.name && (
          <p>{errors.name.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="">Age</label><br />
        <input type="number" {...register('age', {valueAsNumber: true})}  id='age' />
        {errors.age && (
          <p>{errors.age.message}</p>
        )}
      </div>

    <div><br />
      <input type="submit" value="submit" />
    </div>
     </form>
    </>
  )
}
export default App
