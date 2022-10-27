import React from 'react'
import Menu from './components/Menu'
import { Provider } from 'react-redux'
import store from './components/store'

const App : React.FC = () => {
  return (
    <>
     <Provider store={store}>
     <Menu/>
     </Provider>
    </>
  )
}

export default App
