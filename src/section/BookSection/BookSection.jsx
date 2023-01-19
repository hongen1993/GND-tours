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
    const [nameInput, setNameInput] = useState(0);
    const [emailInput, setEmailInput] = useState(false);
    const [about, setAbout] = useState(false);
    const [booking, setBooking] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
    };

    const handleName = (event) => {
        event.preventDefault();
        const name = event.target.value
        setNameInput(name.length)
    }

    const handleEmail = (event) => {
        event.preventDefault();
        const email = event.target.value
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        if (regexExp.test(email)) setEmailInput(true)
    }

    const handleAbout = (event) => {
        if (event.target.checked && emailInput && nameInput >= 1) {
            event.preventDefault();
            setAbout(true)
            setBooking(false)
        }
    }

    const handleBook = (event) => {
        if (event.target.checked && emailInput && nameInput >= 1) {
            event.preventDefault();
            setAbout(false)
            setBooking(true)
        }
    }

    const askClick = (event) => {
        setStep(step + 2)
        event.preventDefault();
    }
    const bookClick = (event) => {
        setStep(step + 1)
        event.preventDefault();
    }

    const backClick = (event) => {
        setStep(step - 1)
        event.preventDefault();
    }
    const endClick = (event) => {
        setStep(0)
        event.preventDefault();
    }

    return (
        <section className="section-book" id="section-book">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <form action="#" className="form" onSubmit={handleSubmit}>
                            <div className={`step-one ${step === 0 ? 'show' : ''} `}>

                                <div className="u-center-text u-margin-bottom-medium">
                                    <Heading HeadingNum={'h2'} headingClass={'secondary'} children={sectionTitle} />
                                </div>

                                <FormGroup onChange={handleName} inputType={"text"} placeholder={placeholderTextA} labelType={'name'} />
                                <FormGroup onChange={handleEmail} inputType={'email'} placeholder={placeholderTextB} labelType={'email'} />

                                <div className='form__group u-margin-bottom-small'>
                                    <RadioGroup onChange={handleAbout} labelType={'ask'} text={radioTextA} name={'contact'} />
                                    <RadioGroup onChange={handleBook} labelType={'book'} text={radioTextB} name={'contact'} />
                                </div>
                                <div className={fGroup}>
                                    <button disabled={!about} onClick={askClick} className={`btn ${!about ? 'btn__inactive' : 'btn--blue'} `} >Next step &rarr;</button>
                                    <button disabled={!booking} onClick={bookClick} className={`btn ${!booking ? 'btn__inactive' : 'btn--blue '} `} >Next step &rarr;</button>
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
                                        <button onClick={bookClick} className='btn btn--blue btn--animated' >Next step &rarr;</button>
                                    </div>

                                </div>
                            </div>
                            <div className={`step-three ${step === 2 ? 'show' : ''} `}>
                                <div className="u-center-text u-margin-bottom-medium">
                                    <Heading HeadingNum={'h2'} headingClass={'secondary'} children={sectionTitle} />
                                </div>
                                <div className="u-center-text u-margin-bottom-medium">
                                    <Heading HeadingNum={'h3'} headingClass={'tertiary'} children={'Any questions or queries'} />
                                </div>
                                <div className="form__group">
                                    <input type="textarea" className="form__input form__textarea" placeholder="Your message..." name='message' />
                                    <label htmlFor='message' className='form__label' >
                                        Your message...
                                    </label>
                                </div>
                                <div className={fGroup}>
                                    <button onClick={bookClick} className='btn btn--blue btn--animated' >Submit</button>
                                </div>
                            </div>
                            <div className={`step-four ${step === 3 ? 'show' : ''} `}>
                                <div className="u-center-text u-margin-bottom-medium">
                                    <Heading HeadingNum={'h2'} headingClass={'secondary'} children={sectionTitle} />
                                </div>
                                <p className="paragraph u-height-m">
                                    Message send succesfully!<br />
                                    Our support department will contact you soon!<br />
                                    Keep an eye on your email!
                                </p>
                                <div className={fGroup}>
                                    <button type='submit' onClick={endClick} className='btn btn--blue btn--animated' value='submit'>Done</button>
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