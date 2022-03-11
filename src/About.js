import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h3>A web-app used to keep track of tasks performed by the user</h3>
        <br></br>
        <h4 style={{color: 'green',}}>Includes add task,delete task,set day/time and set reminder features </h4>
        <br></br>
        <Link to="/">GO BACK</Link>
    </div>
  )
}

export default About