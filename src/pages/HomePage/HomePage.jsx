import "./HomePage.scss"

import Header from "../../components/Header/Header"
import AboutTours from "../../components/AboutTours/AboutTours"


const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <AboutTours />
      </main>
    </>
  )
}

export default HomePage
