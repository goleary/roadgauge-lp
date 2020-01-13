/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/logo-transparent.svg"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-6"}>
                <div className={"widget__item"}>
                  <div className={"logo"}>
                    <Link to="/" title={"Roadgauge"}>
                      <img alt={"Logo"} src={logo} />
                    </Link>
                  </div>

                  <div className={"about"}>
                    <p>
                      A software that was created to help people avoid traffic.
                    </p>
                  </div>
                </div>
              </div>

              <div className={"col-3"}>
                <div className={"widget__item"}>
                  <ul className={"links"}>
                    <h4>HiStaff</h4>
                    <ul>
                      <li>
                        <Link to="/about" title={"About Us"}>
                          About
                        </Link>
                      </li>
                      <li>
                        <a
                          className={"links__special"}
                          href={
                            "https://docs.google.com/forms/d/e/1FAIpQLSc9eU_oL19dgmnfMcQXov7aDBx3cvYef8xHX4btfxWLhZFU5Q/viewform"
                          }
                          target={"_blank"}
                          title={
                            "We look forward to receiving your great feedback"
                          }
                        >
                          Feedback
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>

              <div className={"col-3"}>
                <div className={"widget__item"}>
                  <div className={"links"}>
                    <h4>Support</h4>
                    <ul>
                      <li>
                        <Link to="/contact" title={"Contact Us"}>
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link to="/privacy" title={"Privacy Policy"}>
                          Privacy
                        </Link>
                      </li>
                      <li>
                        <Link to="/terms" title={"Terms Of Use"}>
                          Terms Of Use
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={"copyright"}>
              <p>
                Copyright {new Date().getFullYear()}, {` `}{" "}
                <a href="https://roadgauge.app" title={"Roadgauge"}>
                  Roadgauge
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
