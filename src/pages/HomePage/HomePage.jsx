import "./HomePage.scss"

import Header from "../../components/Header/Header"
import AboutTours from "../../components/AboutTours/AboutTours"
import Features from "../../components/Features/Features"


const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <AboutTours />
        <Features />
      </main>
    </>
  )
}

export default HomePage
