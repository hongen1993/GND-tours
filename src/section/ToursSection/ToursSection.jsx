import "./ToursSection.scss"
import Card from "../../components/Card/Card"

const Tours = () => {

    const titleA = 'Patronage of Alhambra'
    const titleB = 'Sierra de Castril'
    const titleC = 'Sierra Nevada'

    const listA =
        <ul>
            <li>1 day tour</li>
            <li>Up to 10 people</li>
            <li>Alhambra, Generalife and Alcazaba </li>
            <li>Hotel Al'Andalus 5 Stars</li>
        </ul>
    const listB =
        <ul>
            <li>3 day tour</li>
            <li>Up to 8 people</li>
            <li>Osa, Buitre and Magdalena routes</li>
            <li>Rutal Hotel Cazorla 5 Stars</li>
        </ul>
    const listC =
        <ul>
            <li>5 day tour</li>
            <li>Up to 5 people</li>
            <li>Ski, snowboard, russian sleigh and much more!</li>
            <li>Difficulty: hard</li>
        </ul>

    const priceA = '199'
    const priceB = '429'
    const priceC = '1200'

    const card1 = 1
    const card2 = 2
    const card3 = 3

    return (
        <section className="section-tours" id="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Choose your tour
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-3">
                    <Card cardNumber={card1} title={titleA} list={listA} price={priceA} />
                </div>
                <div className="col-1-of-3">
                    <Card cardNumber={card2} title={titleB} list={listB} price={priceB} />
                </div>
                <div className="col-1-of-3">
                    <Card cardNumber={card3} title={titleC} list={listC} price={priceC} />
                </div>
            </div>
            <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn btn--green">Discover all tours</a>
            </div>
        </section>

    )
}

export default Tours