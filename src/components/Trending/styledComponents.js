import styled from 'styled-components'
import {HiFire} from 'react-icons/hi'
import {Link} from 'react-router-dom'

export const Container = styled.li`
  background-color: #313131;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 60px;
  width: 40px;
`

export const Top = styled.ul`
  background-color: #231f20;
  height: 60px;
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin: 0px;
  list-style-type: none;
`
export const Text = styled.p`
  color: ${props => (props.top ? '#ffffff' : '#181818')};
  margin-left: 15px;
`

export const StyledTrending = styled(HiFire)`
  color: #ff0000;
  width: 20px;
  height: 20px;
  margin-top: 6px;
`

export const UlContainer = styled.ul`
  list-style-type: none;
  margin-left: -40px;
  margin-top: 0px;
`
export const List = styled.li`
  padding: 20px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const Section = styled.div`
  display: flex;
  flex-direction: row;
`

export const Image = styled.img`
  width: 300px;
  height: 200px;
  margin-right: 15px;
`

export const ThemeContainer = styled.div`
  background-color: ${props => (props.themeColor ? '#d7dfe9' : '#0f0f0f')};
  margin: 0px;
  height: 100%;
`
