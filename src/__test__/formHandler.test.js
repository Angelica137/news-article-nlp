import { handleSubmit } from "/Users/Angelica/Documents/Coding/Udacity/front-end-nanodegree/news-article-nlp/src/client/js/formHandler.js";

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ summary: "Mock summary response" }),
  })
);

// Mock document elements
document.getElementById = jest.fn((id) => ({
  value: "Mock input value",
  id: id,
}));
const eventMock = { preventDefault: jest.fn() };

// Mock the checkForName function
jest.mock(
  "/Users/Angelica/Documents/Coding/Udacity/front-end-nanodegree/news-article-nlp/src/client/js/nameChecker.js",
  () => ({
    checkForName: jest.fn(),
  })
);

describe("handleSubmit function", () => {
  test("should handle form submission correctly", async () => {
    await handleSubmit(eventMock);

    expect(eventMock.preventDefault).toHaveBeenCalled();

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: "Mock input value" }),
    });

    expect(document.getElementById).toHaveBeenCalledWith("name");
    expect(document.getElementById("results").innerHTML).toBe(
      "Mock summary response"
    );
  });
});