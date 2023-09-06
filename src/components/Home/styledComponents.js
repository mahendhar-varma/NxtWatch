import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'

export const ThemeContainer = styled.div`
  background-color: ${props => (props.themeColor ? '#d7dfe9' : '#181818')};
  width: 100%;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Container = styled.div`
  padding: 20px;
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: 'row';
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`

export const Section = styled.div`
  display: flex;
  flex-direction: ${props => (props.list ? 'row' : 'column')};
`

export const List = styled.li`
  display: flex;
  flex-direction: ${props => (props.videos ? 'column' : 'row')};
  width: 300px;
  margin: 6px;
`

export const Text = styled.p`
  color: #383838;
  margin-left: 12px;
`

export const Image = styled.img`
  width: ${props => (props.profile ? 30 : 300)}px;
  height: ${props => (props.profile ? 30 : 200)}px;
  margin: 6px;
`

export const Logo = styled.img`
  width: 123px;
  height: 35px;
`

export const Button = styled.button`
  background-color: ${props => (props.close ? ' #616e7c' : '#00306e')};
  color: #ffffff;
  border: none;
  font-size: 14px;
  width: ${props => (props.close ? 20 : 123)}px;
  height: ${props => (props.close ? 20 : 35)}px;
  border-radius: 6px;
  padding: 6px;
  margin: 6px;
  cursor: pointer;
`

export const ButtonS = styled.button`
  background-color: #616e7c;
  border: none;
  outline: none;
  margin-right: 0px;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.ul ? 'row' : 'column')};
  flex-wrap: wrap;
`

export const Form = styled.form`
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 23px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #94a3b8;
  width: 200px;
  padding-right: 0px;
  margin-right: 0px;
`

export const Input = styled.input`
  border: none;
  outline: none;
  cursor: pointer;
  border-right: 1px solid #94a3b8;
  margin: 0px;
  background-color: transparent;
`

export const StyledSearch = styled(AiOutlineSearch)`
  margin-right: 0px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
