import React from "react";

function Post({ post }) {
  return (
    <div className="w-screen max-h-screen">
    <div className="mt-8 grid grid-cols-1 auto-rows-max gap-1 text-center sm:grid-cols-2">
        {post.items.map(item => ( 
          <div className="border-8 rounded-r-xl border-purple-500" key={item.fields.title.slice(0,10)}>
            <div className="h-16 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <h2>{item.fields.title}</h2>
            <p>{item.fields.description}</p>
            <p>{item.fields.date.slice(0,10)}</p>
            <button className="rounded-lg bg-purple-200 px-2"><a href={'#'+item.fields.date.slice(0,10)}>open</a></button>
          </div>
        ))}

        <div>
        {post.items.map(item => ( 
          <div className="pt-5 w-full h-full fixed bg-violet-100 inset-0 border-8 rounded-r-xl border-purple-500 hidden target:block focus:block" id={item.fields.date.slice(0,10)} key={item.fields.date.slice(0,10)}>
            <div className="h-16 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <h2 className="text-4xl">{item.fields.title}</h2>
            <p>{item.fields.tag}</p>
            <p>{item.fields.description}</p>
            <p>{item.fields.date.slice(0,10)}</p>
            {item.fields.content.content.map(contents => (            
                <p key={contents.content[0].value}>{contents.content[0].value}</p>             
            ))}
          <button className="rounded-lg bg-purple-200 px-2"><a href='.'>back</a></button>

          </div>
        ))}
        
        </div>
        
        </div> 

        <footer className="text-center w-screen bg-purple-200 absolute bottom-0">
        copyright2022 @AbbyTsai - made with Thanks ❤!
      </footer>

    </div>
  );
}

export default Post