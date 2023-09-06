import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideosContext from '../../context/VideosContext/VideosContext'
import {MainContainer, Button} from '../Home/styledComponents'
import {ThemeContainer} from '../Trending/styledComponents'
import {
  Container,
  Top,
  Text,
  StyledTrending,
  UlContainer,
  List,
  StyledLink,
  Section,
  Image,
  FailureContainer,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Gaming extends Component {
  state = {videosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount = () => {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const {videos} = data
      const updatedVideosList = videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        videosList: updatedVideosList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retry = () => {
    this.getVideosList()
  }

  renderSuccessView = () => {
    const {videosList} = this.state

    const check = videosList.length === 0

    return (
      <VideosContext.Consumer>
        {value => {
          const {isLightTheme} = value
          return (
            <ThemeContainer themeColor={isLightTheme} data-testid="gaming">
              {check ? (
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
              ) : (
                <UlContainer>
                  {videosList.map(eachVideo => (
                    <List key={eachVideo.id}>
                      <StyledLink to={`videos/${eachVideo.id}`}>
                        <Section>
                          <Image
                            src={eachVideo.thumbnailUrl}
                            alt="video thumbnail"
                          />
                          <Text>{eachVideo.title}</Text>
                          <Text>{eachVideo.viewCount} watching worldwide</Text>
                        </Section>
                      </StyledLink>
                    </List>
                  ))}
                </UlContainer>
              )}
            </ThemeContainer>
          )
        }}
      </VideosContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <VideosContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <ThemeContainer themeColor={isLightTheme}>
            <FailureContainer data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </FailureContainer>
          </ThemeContainer>
        )
      }}
    </VideosContext.Consumer>
  )

  renderFailureView = () => (
    <VideosContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const failureImage = isLightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <ThemeContainer themeColor={isLightTheme}>
            <FailureContainer>
              <Image src={failureImage} alt="failure view" />
              <Text as="h1">Oops! Something Went Wrong</Text>
              <Text>We are having some trouble to complete your request.</Text>
              <Text>Please try again.</Text>
              <Button type="button" onClick={this.retry}>
                Retry
              </Button>
            </FailureContainer>
          </ThemeContainer>
        )
      }}
    </VideosContext.Consumer>
  )

  renderRequiredUi = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <MainContainer>
          <Sidebar />
          <nav>
            <Top>
              <Container>
                <StyledTrending />
              </Container>
              <Text as="h1" top="true">
                Gaming
              </Text>
            </Top>
            {this.renderRequiredUi()}
          </nav>
        </MainContainer>
      </>
    )
  }
}

export default Gaming
