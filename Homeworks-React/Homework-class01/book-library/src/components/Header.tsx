interface HeaderProps{
    title: string
    username: string
}
export function Header (props: HeaderProps) {
    return (
        <header>
            <h1>{props.username} - {props.title}</h1>
        </header>
    )
}