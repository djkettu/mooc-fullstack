const Header = (course) => {
  console.log(course.name)
  return (
  <h1>{course.name}</h1>
  )
}

const Content = (course) => {
  console.log(JSON.stringify(course))
  return (
    <div>
      <Part {...course.parts[0]} />
      <Part {...course.parts[1]} />
      <Part {...course.parts[2]} />
    </div>
  )
}

const Part = (part) => {
  console.log(part.name + " " + part.exercises)
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Total = (course) => {
  console.log(course.parts[0].exercises)
  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return (
  <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header {...course} />
      <Content {...course} />
      <Total {...course} />
    </div>
  )
}

export default App