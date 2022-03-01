import { useContext } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { DataContext } from "../providers/DataProvider"; 
//renaming react router link to ReactRouterLink so no confusion with our Link component

const Links = () => {
  let { links, getLinks, addLink, updateLink, deleteLink, loading, error } =
    useContext(DataContext);

  const renderLinks = () => {
    return links.map((link) => {
      return (
        <div
          key={link.id}
          style={{ margin: "20px", padding: "20px", border: "1px dashed red" }}
        >
          <h1>{link.title}</h1>
          <a href={link.url} target="_blank">
            {link.title}
          </a>
          <p>{link.description}</p>
          <p>{link.username}</p>
          {/* Not here that this will disable all  buttons, even when just one is clicked */}
          <button disabled={loading} onClick={() => deleteLink(link.id)}>
            delete
          </button>
          <ReactRouterLink to={`links/${link.id}`}>show</ReactRouterLink>
          <ReactRouterLink to={`links/${link.id}/edit`} state={{...link}}>edit</ReactRouterLink>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Links Page</h1>

      <ReactRouterLink to='links/new'>new link</ReactRouterLink>
      <button onClick={getLinks}>get links</button>
      <p>CRUD TEST</p>
   
      <p>loading state: {loading ? "true" : "false"}</p>
      <p>error state: {error ? "true" : "false"}</p>
      {renderLinks()}
    </div>
  );
};

export default Links;