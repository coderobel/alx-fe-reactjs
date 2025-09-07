import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <>
          <div style={{backgroundColor: 'lightgrey', display: 'flex', flexDirection: 'row', height: '590px', width: '1100px', justifyContent: "flex-start"}}>
            <div style={{ marginTop: '20px', marginLeft: '50px'}}>
                <Link to="/" style={{boxSizing: "border-box", color: 'black', fontSize: '20px'}}>Home</Link>
            </div>
            <div style={{boxSizing: "border-box", marginTop: '20px', marginLeft: '50px'}}>
                <Link to="/about" style={{color: 'black', fontSize: '20px'}}>About</Link>
            </div>
            <div style={{boxSizing: "border-box", marginTop: '20px', marginLeft: '50px'}}>
                <Link to="/services" style={{color: 'black', fontSize: '20px'}}>Serivces</Link>
            </div>
            <div style={{marginTop: '20px', marginLeft: '50px'}}>
                <Link to="/contact" style={{color: 'black', fontSize: '20px'}}>Contact</Link>
            </div>
          </div>
        </>
    );
}