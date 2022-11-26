import { Link } from 'react-router-dom'
const Sidebar = ()=>{
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/" className='btn btn-primary'>Servicios</Link>
                </li>               
                <li>
                    <Link to="/usuarios" className='btn btn-secondary'>Usuarios</Link> 
                </li>
                <li>
                    <Link to="/carros" className='btn btn-secondary'>Carros</Link> 
                </li>
            </ul>
        </div>
    )
}
export default Sidebar