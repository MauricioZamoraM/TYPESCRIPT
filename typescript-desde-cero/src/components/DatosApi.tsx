
interface Props {
  nick: string,
  months: number,
  profileUrl: string,
  description: string
}

const DatosApi:React.FC<Props> = ({ nick, months, profileUrl, description }) => {
  return (
    <div style={{border:'1px solid black'}}>
      <p>nick{nick}</p>
      <p>months{months}</p>
      <p>profileUrl{profileUrl}</p>
      <p>description{description}</p>
    </div>
  );
}

export default DatosApi;