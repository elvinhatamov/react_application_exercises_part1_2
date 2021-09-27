import React from 'react'
const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <ul>
        <li>
          {props.part1}
          {props.exercises1}
        </li>
        <li>
          {props.part2} {props.exercises2}
        </li>
        <li>
          {props.part3}
          {props.exercises3}
        </li>
      </ul>
    </div>
  )
}
const Content = (props) => {
  const part1 = 'Fundemental of React'
  const exercises1 = 10
  const part2 = 'Using props tp pass data'
  const exercises2 = 10
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Part part1={part1} exercises1={exercises1} />
      <Part part2={part2} exercises2={exercises2} />
      <Part part3={part3} exercises3={exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total of amount {props.total}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundemental of React'
  const exercises1 = 10
  const part2 = 'Using props tp pass data'
  const exercises2 = 10
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total total={total} />
    </div>
  )
}

export default App
