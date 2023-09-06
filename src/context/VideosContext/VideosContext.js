import React from 'react'

const VideosContext = React.createContext({
  savedList: [],
  addVideo: () => {},
  addSaved: () => {},
  isLightTheme: true,
  changeTheme: () => {},
})

export default VideosContext
