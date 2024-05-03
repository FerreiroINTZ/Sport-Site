import {Link} from "react-router-dom"
import portfolio from"./imgs/local-na-rede-internet.png"
import git_hub from"./imgs/placa-do-github.png"
import linkedin from"./imgs/linkedin.png"

function header() {
  return (
    <header>
        <h1>Sport Site</h1>
          <ul>
            <li>
              <img src={portfolio} alt="" />
              <a href="https://www.google.com">Portfolio</a>
            </li>
            <li>
              <img src={git_hub} alt="" />
              <a href="https://www.google.com">Git Hub</a>
            </li>
            <li>
              <img src={linkedin} alt="" />
              <a href="https://www.google.com">Linkedin</a>
            </li>
          </ul>
    </header>
  )
}

export default header