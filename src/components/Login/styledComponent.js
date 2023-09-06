import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => (props.form ? 'flex-start' : 'center')};
  padding: 20px;
  height: ${props => (props.card ? 60 : 100)}vh;
  box-shadow: ${props => props.card && '4px 0px 16px #94a3b8'};
  border-radius: ${props => props.card && 12}px;
`

export const Image = styled.img`
  width: 80px;
  height: 40px;
`

export const Text = styled.label`
  color: ${props => (props.error ? 'red' : '#475569')};
  font-size: 12px;
  margin: 8px 0px;
`

export const InputElement = styled.input`
  border: 1px solid '#475569';
  padding: 7px;
  margin-bottom: 6px;
  cursor: pointer;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Button = styled.button`
  background-color: #3b82f6;
  border: none;
  border-radius: 6px;
  height: 35px;
  padding: 10px;
  margin: 15px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
`
