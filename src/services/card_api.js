function fetchCard(cardsName, page, per_page) {
    const API_KEY = '42241043-db77f91fab78549391ec20709';
    return fetch(`https://pixabay.com/api/?q=${cardsName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`)
        .then(response => {
            if (response.ok)
                return response.json()
            
            return Promise.reject(
                new Error('Ведіть корректний запит!!!'),)
        })
        .catch(error => console.log(error))
}

export default fetchCard;
