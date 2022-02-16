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

console.log( addToCollection( 'Excitable Boy', 'Warren Zevon', 1978  ) );

console.log( collection );

console.log( addToCollection( 'Madvillainy', 'Madvillain', 2003  ) );

console.log( collection );

console.log( addToCollection( 'Liquid Swords', 'GZA', 1995  ) );

console.log( collection );

console.log( addToCollection( 'Operation: Doomsday', 'MF DOOM', 1999  ) );

console.log( collection );

console.log( addToCollection( 'Vaudeville Villain', 'Viktor Vaughn', 2003  ) );

console.log( collection );
