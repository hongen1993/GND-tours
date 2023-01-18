import "./BookSection.scss"
import { useState } from "react"

import Heading from "../../components/Heading/Heading"
import FormGroup from "../../components/FormGroup/FormGroup"
import RadioGroup from "../../components/RadioGroup/RadioGroup"

const BookSection = () => {

    const sectionTitle = 'Contact us'
    const bookTourTitle = 'Choose tour'
    const peopleTour = 'Number of people'

    const fGroup = 'form__group'

    const placeholderTextA = 'Full name'
    const placeholderTextB = 'Email address'
    const placeholderTextC = 'Adults'
    const placeholderTextD = 'Children'

    const radioTextA = 'Ask about a tour'
    const radioTextB = 'Book a tour'

    const [step, setStep] = useState(0)

    const nextClick = () => { setStep(step + 1) }
    const backClick = () => { setStep(step - 1) }

    return (
        <section className="section-book" id="section-book">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <form action="#" className="form">
                            <div className={`step-one ${step === 0 ? 'show' : ''} `}>

                                <div className="u-center-text u-margin-bottom-medium">
                                    <Heading HeadingNum={'h2'} headingClass={'secondary'} children={sectionTitle} />
                                </div>

                                <FormGroup inputType={"text"} placeholder={placeholderTextA} labelType={'name'} />
                                <FormGroup inputType={'email'} placeholder={placeholderTextB} labelType={'email'} />

                                <div className='form__group u-margin-bottom-small'>
                                    <RadioGroup labelType={'ask'} text={radioTextA} name={'contact'} />
                                    <RadioGroup labelType={'book'} text={radioTextB} name={'contact'} />
                                </div>
                                <div className={fGroup}>
                                    <button onClick={nextClick} className='btn btn--blue btn--animated' >Next step &rarr;</button>
                                </div>
                            </div>
                            <div className={`step-two ${step === 1 ? 'show' : ''} `}>
                                <div className='form__group u-margin-bottom-small'>

                                    <div className="u-center-text u-margin-bottom-medium">
                                        <Heading HeadingNum={'h3'} headingClass={'tertiary'} children={bookTourTitle} />
                                    </div>

                                    <RadioGroup labelType={'alhambra'} text={'Alhambra'} name={'tour'} classFont={'u-font-sm'} classWidth={'u-width'} />
                                    <RadioGroup labelType={'castril'} text={'Sierra de Castril'} name={'tour'} classFont={'u-font-sm'} classWidth={'u-width'} />
                                    <RadioGroup labelType={'nevada'} text={' Sierra Nevada'} name={'tour'} classFont={'u-font-sm'} classWidth={'u-width'} />

                                    <div className="u-center-text u-margin-bottom-small">
                                        <Heading HeadingNum={'h4'} headingClass={'tertiary'} children={peopleTour} />
                                    </div>

                                    <FormGroup inputType={'number'} placeholder={placeholderTextC} labelType={'adult'} min={'1'} />
                                    <FormGroup inputType={'number'} placeholder={placeholderTextD} labelType={'children'} min={'0'} />

                                    <div className={fGroup}>
                                        <button onClick={backClick} className='btn btn--blue btn--animated u-margin-right' >&#8592; Back</button>
                                        <button onClick={nextClick} className='btn btn--blue btn--animated' >Next step &rarr;</button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </section >
    )
}

export default BookSection