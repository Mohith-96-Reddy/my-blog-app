export function paginate(array, page_size, page_number) {
    // implement your logic to paginate an array
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  
  export function getPageCount(totalItems, pageSize) {
    // implement your logic to get the total number of pages
    return Math.ceil(totalItems / pageSize);
  }
  