import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire, HiSave} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

export const SideContainer = styled.div`
  background-color: ${props => (props.themeColor ? '#ffffff' : '#383838')};
  width: 20%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Section = styled.nav`
  list-style-type: none;
`

export const List = styled.li`
  display: flex;
`

export const Image = styled.img`
  width: 30px;
  height: 30px;
  margin: 6px;
`

export const Text = styled.p`
  color: ${props => (props.themeColor ? '#383838' : '#ffffff')};
  margin-left: 12px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const StyledHome = styled(AiFillHome)`
  color: ${props => (props.colors ? '#ff0000' : '#475569')};
  margin-top: 20px;
`

export const StyledTrending = styled(HiFire)`
  color: ${props => (props.colors ? '#383838' : '#475569')};
  margin-top: 20px;
`

export const StyledGaming = styled(SiYoutubegaming)`
  color: ${props => (props.colors ? '#383838' : '#475569')};
  margin-top: 20px;
`

export const StyledSave = styled(HiSave)`
  color: ${props => (props.colors ? '#383838' : '#475569')};
  margin-top: 20px;
`
