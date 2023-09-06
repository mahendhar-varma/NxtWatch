import VideosContext from '../../context/VideosContext/VideosContext'
import {
  SideContainer,
  Section,
  StyledLink,
  List,
  Text,
  Image,
  StyledHome,
  StyledTrending,
  StyledGaming,
  StyledSave,
} from './styledComponent'

const Sidebar = () => (
  <VideosContext.Consumer>
    {value => {
      const {isLightTheme} = value
      return (
        <SideContainer sidebar="true" themeColor={isLightTheme}>
          <Section>
            <StyledLink to="/">
              <List>
                <StyledHome colors={isLightTheme} />
                <Text themeColor={isLightTheme}>Home</Text>
              </List>
            </StyledLink>
            <StyledLink to="/trending">
              <List>
                <StyledTrending colors={isLightTheme} />
                <Text themeColor={isLightTheme}>Trending</Text>
              </List>
            </StyledLink>
            <StyledLink to="/gaming">
              <List>
                <StyledGaming colors={isLightTheme} />
                <Text themeColor={isLightTheme}>Gaming</Text>
              </List>
            </StyledLink>
            <StyledLink to="/saved-videos">
              <List>
                <StyledSave colors={isLightTheme} />
                <Text themeColor={isLightTheme}>Saved Videos</Text>
              </List>
            </StyledLink>
          </Section>
          <Section>
            <Text themeColor={isLightTheme}>CONTACT US</Text>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
              profile="true"
            />
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
              profile="true"
            />
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
              profile="true"
            />
            <Text themeColor={isLightTheme}>
              Enjoy! Now to see your channels and recommendations!
            </Text>
          </Section>
        </SideContainer>
      )
    }}
  </VideosContext.Consumer>
)

export default Sidebar
