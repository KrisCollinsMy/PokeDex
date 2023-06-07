export async function fetchData(url) {
  try {
    // Make an asynchronous API request
    const response = await fetch(url);
    const jsonData = await response.json();

    // Update the component state with the received data
    return jsonData;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

export function filterIdFromSpeciesURL(url) {
  return url
    .replace("https://pokeapi.co/api/v2/pokemon-species/", "")
    .replace("/", "");
}

export function handlePromise(promiseFn, setResult) {
  promiseFn()
    .then((result) => {
      setResult(result);
    })
    .catch((error) => {
      console.error(error);
    });
}
