import "./SignupPage.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import authService from "../../services/auth.service"

function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")


  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()

  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const handleUsername = (e) => setUsername(e.target.value)
  const handleName = (e) => setName(e.target.value)
  const handleSurname = (e) => setSurname(e.target.value)
  const handleAddress = (e) => setAddress(e.target.value)
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value)



  const handleSignupSubmit = (e) => {
    e.preventDefault()
    const requestBody = { email, password, username, name, surname, address, phoneNumber }
    authService
      .signup(requestBody)
      .then((response) => {
        navigate("/login")
      })
      .catch((error) => {
        const errorDescription = error.response.data.message
        setErrorMessage(errorDescription)
      })
  }

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={handleUsername} />

        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Surname:</label>
        <input type="text" name="surname" value={surname} onChange={handleSurname} />

        <label>Address:</label>
        <input type="text" name="address" value={address} onChange={handleAddress} />

        <label>Phone number:</label>
        <input type="text" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumber} />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  )
}

export default SignupPage
