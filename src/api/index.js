const url = 'https://www.googleapis.com';
const results = 20;

function getBooks(page, search = '""') {
  return fetch(
    `${url}/books/v1/volumes?q=${search}&maxResults=${results}&startIndex=${page *
      results}&projection=lite`
  ).then(res => res.json());
}

export { getBooks };
