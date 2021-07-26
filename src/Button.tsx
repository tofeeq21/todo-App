
type btnProps={
    color: string;
    text:string;
    onClick:  () => void;
}
const Button: React.FC<btnProps> = (btnProps) => {
    return <button onClick={btnProps.onClick} style={{backgroundColor: btnProps.color }} className="btn">{btnProps.text}</button>;
}

export default Button
