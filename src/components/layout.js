/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/main.scss";
import Sidebar from "./sidebar";
import "../scripts/gooey-bg";
import Menu from "./menu";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
      >
        <main className="main layout">
          <div className="layout-area layout--sidebar">
            <Sidebar/>
          </div>
          <div className="layout-area layout--main">
            <div className="layout-container">
              <Menu/>
              {children}
            </div>
            <canvas id="gooey-bg"></canvas>
          </div>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
