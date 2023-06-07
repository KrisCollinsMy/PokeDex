import { describe, expect, it, vi } from "vitest";
import { fetchData, filterIdFromSpeciesURL } from "../utils/apiUtils";

describe("fetchData", () => {
  it("fetches data from the API", async () => {
    const url = "https://example.com/api/data";
    const mockResponse = { foo: "bar" };

    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockResponse),
    });

    const result = await fetchData(url);

    expect(global.fetch).toHaveBeenCalledWith(url);
    expect(result).toEqual(mockResponse);
  });

  it("handles errors when fetching data", async () => {
    const url = "https://example.com/api/data";
    const mockError = new Error("Network error");

    global.fetch = vi.fn().mockRejectedValue(mockError);

    console.log = vi.fn();

    const result = await fetchData(url);

    expect(global.fetch).toHaveBeenCalledWith(url);
    expect(console.log).toHaveBeenCalledWith("Error fetching data:", mockError);
    expect(result).toBeUndefined();
  });
});

describe("filterIdFromSpeciesURL", () => {
  it("filters ID from species URL", () => {
    const url = "https://pokeapi.co/api/v2/pokemon-species/25/";
    const expectedId = "25";

    const result = filterIdFromSpeciesURL(url);

    expect(result).toEqual(expectedId);
  });

  it("handles URLs without ID", () => {
    const url = "https://pokeapi.co/api/v2/pokemon-species/";
    const expectedId = "";

    const result = filterIdFromSpeciesURL(url);

    expect(result).toEqual(expectedId);
  });

  it("handles other URL formats", () => {
    const url = "https://pokeapi.co/api/v2/pokemon-species/150";
    const expectedId = "150";

    const result = filterIdFromSpeciesURL(url);

    expect(result).toEqual(expectedId);
  });
});
