import React from "react"
import {useParams} from 'react-router-dom'

const LinkForm = () => {
const params = useParams()
  return(
    <div>
      <h1>Links Form here</h1>
      <p>{params.id ? 'Update form' : 'New form'}</p>
      <p>id: {params.id ? params.id : 'No ID'}</p>
      
    </div>
  )
}
export default LinkForm