import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'

export const UlContainer = styled.ul`
  list-style-type: none;
  margin-left: -40px;
  margin-top: 0px;
  padding-top: 15px;
`
export const NoSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

export const List = styled.li`
  margin: 0px 15px 15px 15px;
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
`

export const Text = styled.p`
  color: ${props => (props.top ? '#ffffff' : '#181818')};
  margin-left: 10px;
`

export const Container = styled.li`
  background-color: #313131;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 60px;
  width: 40px;
`

export const StyledTrending = styled(HiFire)`
  color: #ff0000;
  width: 20px;
  height: 20px;
  margin-top: 6px;
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
