import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2022</p>
        <p> Dhruv Kudalkar</p>
        <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer