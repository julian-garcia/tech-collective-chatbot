import React from "react"
import PropTypes from "prop-types"
import "../style/main.scss"
import { FaTwitter, FaLinkedinIn, FaLink } from 'react-icons/fa';
import logoImg from "../images/logo.png"

const Layout = ({ children }) => {
  return (
    <>
      <header style={{float:'left',marginLeft:'1rem'}}>
        <a href="https://collective.tech/" target="_blank" rel="noreferrer"><img src={logoImg} alt="" style={{width:'50px'}} /> </a>
      </header>
      <main className="content">{children}</main>
      <footer className="footer">
        <div>
          <a href="https://twitter.com/richardcrng" target="_blank" rel="noreferrer"> <FaTwitter className="footer-social-icon" /> </a>
          <a href="https://www.linkedin.com/in/richardcrng" target="_blank" rel="noreferrer"> <FaLinkedinIn className="footer-social-icon" /> </a>
          <a href="https://techcollective.substack.com" target="_blank" rel="noreferrer"> <FaLink className="footer-social-icon" /> </a>
        </div>
        <p>&copy; Copyright {new Date().getFullYear()}. Tech Collective Group LTD</p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
