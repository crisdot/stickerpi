
export const getGifs = async (category) => {

    const apiKey = `https://api.giphy.com/v1/gifs/search?api_key=YCZg0HE6aOVfzWFYP6LiUgTckExlpxb9&q=${ encodeURI(category) }&limit=10`;
    const resp = await fetch(apiKey);

    const {data} = await resp.json();

    const gifs = data.map((img)=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;

}