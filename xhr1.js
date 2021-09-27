const getblogs = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "http://api.countrylayer.com/v2/all?access_key=c350f209d1c04c47c164904f14e867b3");

    xhr.responseType="json";
    xhr.onload = () => {
         console.log(xhr.response);
        const blogs=xhr.response;
         for(let blog of blogs)
           console.log(blog.flags,blog.name,blog.region,blog.subregion,blog.population)
        
        
    };
    xhr.send();

};
getblogs();

// http://api.countrylayer.com/v2/all?access_key=c350f209d1c04c47c164904f14e867b3
