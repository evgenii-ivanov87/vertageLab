import {NavLink} from 'react-router-dom'
 function HeaderComponent() {
     return (
         <div>
             <NavLink to="/">Home</NavLink>
             <NavLink to="/new">New</NavLink>
             <NavLink to="/edit/:id">Edit</NavLink>
        </div>
    )
}

export default HeaderComponent