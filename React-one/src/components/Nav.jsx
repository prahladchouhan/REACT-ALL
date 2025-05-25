import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div className="flex justify-center gap-10  font-semibold text-2xl">
        <NavLink  className={(e)=>(e.isActive ? "text-amber-800" : "")} to="/">Home</NavLink>
        <NavLink  className={(e)=>(e.isActive ? "text-amber-800" : "")} to="/product">Product</NavLink>
        <NavLink className={(e)=>(e.isActive ? "text-amber-800" : "")}  to="/service">Service</NavLink>
        <NavLink  className={(e)=>(e.isActive ? "text-amber-800" : "")} to="/about">About</NavLink>
        
      
    </div>
  )
}

export default Nav
