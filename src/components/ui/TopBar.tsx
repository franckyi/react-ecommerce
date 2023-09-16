import { Link } from 'react-router-dom';

export default function TopBar() {
    return (
        <nav className='top-bar'>
            <a href="tel:004812345678">+48 123 45 678</a>
            <a href="mailto:support@ecommerce.com">support@ecommerce.com</a>
            <Link to="/about">Amazing Shopping platform for everyone!</Link>
        </nav>
    );
}
