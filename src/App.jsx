import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [factError, setFactError] =useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) {
          setFactError('Fact could not be recovered')
        }
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, []) 

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`)
    
    .then(response => {
      const { url } = response
      setImageUrl(`${url}`)
    })
  }, [fact])

  return (
    <main>
      <h1>App de Gatitos!</h1>
      
      {fact && <p>{fact}</p>} 
      {imageUrl && <img src={`${imageUrl}`} alt=
      {`Image extracted using the first 3 words for ${fact}`} />}
    </main>
  )
}