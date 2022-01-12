import React, { useState } from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import logo from "../assets/images/logo.svg"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button
            className="nav-btn"
            onClick={() => {
              setShow(oldValue => !oldValue)
            }}
          >
            <FaBars />
          </button>
        </div>
        <div className={`nav-links ${show ? "show-links" : ""}`}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShow(false)
            }}
          >
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShow(false)
            }}
          >
            recipes
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShow(false)
            }}
          >
            tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShow(false)
            }}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link
              to="/contact"
              className="btn"
              onClick={() => {
                setShow(false)
              }}
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
