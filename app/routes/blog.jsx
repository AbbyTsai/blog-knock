import Post from "../component/Post";
import { useLoaderData } from "@remix-run/react";

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.space_id, 
  accessToken: process.env.accessToken_key,
});

export function loader() {
  const entries = client.getEntries();
  console.log(entries);
  return entries;
}

export default function Index() {
  const data = useLoaderData();
  return (
      <div>
      <Post post={data} />
      </div>
  );
}

