import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventCard from "../components/EventCard"

import oddColony from "../images/odd-colony-1.jpg"
import firstAngularSite from "../images/my-first-angular-site.jpeg"

const EventsPage = () => (
  <Layout>
    <SEO title="Events" />

    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      <h1 className="font-bold text-2xl sm:text-4xl mt-10">Events</h1>
      <p className="text-center sm:text-xl py-10">
        Come see what's going on with Pensacola Developers!
      </p>
    </section>

    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      <EventCard
        day="Tue"
        date="Mar 10"
        time="6:00 PM"
        title="Getting Started with Angular"
        location="cowork@nnex"
        photo={firstAngularSite}
        description="It's finally here! Our first workshop is going to take place at cowork@annex on Palafox. Based on some feedback we received, we deviated a little from the original plan. We're going to jump in to development with Angular and show you how to build your first custom site using this all inclusive platform. Check back for details on what you need as a pre-setup for the workshop!"
      />

      <EventCard
        day="Tue"
        date="Feb 18"
        time="6:00 PM"
        title="Coding Social"
        location="Odd Colony Brewing Company"
        photo={oddColony}
        description="Come hang out and talk shop! Veteran and newbie coders feel free to come talk projects, share resources, and cut loose!"
      />
    </section>
  </Layout>
)

export default EventsPage
