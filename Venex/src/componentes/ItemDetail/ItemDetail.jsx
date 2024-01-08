
const ItemDetail = ({img,titulo,precio,descripcion}) => {
  return (
    <article id='ItemDetail'>
        <picture>
          <img src={img} alt="" />
        </picture>
        <div>
          <h5>
            {titulo}
          </h5>
          <span>
            {precio}
          </span>
          <p>
            {descripcion}
          </p>
        </div>
    </article>
  )
}

export default ItemDetail