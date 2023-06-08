import { Sub } from "../types"
// Creamos la interface para las props, tiene una propiedad de que subs de tipo array con las siguientes propiedades
interface Props {
  subs: Array<Sub>
}


function List({ subs }: Props) {

  const renderList = (): JSX.Element[] => {
    return subs.map(sub => {
      return(<li key={sub.nick} >
        <img src={sub.avatar} alt={`Avatar for ${sub.nick}`}  />
        <h4 >{sub.nick} (<small>{sub.subMonths}</small>)</h4>
        <p>{sub.description?.substring(0, 100)}</p>
      </li>
      )
    })

  }

  return (
    <ul >
      {renderList()}
    </ul>
  );
}

export default List;