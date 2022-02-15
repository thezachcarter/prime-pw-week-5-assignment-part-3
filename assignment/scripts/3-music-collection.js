console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished ){
  let record ={
    title : title,
    artist : artist,
    yearPublished : yearPublished
  }
  collection.push( title, artist, yearPublished );
  return record
} // end addToCollection

console.log( addToCollection( 'Mm..Food', 'MF DOOM', 2004  ) );

console.log( collection );
