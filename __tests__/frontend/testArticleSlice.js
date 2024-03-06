import articlesReducer, {
  updateLatestArticles,
  updateFavoriteArticles,
  updateSearchArticles,
} from "../../client/redux/articleSlice.js";

describe("articlesReducer", () => {
  const initialState = {
    latestArticles: [],
    favoriteArticles: [],
    searchArticles: [],
  };

  it("should return the initial state", () => {
    expect(articlesReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle updateLatestArticles", () => {
    const newLatestArticles = [{ id: 1, title: "New Article" }];
    const action = updateLatestArticles(newLatestArticles);
    const newState = articlesReducer(initialState, action);
    expect(newState.latestArticles).toEqual(newLatestArticles);
  });

  it("should handle updateFavoriteArticles", () => {
    const newFavoriteArticles = [{ id: 1, title: "New Favorite Article" }];
    const action = updateFavoriteArticles(newFavoriteArticles);
    const newState = articlesReducer(initialState, action);
    expect(newState.favoriteArticles).toEqual(newFavoriteArticles);
  });

  it("should handle updateSearchArticles", () => {
    const newSearchArticles = [{ id: 1, title: "New Search Article" }];
    const action = updateSearchArticles(newSearchArticles);
    const newState = articlesReducer(initialState, action);
    expect(newState.searchArticles).toEqual(newSearchArticles);
  });
});
