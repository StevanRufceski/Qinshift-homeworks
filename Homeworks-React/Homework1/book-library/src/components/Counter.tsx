interface CounterProps {
    numberOfBooks: number
}
export function Counter (props: CounterProps) {
    return (
        <div style={{color: "darkblue"}}>Total number of books: {props.numberOfBooks}</div>
    )
}
