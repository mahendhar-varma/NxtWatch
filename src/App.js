import './App.css'
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Saved from './components/Saved'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import VideosContext from './context/VideosContext/VideosContext'

class App extends Component {
  state = {
    savedList: [],
    isLightTheme: true,
  }

  addVideo = video => {
    const {savedList} = this.state
    const check = savedList.find(item => item.id === video.id)

    if (check !== undefined) {
      const filteredList = savedList.filter(item => item.id !== video.id)
      this.setState({
        savedList: filteredList,
      })
    } else {
      this.setState(prevState => ({
        savedList: [...prevState.savedList, video],
      }))
    }
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isLightTheme: !prevState.isLightTheme,
    }))
  }

  render() {
    const {savedList, isLightTheme} = this.state
    return (
      <VideosContext.Provider
        value={{
          savedList,
          addVideo: this.addVideo,
          changeTheme: this.changeTheme,
          isLightTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={Saved} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </VideosContext.Provider>
    )
  }
}

export default App
