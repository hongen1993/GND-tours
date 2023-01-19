import './RadioGroup.scss'

const RadioGroup = ({ onChange, classWidth, classFont, labelType, text, name }) => {
    return (
        <div className={`${classWidth} form__radio-group`}>
            <input onChange={onChange} type='radio' className=' form__radio-input' id={labelType} name={name} />
            <label htmlFor={labelType} className={`${classFont} form__radio-label`}>
                <span className='form__radio-button'></span>{text}
            </label>
        </div>
    )
}
export default RadioGroup