import { NavLink } from "react-router-dom"
const Categorias = () => {
  return (
    <ul>
        <li>
        CATEGORÍAS
        </li>
        <li>
          <NavLink to='categoria/1'>
            Notebooks
          </NavLink>
        </li>
        <li>
          <NavLink to='categoria/2'>
            Placa de video
          </NavLink>
        </li>
        <li>
          <NavLink to='categoria/3'>
            Monitores
          </NavLink>
        </li>
    </ul>
  )
}

export default Categorias