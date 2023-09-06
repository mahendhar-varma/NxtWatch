import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideosContext from '../../context/VideosContext/VideosContext'

import {
  VideoContainer,
  Section,
  Image,
  Button,
  Text,
  Like,
  Dislike,
  Save,
  Hr,
} from './styledComponent'
import {ThemeContainer} from '../Trending/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {
    videoItem: {},
    apiStatus: apiStatusConstants.initial,
    like: false,
    dislike: false,
    saved: false,
  }

  componentDidMount() {
    this.getVideo()
  }

  getVideo = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

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
      const videoDetails = data.video_details
      const updatedVideo = {
        id: videoDetails.id,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
        videoUrl: videoDetails.video_url,
        description: videoDetails.description,
      }
      this.setState({
        videoItem: updatedVideo,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessUi = () => (
    <VideosContext.Consumer>
      {value => {
        const {addVideo, isLightTheme} = value
        const {videoItem, like, dislike, saved} = this.state

        const saveText = saved ? 'Saved' : 'Save'

        const saveVideo = () => {
          addVideo(videoItem)
          this.setState(prevState => ({
            saved: !prevState.saved,
          }))
        }

        const changeLike = () => {
          this.setState(prevState => ({
            like: !prevState.like,
            dislike: false,
          }))
        }

        const changeDislike = () => {
          this.setState(prevState => ({
            dislike: !prevState.dislike,
            like: false,
          }))
        }

        return (
          <ThemeContainer
            themeColor={isLightTheme}
            data-testid="videoItemDetails"
          >
            <VideoContainer content="true">
              <ReactPlayer url={videoItem.videoUrl} />
              <Text>{videoItem.title}</Text>
              <Section>
                <Section>
                  <Text>{videoItem.viewCount}</Text>
                  <Text>
                    {formatDistanceToNow(new Date(videoItem.publishedAt))} ago
                  </Text>
                </Section>
                <Section>
                  <Button type="button" onClick={changeLike}>
                    <Like like={like ? 'true' : undefined} />
                  </Button>
                  <Button type="button">Like</Button>
                  <Button type="button" onClick={changeDislike}>
                    <Dislike dislike={dislike ? 'true' : undefined} />
                  </Button>
                  <Button type="button">Dislike</Button>
                  <Button type="button" onClick={saveVideo}>
                    <Save saved={saved ? 'true' : undefined} />
                  </Button>
                  <Button type="button">{saveText}</Button>
                </Section>
              </Section>
              <Hr />
              <Section>
                <Image
                  src={videoItem.channel.profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <Text>{videoItem.channel.name}</Text>
                  <Text>{videoItem.channel.subscriberCount} subscribers</Text>
                  <Text description="true">{videoItem.description}</Text>
                </div>
              </Section>
            </VideoContainer>
          </ThemeContainer>
        )
      }}
    </VideosContext.Consumer>
  )

  renderLoadingUi = () => (
    <VideosContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <ThemeContainer
            themeColor={isLightTheme}
            data-testid="videoItemDetails"
          >
            <VideoContainer data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </VideoContainer>
          </ThemeContainer>
        )
      }}
    </VideosContext.Consumer>
  )

  renderFailureUi = () => (
    <VideosContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <ThemeContainer
            themeColor={isLightTheme}
            data-testid="videoItemDetails"
          >
            <VideoContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
              <Text as="h1">Oops! Something Went Wrong</Text>
              <Text>
                We are having some trouble to complete your request. Please try
                again.
              </Text>
              <Button type="button" onClick={this.getVideo}>
                Retry
              </Button>
            </VideoContainer>
          </ThemeContainer>
        )
      }}
    </VideosContext.Consumer>
  )

  renderRequiredUi = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessUi()
      case apiStatusConstants.loading:
        return this.renderLoadingUi()
      case apiStatusConstants.failure:
        return this.renderFailureUi()
      default:
        return null
    }
  }

  addLike = () => {
    this.setState(prevState => ({
      like: !prevState.like,
      dislike: false,
    }))
  }

  addDislike = () => {
    this.setState(prevState => ({
      dislike: !prevState.dislike,
      like: false,
    }))
  }

  render() {
    return (
      <>
        <Header />
        <VideoContainer>
          <Sidebar />
          {this.renderRequiredUi()}
        </VideoContainer>
      </>
    )
  }
}

export default VideoItemDetails
