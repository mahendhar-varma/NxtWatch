import {FailureContainer, Text, Image} from '../Gaming/styledComponent'
import {ThemeContainer} from '../Trending/styledComponents'
import VideosContext from '../../context/VideosContext/VideosContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {MainContainer} from '../Home/styledComponents'

const NotFound = () => (
  <VideosContext.Consumer>
    {value => {
      const {isLightTheme} = value

      const notFoundImage = isLightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <ThemeContainer themeColor={isLightTheme}>
          <Header />
          <MainContainer>
            <Sidebar />
            <FailureContainer>
              <Image src={notFoundImage} alt="not found" />
              <Text as="h1">Page Not Found</Text>
              <Text>
                we are sorry, the page you requested could not be found.
              </Text>
            </FailureContainer>
          </MainContainer>
        </ThemeContainer>
      )
    }}
  </VideosContext.Consumer>
)

export default NotFound
