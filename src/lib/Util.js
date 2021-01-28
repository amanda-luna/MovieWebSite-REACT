export const orderGenresArray = (genres) => {
  let sorted = genres.sort(function sortGenres(a, b) {
    return b.name < a.name ? 1 : b.name > a.name ? -1 : 0;
  });

  return sorted;
};
