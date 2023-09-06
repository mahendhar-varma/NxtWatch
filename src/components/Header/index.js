import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import VideosContext from '../../context/VideosContext/VideosContext'

import {
  NavContainer,
  List,
  Image,
  Container,
  StyledPopup,
  Button,
  ButtonZ,
  Text,
} from './styledComponents'

const Header = props => {
  const logoutApp = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <VideosContext.Consumer>
      {value => {
        const {isLightTheme, changeTheme} = value
        const themeImage = isLightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

        const logoImage = isLightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

        return (
          <NavContainer themeColor={isLightTheme}>
            <Link to="/">
              <List>
                <Image src={logoImage} alt="website logo" logo="true" />
              </List>
            </Link>
            <Container>
              <ButtonZ
                type="button"
                onClick={changeTheme}
                data-testid="theme"
                theme="true"
              >
                <Image src={themeImage} alt="theme" themeImage="true" />
              </ButtonZ>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Container popups="true">
                <StyledPopup trigger={<Button type="button">Logout</Button>}>
                  {close => (
                    <Container popup="true">
                      <Text>Are you sure, you want to logout?</Text>
                      <Container>
                        <Button type="button" onClick={() => close()}>
                          Cancel
                        </Button>
                        <Button type="button" onClick={logoutApp}>
                          Confirm
                        </Button>
                      </Container>
                    </Container>
                  )}
                </StyledPopup>
              </Container>
            </Container>
          </NavContainer>
        )
      }}
    </VideosContext.Consumer>
  )
}

export default withRouter(Header)
