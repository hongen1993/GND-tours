import HeaderSection from "../../section/HeaderSection/HeaderSection"
import AboutToursSection from "../../section/AboutToursSection/AboutToursSection"
import FeaturesSection from "../../section/FeaturesSection/FeaturesSection"
import ToursSection from "../../section/ToursSection/ToursSection"
import StoriesSection from "../../section/StoriesSection/StoriesSection"
import BookSection from "../../section/BookSection/BookSection"
import FooterSection from "../../section/FooterSection/FooterSection"
import Terms from "../../components/Terms/Terms"

const HomePage = () => {
  return (
    <>
      <HeaderSection />
      <main>
        <AboutToursSection />
        <FeaturesSection />
        <ToursSection />
        <StoriesSection />
        <BookSection />
      </main>
      <FooterSection />
      <Terms />
    </>
  )
}

export default HomePage