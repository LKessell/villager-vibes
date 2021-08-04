const fetchVillagers = () => {
  return fetch('https://acnhapi.com/v1a/villagers/')
    .then(response => response.json())
}

export default fetchVillagers;
