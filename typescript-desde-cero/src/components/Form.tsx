import * as React from 'react';
import { Sub } from '../types';
import useNewSubForm from '../hooks/useNewSubForm';

interface FormProps {
  onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
}


const Form = ({ onNewSub }: FormProps) => {
  //const [inputValues, setInputValues] = useState<FormState['inputValues']>(INITIAL_STATE);

  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(subs => [...subs, inputValues])
    dispatch({ type: 'clear' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value
      }
    })
    // setInputValues({
    //   ...inputValues,
    //   [e.target.name]: e.target.value
    // })
  }

  const handleClear = () => {
    dispatch({ type: 'clear' })

    // setInputValues({
    //   nick: '',
    //   avatar: '',
    //   subMonths: 0,
    //   description: ''
    // })
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
        <input onChange={handleChange} value={inputValues.subMonths} type="subMonths" name="subMonths" placeholder="subMonths" />
        <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
        <input onChange={handleChange} value={inputValues.description} type="text" name="description" placeholder="description" />
        <button>Save</button>
      </form>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default Form;