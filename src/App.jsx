import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Navbar />
      <Main />
    </Router>
  )
}
export default App
