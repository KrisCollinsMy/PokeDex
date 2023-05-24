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
