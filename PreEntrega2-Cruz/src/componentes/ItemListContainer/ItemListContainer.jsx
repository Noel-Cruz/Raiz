import { useState,useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { DBProductos } from '../../async-mocks';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos,setProductos]=useState([]);
  const {idCategoria}=useParams();

  function productosPorCategoria(){
    DBProductos().then(
      (response)=>{
        const productos=response.filter((producto)=> producto.idCategoria===idCategoria);
        setProductos(productos);
      }
    )
  };
  function todosLosProductos(){
    DBProductos().then((response)=>{
      setProductos(response)
    })
  };
  useEffect(()=>{
    let productosARenderizar=idCategoria?productosPorCategoria:todosLosProductos;
    productosARenderizar();
  }
  ,[idCategoria]);
  return (
    <main>
          <ItemList productos={productos}/>
    </main>

  )
}

export default ItemListContainer