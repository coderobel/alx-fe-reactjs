import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';

export default function App() {
 return (
  <Router>
    <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/profile">Profile</Link>
    </nav>

    <Routes>
        <Route path="/" element={<Home />} />

        {/* Nested Routes under Profile */}
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
  </Router>
 ); 
}


