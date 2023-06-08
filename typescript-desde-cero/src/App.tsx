import { useState, useEffect, useRef } from 'react'
import './App.css'
import List from './components/List'
import Title from './components/Title'
import Form from './components/Form'
import { Sub, SubsResponseFromApi } from './types'
import axios from 'axios'
import DatosApi from './components/DatosApi'
// Las interfaces de logica de negocio deben de almacenarse en un archivo aparte llamado types.d.ts, las que son muy especifcas para el componente y no se suelen reutilizar las podemos crean en el componente.
// Una interface es como el contrato que tiene que tener un objeto

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([]);
  const [info, setInfo] = useState<SubsResponseFromApi>([]);

  const divRef = useRef<HTMLDivElement>(null);

  const getInfo = async () => {
    await axios.get<SubsResponseFromApi>('http://localhost:5000/subs')
      .then(response => {
        setInfo(response.data)
      }
      )
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (

    <div className="App" ref={divRef}>
      <Title>
        <h1>Subscriptores</h1>
      </Title>
      <h1 >Mau subs</h1>
      <List subs={subs} />
      <Form onNewSub={setSubs} />

      <>
        <h2>Peticion a api asincrona</h2>
        {info.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          info.map((el) => (
            <DatosApi
              nick={el.nick}
              months={el.months}
              profileUrl={el.profileUrl}
              description={el.description}
            />
          ))
        )}
      </>
    </div>
  )
}

export default App
