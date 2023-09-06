import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const NavContainer = styled.nav`
  background-color: ${props => (props.themeColor ? '#ffffff' : '#383838')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  list-style-type: none;
`

export const List = styled.li``

export const Image = styled.img`
  width: ${props => (props.logo ? 80 : 30)}px;
  height: 30px;
  margin-left: 18px;
  margin-top: ${props => (props.themeImage ? -10 : 0)}px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.popup ? 'column' : 'row')};
  justify-content: ${props => props.popups && 'center'}
  align-items: center;
  background-color: ${props => (props.popup ? '#383838' : '')};
  border-radius: ${props => (props.popup ? 12 : 0)}px;
  padding: ${props => (props.popup ? 15 : 0)}px;
`

export const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid #3b82f6;
  border-radius: 6px;
  height: 35px;
  margin: 15px;
  color: #3b82f6;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 0px;
`

export const Text = styled.p`
  color: #ffffff;
  font-size: 14px;
`

export const StyledPopup = styled(Popup)`
  align-self: center;
`

export const ButtonZ = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 0px;
`
