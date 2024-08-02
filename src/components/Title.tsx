interface TitleProps {
    name: string;
    size?: string;
}

function Title({name, size}: TitleProps) {
  return (
    <h3 className={`text-${size}`}>{name}</h3>
  )
}

export default Title