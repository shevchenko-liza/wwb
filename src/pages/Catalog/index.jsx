import { useParams } from 'react-router-dom'
import {Burgers} from '../../components/Burgers'
import{Basket} from '../../pages/Basket'
import{BussnessMenu} from '../../pages/BussnessMenu'
export const CatalogPage = () => {
  const params = useParams()

  console.log({ params });

  return (
    <div>
      <h1>Category: {params.category}</h1>
      <p>Catalog</p>
    <BussnessMenu/>
      <Basket/>
      <Burgers/>
  
    </div>
  )
}