export function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((eachRestaurant) => {
    return eachRestaurant?.info.name
      ?.toLowerCase()
      ?.includes(searchText.toLowerCase());
  });
  console.log(filterData);
  return filterData;
}
