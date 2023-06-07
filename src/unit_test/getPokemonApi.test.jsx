import { getPokemonInfo, getPokemonDescription } from "../utils/getPokemonApi";
import { describe, expect, it, vi } from "vitest";
import { fetchData } from "../utils/apiUtils";

vi.mock("./fetchData");

describe("getPokemonInfo", () => {
  it("fetches and returns Pokemon info", async () => {
    const mockPokemonId = 25;
    const mockPokemonInfo = { id: 25, name: "pikachu" };

    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockPokemonInfo),
    });

    const result = await getPokemonInfo(mockPokemonId);

    expect(global.fetch).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon/" + mockPokemonId
    );
    expect(result).toEqual({ id: 25, name: "pikachu" });

    // Assert expectations about the fetched data
    expect(result).toHaveProperty("id", 25);
    expect(result).toHaveProperty("name", "pikachu");
  });

  it("handles errors when fetching Pokemon info", async () => {
    const mockPokemonId = "string";
    const mockError = new Error("Network error");

    global.fetch = vi.fn().mockRejectedValue(mockError);

    console.log = vi.fn();

    const result = await getPokemonInfo(mockPokemonId);

    expect(global.fetch).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon/" + mockPokemonId
    );
    expect(console.log).toHaveBeenCalledWith("Error fetching data:", mockError);
    expect(result).toBeUndefined();
  });
});

describe('getPokemonDescription', () => {
  it('fetches pokemon description', async () => {
    const pokemonId = 1;
    const mockResponse = { description: 'A description' };

    // Mock the fetchData function
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockResponse),
    });

    const result = await getPokemonDescription(pokemonId);

    expect(global.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon-species/1');
    expect(result).toEqual(mockResponse);
  });
});

