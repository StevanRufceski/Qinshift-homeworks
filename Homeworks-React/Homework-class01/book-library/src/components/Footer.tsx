export function Footer () {
    const date = new Date().toDateString();
    return (
        <footer>
            <p>{date}</p>
        </footer>
    )
}