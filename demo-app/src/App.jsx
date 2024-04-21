import './index.css'
import Header from './components/Header'
import Card from './components/Card'
import data from './data'
function App() {

  const card = (data.map(item =>{
    return(
      <Card
        key={item.id}
        {...item}
      />
    )
  }))

  return (
    <div>
      <Header></Header>
      {card}
    </div>
  )
}
export default App
