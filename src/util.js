function get_random_item(list) {
  return list[Math.floor((Math.random()*list.length))];
}

export { get_random_item };
