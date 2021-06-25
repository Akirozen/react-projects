import React, { useState } from 'react'
import data from './data'
import Question from './Question'
import SingleQuestion from './Question'

function App() {
  const [question, setQuestion] = useState(data)

  return (
    <main>
      <section className="container">
        <h3 className="">Question and answer about login</h3>
        <div className="info">
          {question.map((question) => {
            return <Question key={question.id} {...question}></Question>
          })}
        </div>
      </section>
    </main>
  )
}

export default App
