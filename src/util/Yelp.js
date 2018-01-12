const apiKey = 'JwpfBZObvuwcX6zTUWPH3aHFiG7g3MNmxnm2Zp6BjMEfTxR7EiQOa6U2-k9x5rzWF380v4tpLrvrIPKAbgC-WISbi7Jc_nk6hSx9D0Pbe9JJ8UakGyWFSZ3yBeFYWnYx';

export const Yelp = {
  search: function(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {headers: {Authorization: `Bearer ${apiKey}`}}
    ).then(response => {
      return response.json().then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });

          //return businesses
        }
      });
    });
  }
};

// refactored, this does return the businesses from Yelp, but not sure if it works for the rest of the project
/*
const apiKey = 'JwpfBZObvuwcX6zTUWPH3aHFiG7g3MNmxnm2Zp6BjMEfTxR7EiQOa6U2-k9x5rzWF380v4tpLrvrIPKAbgC-WISbi7Jc_nk6hSx9D0Pbe9JJ8UakGyWFSZ3yBeFYWnYx';
const Yelp = {
  async search(term, location, sortBy) {
    try {
      let response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: {Authorization: `Bearer ${apiKey}`}}
      );
      if (response.ok) {
        let jsonResponse = await response.json();
        let businesses = jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
        console.log(businesses);
        return businesses;
      }
    } catch(error) {
      console.log(error);
    }
  }
}
*/
