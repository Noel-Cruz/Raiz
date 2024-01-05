import { DBProductos } from "../../async-mocks"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto,setProducto]=useState([]);
    const {id}=useParams();

  function productoDetail(){
    DBProductos().then((response)=>{
       const producto=response.find((producto)=>producto.id===id);
       setProductos(producto);
    })
  }
  useEffect(()=>{
    DBProductos().then((response)=>{
        const producto=response.find((producto)=>producto.id===id);
        setProducto(producto);
    })
  },[])
  return (
    <main>
        <ItemDetail {...producto} />
    </main>
  )
}

export default ItemDetailContainer