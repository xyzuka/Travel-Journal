import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from './data'

function App() {
 const cardData = data.map((item) => {
    return <Card
      key={item.id}
      items={item}
    />
  })

  return (
    <div className='app-container'>
      <Header />
        <section className="card-container">
          {cardData}
        </section>
    </div>
  )
}

export default App
