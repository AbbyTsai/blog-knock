import Post from "../component/Post";
import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";

export function loader() {
  return json ([
    {id:"1", title:"tittle", date:"2022-07-18", description:"description1",content:"content1"},
    {id:"2", title:"tittle", date:"2022-01-18", description:"description2",content:"content2"},
    {id:"3", title:"tittle", date:"2021-07-18", description:"description3",content:"content3"},
    {id:"4", title:"tittle", date:"2021-01-18", description:"description4",content:"content4"},
  ]);
};


export default function Index() {
  const data = useLoaderData();
  return (
      <div>
       <Post data={data} />
       
      </div>
  );
}