import './App.css'
import Button from './components/Button/Button'

function App() {
  const handleClick = () => {
    alert('Clicked!');
  };

  return (
    <>
      <h1>Hello REACT!</h1>
      <Button disable={false} type={'button'} onClick={handleClick}>
        Click Me
      </Button>
    </>
  )
}

export default App
