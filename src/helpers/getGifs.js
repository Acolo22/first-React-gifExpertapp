

export const getGif = async(categoy) => {
    const url= `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoy)}&limit=10&api_key=sbgti8AFGdaOmgPlAVD8ADhr3TvcAron`;
    const resp = await fetch(url); 
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return(gifs);

}