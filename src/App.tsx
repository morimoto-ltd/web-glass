import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/

function Icon({ isStarred }: { isStarred: boolean }) {
    return isStarred
        ? <img src="star-starred.png" />
        : <img src="star.png" />;
}

function App() {
    const [isStarred, setIsStarred] = useState(false);
    return (
        <section role="main" className="App">
            <div className="App__wrapper">
                <img
                    className="App__background"
                    src="https://plus.unsplash.com/premium_photo-1665657351698-7d61f4b57ddc?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <button
                    className="App__liquidGlass__wrapper"
                    onClick={() => setIsStarred(!isStarred)}
                >
                    <Icon isStarred={isStarred}/>
                    <div className="App__liquidGlass" />
                    <div className="App__liquidGlass-backdrop" />
                </button>
            </div>
        </section>
    );
}

export default App
