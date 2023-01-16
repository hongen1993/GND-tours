import "./HomePage.scss"

import HeaderSection from "../../section/HeaderSection/HeaderSection"
import AboutToursSection from "../../section/AboutToursSection/AboutToursSection"
import FeaturesSection from "../../section/FeaturesSection/FeaturesSection"
import ToursSection from "../../section/ToursSection/ToursSection"
import StoriesSection from "../../section/StoriesSection/StoriesSection"

const HomePage = () => {
  return (
    <>
      <HeaderSection />
      <main>
        <AboutToursSection />
        <FeaturesSection />
        <ToursSection />
        <StoriesSection />
      </main>
    </>
  )
}

export default HomePage
