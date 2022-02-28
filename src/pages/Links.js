import { DataContext } from "../providers/DataProvider"
import React {useContext} from 'react'


const Links = () => {
  const x = useContext(DataContext)
  return (
    <div>

<h1>Links here</h1>
<div></div>
    </div>
    
  )
}

export default Links;