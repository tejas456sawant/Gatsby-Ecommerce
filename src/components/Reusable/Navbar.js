import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import { FaCartArrowDown } from "react-icons/fa"

const Navbar = () => {
  const [state, setstate] = useState({
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    menus: [
      { id: 1, text: "Home", url: "/" },
      { id: 2, text: "About", url: "/about" },
      { id: 3, text: "Services", url: "/services" },
      { id: 4, text: "Contact", url: "/contact" },
    ],
  })

  const { navbarClass, navbarState, menus } = state

  const myToggler = () => {
    navbarState
      ? setstate({
          ...state,
          navbarState: false,
          navbarClass: "collapse navbar-collapse ",
        })
      : setstate({
          ...state,
          navbarState: true,
          navbarClass: "collapse navbar-collapse show",
        })
  }

  return (
    <nav className="navbar navbar-expand-sm bg-theme text-white">
      <Link to="/" className="navbar-brand ml-5">
        <img src={logo} alt="Logo" width="40px" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => myToggler()}
      >
        <span className="text-white">Menu</span>
      </button>
      <div className={navbarClass}>
        <ul className="navbar-nav ml-auto mr-5">
          {menus.map(menu => (
            <li className="nav-item" key={menu.id}>
              <Link to={menu.url} className="nav-link text-white" key={menu.id}>
                {menu.text}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              <FaCartArrowDown className="cart-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
