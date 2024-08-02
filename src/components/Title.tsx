import { useNavigate } from 'react-router-dom';

interface TitleProps {
    name: string;
    size?: string;
    goBackButton?: boolean
}

function Title({name, size, goBackButton}: TitleProps) {
  const navigate = useNavigate();

  return (
    <div className={`h-10 flex items-center gap-2 text-${size ?? 'xl'}`}>
      {goBackButton && <div className='hover:cursor-pointer' onClick={() => navigate(-1)}>←</div>}
      <h3>{name}</h3>
    </div>
  )
}

export default Title