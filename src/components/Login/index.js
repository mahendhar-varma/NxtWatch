import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import VideosContext from '../../context/VideosContext/VideosContext'
import {ThemeContainer} from '../Trending/styledComponents'
import {
  MainContainer,
  Image,
  Text,
  InputElement,
  Container,
  Button,
} from './styledComponent'

class Login extends Component {
  state = {
    showError: false,
    username: '',
    password: '',
    errMsg: '',
    showPassword: false,
  }

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
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })

    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errMsg => {
    this.setState({errMsg, showError: true})
  }

  addUsername = event => {
    this.setState({username: event.target.value})
  }

  addPassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {showError, username, password, errMsg, showPassword} = this.state

    return (
      <VideosContext.Consumer>
        {value => {
          const {isLightTheme} = value

          return (
            <ThemeContainer themeColor={isLightTheme}>
              <MainContainer>
                <MainContainer card="true">
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                  <MainContainer
                    form="true"
                    as="form"
                    onSubmit={this.formSubmit}
                  >
                    <Text htmlFor="username">USERNAME</Text>
                    <InputElement
                      id="username"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={this.addUsername}
                    />
                    <Text htmlFor="password">PASSWORD</Text>
                    <InputElement
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      onChange={this.addPassword}
                    />
                    <Container>
                      <InputElement
                        type="checkbox"
                        id="showPassword"
                        onChange={this.showPassword}
                      />
                      <Text htmlFor="showPassword">Show Password</Text>
                    </Container>

                    <Button type="submit">Login</Button>
                    {showError && (
                      <Text as="p" error="true">
                        *{errMsg}
                      </Text>
                    )}
                  </MainContainer>
                </MainContainer>
              </MainContainer>
            </ThemeContainer>
          )
        }}
      </VideosContext.Consumer>
    )
  }
}

export default Login
