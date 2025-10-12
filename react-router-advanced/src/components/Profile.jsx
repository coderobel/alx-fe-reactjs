import { Link, Outlet } from 'react-router-dom';

export default function Profile() {
    return (
        <div>
            <h1>User Profile</h1>

            <nav style={{ display: 'flex', gap: '1rem' }}>
                <Link to="details">Profile Details</Link>
                <Link to="settings">Profile Settings</Link>
            </nav>

            <hr />
            <OutLet />
        </div>
    );
}