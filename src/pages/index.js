import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero.png"
import thumbnailCombinedMockup from "../../static/images/combined-mockup.png"
import thumbnailPhoneFavorites from "../../static/images/phone-favorites.png"
import thumbnailFacebook from "../../static/images/facebook-login.png"
import thumbnailTrack from "../../static/images/desktop-screenshot.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Avoid Traffic and Road Rage" />

    <div className={"page-header home"}>
      <h1>Avoid Road Rage</h1>
      <p>
        Get notified when traffic dies down so you can avoid traffic & save
        time.
      </p>
      <img alt={"Dashboard"} src={featureImage} />
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Track Conditions"} src={thumbnailTrack} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Track travel time on specific routes</h2>
                <p>
                  Save time and energy by letting Roadgauge monitor traffic
                  conditions for you and let you know when's a good time to
                  leave
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Use on your PC or mobile</h2>
                <p>
                  Roadgauge is a Progressive Web App and works just as well on
                  PCs and mobile devices
                  <span className={"sup"}>1</span>.
                </p>
              </div>
            </div>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Phone & PC"} src={thumbnailCombinedMockup} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Phone Favorites"} src={thumbnailPhoneFavorites} />
              </div>
            </div>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Add Favorites</h2>
                <p>
                  Add your favorite places and routes to view current travel
                  time, start tracking & navigate easily from one screen.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Sync data across multiple devices</h2>
                <p>
                  Optionally login with Facebook (other integrations coming
                  soon) to access your data across multiple devices.
                </p>
              </div>
            </div>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Users"} src={thumbnailFacebook} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={"call-to-action"}>
      <div className={"container"}>
        <div className={"call-to-action__content"}>
          <h2>Use without logging in</h2>
          <p>No login or account creation require to start tracking routes!</p>
        </div>

        <div className={"button"}>
          <a href="https://roadgauge.app" target={"_blank"}>
            Get Started
          </a>
        </div>
      </div>
    </div>
    <div className={"container"}>
      <div className={"footnotes"}>
        <div className={"row"}>
          <p>
            1. Push notifications work on PC, Mac & Android, but not yet on iOS.
            We have a native app in development that will enable notifications
            on iOS as well.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
