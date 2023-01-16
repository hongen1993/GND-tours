import "./FormGroup.scss"

const FormGroup = ({ inputType, labelType, labelText }) => {
    return (
        <div className="form__group">
            <input type={inputType} className="form__input" placeholder={labelText} id={labelType} required />
            <label for={labelType} className="form__label">{labelText}</label>
        </div>
    )
}

export default FormGroup
