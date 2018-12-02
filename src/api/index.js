const url = 'https://www.googleapis.com';
const results = 20;

function getBooks(page, search) {
  const query = `${search || '""'}&maxResults=${results}&startIndex=${page *
    results}&projection=lite`;

  return fetch(`${url}/books/v1/volumes?q=${query}`).then(res => res.json());
}

export { getBooks };
