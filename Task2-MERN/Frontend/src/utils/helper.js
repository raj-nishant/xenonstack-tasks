export function filterData(searchText, allItems) {
  const filterData = allItems.filter((eachRestaurant) => {
    return eachRestaurant?.info.name
      ?.toLowerCase()
      ?.includes(searchText.toLowerCase());
  });
  console.log(filterData);
  return filterData;
}
