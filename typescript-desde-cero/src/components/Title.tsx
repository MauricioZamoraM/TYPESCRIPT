import React, { ReactNode } from 'react';
// Definimos la interface para las props del componente, en este caso children
interface Props {
  children: ReactNode;
}

const List: React.FC<Props> = ({children}) => {
  return (
    <>
    {children}
    </>
   );
}
 
export default List;