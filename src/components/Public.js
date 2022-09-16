import { Link } from 'react-router-dom';

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Jovial Penguin!</span></h1>
            </header>
            <main className="public__main">
                <p>In any situation, our design team is ready to meet your needs!</p>
                <address className="public__addr">
                    Jovial Penguin<br />
                    8607 NW 4th Ave.<br />
                    Vancouver, WA 98605<br />
                    <a href="tel:+15024164155">(502) 416-4155</a>
                </address>
                <br />
                <p>Owner: Jesse Pence</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}

export default Public