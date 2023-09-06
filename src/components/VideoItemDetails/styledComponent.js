import styled from 'styled-components'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {HiSave} from 'react-icons/hi'

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.content ? 'column' : 'row')};
  padding: 20px;
`

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`

export const Image = styled.img`
  width: 35px;
  height: 35px;
`

export const Button = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`

export const Text = styled.p`
  margin: 6px;
  margin-top: ${props => props.description && 23}px;
`

export const Hr = styled.hr`
  border: 1px solid #475569;
  width: 100%;
  margin-bottom: 23px;
`

export const Like = styled(AiFillLike)`
  height: 23px;
  width: 23px;
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
`

export const Dislike = styled(AiFillDislike)`
  height: 23px;
  width: 23px;
  color: ${props => (props.dislike ? '#2563eb' : '#64748b')};
`

export const Save = styled(HiSave)`
  height: 23px;
  width: 23px;
  color: ${props => (props.saved ? '#2563eb' : '#64748b')};
`
