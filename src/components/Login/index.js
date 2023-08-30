import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  MainContainer,
  Image,
  FormElement,
  Text,
  InputElement,
  Button,
} from './styledComponent'

class Login extends Component {
  state = {showError: false, username: '', password: '', errMsg: ''}

  formSubmit = event => {
    event.preventDefault()
    this.login()
  }

  login = async () => {
    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userData = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }

    const response = await fetch(apiUrl, options)
    console.log(response)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.err_msg)
    }
  }

  onLoginSuccess = jwtToken => {
    Cookies.set(jwtToken, 'jwt_token', {
      expiry: 30,
    })
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errMsg => {
    this.setState({errMsg, showError: true})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {showError, username, password, errMsg} = this.state

    return (
      <MainContainer>
        <MainContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt=""
          />
          <FormElement onSubmit={this.formSubmit}>
            <Text htmlFor="username">USERNAME</Text>
            <InputElement
              id="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={this.addUsername}
            />
            <Text htmlFor="password">PASSWORD</Text>
            <InputElement
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={this.addPassword}
            />
            <InputElement
              type="checkbox"
              id="showPassword"
              onChange={this.showPassword}
            />
            <Text htmlFor="showPassword">Show Password</Text>

            <Button type="submit">Login</Button>
            {showError && <Text>*{errMsg}</Text>}
          </FormElement>
        </MainContainer>
      </MainContainer>
    )
  }
}

export default Login
