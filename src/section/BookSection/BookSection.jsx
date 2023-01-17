import "./BookSection.scss"

import Heading from "../../components/Heading/Heading"
import Button from "../../components/Button/Button"

const BookSection = () => {

    const sectionTitle = 'Contact us'

    const fGroup = 'form__group'
    const fInput = 'form__input'
    const fLabel = 'form__label'
    const name = 'name'
    const email = 'email'

    const fRGroup = 'form__radio-group'
    const fRInput = 'form__radio-input'
    const fRLabel = 'form__radio-label'
    const fRButton = 'form__radio-button'

    const rd = 'radio'

    return (
        <section className="section-book" id="section-book">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <form action="#" className="form">
                            <div className="u-center-text u-margin-bottom-medium">
                                <Heading HeadingNum={'h2'} headingClass={'secondary'} children={sectionTitle} />
                            </div>
                            <div className={fGroup}>
                                <input type="text" className={fInput} placeholder="Full Name" id={name} required />
                                <label for={name} className={fLabel}>Full name</label>
                            </div>
                            <div className={fGroup}>
                                <input type={email} className={fInput} placeholder="Email address" id={email} required />
                                <label for={email} className={fLabel}>Email address</label>
                            </div>
                            <div className={`${fGroup} u-margin-bottom-medium`}>
                                <div className={fRGroup}>
                                    <input type={rd} className={fRInput} id="small" name="size" />
                                    <label for="small" className={fRLabel}>
                                        <span className={fRButton}></span>
                                        Tour information</label>
                                </div>
                                <div className={fRGroup}>
                                    <input type={rd} className={fRInput} id="large" name="size" />
                                    <label for="large" className={fRLabel}>
                                        <span className={fRButton}></span>
                                        Book tour</label>
                                </div>
                            </div>
                            <div className={fGroup}>
                                <Button color={'blue'} >Next step &rarr;</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookSection