export const fetchLocationName = async (lat, lng) => {
  const res =  await fetch(
        'https://www.mapquestapi.com/geocoding/v1/reverse?key=wjhlmZyRhZVGvfS7aVQvF7XAwIn9OgH5&location=' + lat + '%2C' + lng + '&outFormat=json&thumbMaps=true',
    )
        
        return await res.json()
 
};


export const fetchData = async () => {
    const res = await fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data',
        {
            headers:
            {
                "Authorization": "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
                "Content-Type": "application/json"
            },

        })
        return await res.json();
}