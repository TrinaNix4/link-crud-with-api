import React, { useState } from "react";
import axios from "axios";

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const baseurl = 'https://link-app-sp22.herokuapp.com'
  const [links, setLinks] = useState([]);

  //get link from api and update links state
const getLinks = async ()=>{
  try{
      let res = await axios.get('https://link-app-sp22.herokuapp.com')
  console.log(res) //test response 
      setLinks(res.data)
    }catch(err){
    alert('error occurred')
  }
}


const dataProviderThing = {
  links,

}

  //create a link to api/database and update links state in UI 
const createLink = async() => {
  
  
  try{
let res = await axios.post(`${baseurl}/api/links`, linkObj)
  }catch(err){
    alert('error occurred')
  }
}


  //update date a link to api/database and update links state in UI


  // create an object that will be 'global state'
  const dataProviderThing = {
    dataDemo,
    setDataDemo
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
