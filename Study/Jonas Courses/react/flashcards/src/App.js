import { useState } from 'react'
import './index.css'

export default function App() {
  return (
    <div className='App'>
      <FlashCards />
    </div>
  )
}

const questions = [
  {
    id: 3457,
    question: 'What language is React based on?',
    answer: 'JavaScript',
    isFlapped: false,
  },
  {
    id: 7336,
    question: 'What are the building blocks of React apps?',
    answer: 'Components',
    isFlapped: false,
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: 'JSX',
    isFlapped: false,
  },
  {
    id: 1297,
    question: 'How to pass data from parent to child components?',
    answer: 'Props',
    isFlapped: false,
  },
  {
    id: 9103,
    question: 'How to give components memory?',
    answer: 'useState hook',
    isFlapped: false,
  },
  {
    id: 2002,
    question:
      'What do we call an input element that is completely synchronised with state?',
    answer: 'Controlled element',
    isFlapped: false,
  },
]

function FlashCards() {
  const [selectedId, setSelectedId] = useState(questions)

  const handleToggle = (itemId) => {
    setSelectedId(selectedId === itemId ? null : itemId)
  }

  return (
    <div className='flashcards'>
      {questions.map((item) => (
        <div
          key={item.id}
          onClick={() => handleToggle(item.id)}
          className={`${item.id === selectedId ? 'flapped' : ''}`}
        >
          <p>{item.id === selectedId ? item.answer : item.question}</p>
        </div>
      ))}
    </div>
  )
}
