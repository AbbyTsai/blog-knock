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
    return (
    <div>
      <div className="flex flex-col w-screen h-screen justify-center items-center pt-8">
        <h1 className="text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">coming!</h1>
        <p>here's a little bit about the things. </p>
        <p>sorry, we get error on the way.</p>
      </div>

      <footer className="bg-purple-200 absolute bottom-0 text-center w-screen">
        copyright2022 @AbbyTsai - made with Thanks ❤!
      </footer>   
    </div>
    );
  }
