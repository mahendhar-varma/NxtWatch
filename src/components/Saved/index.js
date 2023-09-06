import {formatDistanceToNow} from 'date-fns'
import VideosContext from '../../context/VideosContext/VideosContext'
import Sidebar from '../Sidebar'

import {
  NoSavedContainer,
  UlContainer,
  Container,
  List,
  StyledLink,
  Section,
  Image,
  Text,
  StyledTrending,
  Top,
} from './styledComponent'
import {MainContainer} from '../Home/styledComponents'
import {ThemeContainer} from '../Trending/styledComponents'
import Header from '../Header'

const Saved = () => (
  <>
    <Header />
    <MainContainer>
      <Sidebar />
      <nav>
        <Top>
          <Container>
            <StyledTrending />
          </Container>
          <Text top="true" as="h1">
            Saved Videos
          </Text>
        </Top>
        <VideosContext.Consumer>
          {value => {
            const {savedList, isLightTheme} = value

            const check = savedList.length === 0

            return (
              <ThemeContainer
                themeColor={isLightTheme}
                data-testid="savedVideos"
              >
                {check ? (
                  <NoSavedContainer>
                    <Image
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <Text as="h1">No saved videos found</Text>
                    <Text>You can save your videos while watching them</Text>
                  </NoSavedContainer>
                ) : (
                  <UlContainer>
                    {savedList.map(eachVideo => (
                      <List key={eachVideo.id}>
                        <StyledLink to={`videos/${eachVideo.id}`}>
                          <Section>
                            <Image
                              src={eachVideo.thumbnailUrl}
                              alt="video thumbnail"
                            />
                            <>
                              <Text>{eachVideo.title}</Text>
                              <Text>{eachVideo.channel.name}</Text>
                              <Section>
                                <Text>{eachVideo.viewCount} views</Text>
                                <Text>
                                  {formatDistanceToNow(
                                    new Date(eachVideo.publishedAt),
                                  )}{' '}
                                  ago
                                </Text>
                              </Section>
                            </>
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
      </nav>
    </MainContainer>
  </>
)

export default Saved
