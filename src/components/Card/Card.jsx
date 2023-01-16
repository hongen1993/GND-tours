import "./Card.scss"

const Card = ({ cardNumber, title, list, price }) => {
    return (
        <div className="card">
            <div className="card__side card__side--front">
                <div className={`card__picture card__picture--${cardNumber}`}>
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className={`card__heading-span card__heading-span--${cardNumber}`}>
                        {title}
                    </span>
                </h4>
                <div className="card__details">
                    {list}
                </div>
            </div>
            <div className={`card__side card__side--back card__side--back-${cardNumber}`}>
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">{price}€</p>
                    </div>
                    <a href="#popup" className="btn btn--white">Book now!</a>
                </div>
            </div>
        </div>
    )
}

export default Card