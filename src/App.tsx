import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton'
import useURLLoader from './hooks/useURLLoader'

interface IShowResults {
  message: string
  status: string
}

interface IThemeProps {
  [key: string]: {
    color: string,
    background: string
  }
}

const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#222'
  }
}

export const ThemeContext = React.createContext(themes.light) // 初始化 context

const App: React.FC = () => {
  const [show, setShow] = useState(true)
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogResults = data as IShowResults
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button onClick={() => {setShow(!show)}}>refresh photo</button>
          </p>
          {
            loading
            ? <p>dog is loading</p>
            : <img src={dogResults && dogResults.message} />
          }
          <LikeButton />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
