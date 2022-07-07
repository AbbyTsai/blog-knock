import React from "react";

function Post({ data }) {
  return (
    <div className="w-screen max-h-screen">
    <div className="mt-8 grid grid-cols-1 auto-rows-max gap-1 text-center sm:grid-cols-2">
      {data.map(item => ( 
          <div className="border-8 rounded-r-xl border-purple-500" key={item.title}>
            <div className="h-16 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <div className="h-12 w-screen">.</div>     
            <h2 className="font-black text-6xl">{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.date}</p>
            <div className="h-12 w-screen">.</div>
            <button className="rounded-lg bg-purple-200 px-2"><a href={'#'+item.id}>open</a></button>
          </div>
        ))}

        {data.map(item => ( 
          <div className="bg-purple-200 hidden border-8 rounded-r-xl border-purple-500 h-screen w-screen fixed focus:block target:block" key={item.id} id={item.id}>
            <div className="h-16 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <h2 className="font-black text-8xl pt-5">{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.date}</p>
            <p>{item.content}</p>
            <button className="rounded-lg bg-purple-400 px-2"><a href={'/blog'}>back</a></button>
          </div>
        ))}     
        
        
        </div> 

        <footer className="text-center w-screen bg-purple-200 relative sm:absolute">
        copyright2022 @AbbyTsai - made with Thanks ❤!
      </footer>

    </div>
  );
}

export default Post