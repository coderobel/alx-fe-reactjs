import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <>
          <div>
            <div style={{margin: '20px'}}>
                <Link to="/" style={{color: 'black', fontSize: '20px'}}>Home</Link>
            </div>
            <div style={{margin: '20px'}}>
                <Link to="/about" style={{color: 'black', fontSize: '20px'}}>About</Link>
            </div>
            <div style={{margin: '20px'}}>
                <Link to="/services" style={{color: 'black', fontSize: '20px'}}>Serivces</Link>
            </div>
            <div style={{margin: '20px', fontSize: '20px'}}>
                <Link to="/contact" style={{color: 'black'}}>Contact</Link>
            </div>
          </div>
        </>
    );
}