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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0px;
`
export const List = styled.li`
  margin: 25px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const Section = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 200px;
  height: 300px;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
`
