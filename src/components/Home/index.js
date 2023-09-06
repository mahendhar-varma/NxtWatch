import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideosContext from '../../context/VideosContext/VideosContext'
import {FailureContainer} from '../Gaming/styledComponent'
import {
  ThemeContainer,
  MainContainer,
  Container,
  Section,
  StyledLink,
  List,
  Text,
  Image,
  Logo,
  Button,
  HomeContainer,
  Form,
  Input,
  StyledSearch,
  ButtonS,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  state = {
    showPopup: true,
    search: '',
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {search} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`

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
        channel: each.channel,
        publishedAt: each.published_at,
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
    this.getVideos()
  }

  renderSuccessView = () => {
    const {videosList} = this.state

    const check = videosList.length === 0

    return (
      <>
        {check ? (
          <FailureContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Text as="h1">No Search results found</Text>
            <Text>Try different key words or remove search filter</Text>
            <Button type="button" onClick={this.retry}>
              Retry
            </Button>
          </FailureContainer>
        ) : (
          <HomeContainer as="ul" ul="true">
            {videosList.map(eachVideo => (
              <List key={eachVideo.id} videos="true">
                <StyledLink to={`/videos/${eachVideo.id}`}>
                  <Image src={eachVideo.thumbnailUrl} alt="video thumbnail" />

                  <Section list="true">
                    <Image
                      src={eachVideo.channel.profile_image_url}
                      alt="channel logo"
                      profile="true"
                    />
                    <ul>
                      <Text>{eachVideo.title}</Text>
                      <Text>{eachVideo.channel.name}</Text>
                      <Section list="true">
                        <Text>{eachVideo.viewCount} views</Text>
                        <Text>
                          {formatDistanceToNow(new Date(eachVideo.publishedAt))}{' '}
                          ago
                        </Text>
                      </Section>
                    </ul>
                  </Section>
                </StyledLink>
              </List>
            ))}
          </HomeContainer>
        )}
      </>
    )
  }

  renderLoadingView = () => (
    <FailureContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </FailureContainer>
  )

  renderFailureView = () => (
    <VideosContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const failureImage = isLightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <FailureContainer>
            <Image src={failureImage} alt="failure view" />
            <Text as="h1">Oops! Something Went Wrong</Text>
            <Text>We are having some trouble to complete your request.</Text>
            <Text>Please try again.</Text>
            <Button type="button" onClick={this.retry}>
              Retry
            </Button>
          </FailureContainer>
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

  close = () => {
    this.setState({showPopup: false})
  }

  addSearchInput = event => {
    this.setState({search: event.target.value})
  }

  searchVideos = () => {
    this.getVideos()
  }

  render() {
    return (
      <VideosContext.Consumer>
        {value => {
          const {isLightTheme} = value
          const {showPopup, search} = this.state

          return (
            <>
              <Header />
              <MainContainer>
                <Sidebar />
                <ThemeContainer themeColor={isLightTheme} data-testid="home">
                  <HomeContainer>
                    {showPopup && (
                      <Container data-testid="banner">
                        <Section>
                          <Logo
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="nxt watch logo"
                          />
                          <Text>
                            Buy Nxt Watch Premium prepaid plans with UPI
                          </Text>
                          <Button type="button">GET IT NOW</Button>
                        </Section>
                        <Button
                          type="button"
                          onClick={this.close}
                          close="true"
                          data-testid="close"
                        >
                          <AiOutlineClose />
                        </Button>
                      </Container>
                    )}
                    <Form>
                      <Input
                        type="search"
                        placeholder="Search"
                        onChange={this.addSearchInput}
                        value={search}
                      />
                      <ButtonS
                        type="button"
                        onClick={this.searchVideos}
                        data-testid="searchButton"
                      >
                        <StyledSearch />
                      </ButtonS>
                    </Form>
                    {this.renderRequiredUi()}
                  </HomeContainer>
                </ThemeContainer>
              </MainContainer>
            </>
          )
        }}
      </VideosContext.Consumer>
    )
  }
}
export default Home
