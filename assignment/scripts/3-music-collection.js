console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished ){
console.log('in addToCollection')
  let record = {
    title : title,
    artist : artist,
    yearPublished : yearPublished
  }
  collection.push( record );
  console.log(record);
  return record
} // end addToCollection

console.log( addToCollection( 'Mm..Food', 'MF DOOM', 2004  ) );

console.log( addToCollection( 'Excitable Boy', 'Warren Zevon', 1978  ) );

console.log( addToCollection( 'Madvillainy', 'Madvillain', 2003  ) );

console.log( addToCollection( 'Liquid Swords', 'GZA', 1995  ) );

console.log( addToCollection( 'Operation: Doomsday', 'MF DOOM', 1999  ) );

console.log( addToCollection( 'Vaudeville Villain', 'Viktor Vaughn', 2003  ) );

console.log( collection );

function showCollection( collection ){
console.log('in showCollection');
  for ( record of collection ){
    console.log( record.title + ' by ' + record.artist + ', published in ' + record.yearPublished );
    }//end for loop
  }//end showCollection

console.log( showCollection( collection ) );

function findByArtist ( findArtist, collection ){
console.log('in findByArtist');
  let found = [];
  for ( record of collection ){
    if ( findArtist === record.artist){
      found.push( findArtist )
    }//end if
  }//end for loop
  return found
}//end findByArtist

console.log( findByArtist('GZA', collection) );

console.log( findByArtist('Bing Crosby', collection) );

console.log( findByArtist('MF DOOM', collection) );

function search ( searchArtist, searchYear ){
  console.log('in search function');
  let searchResults = [];
  let searchObject = {
    artist: searchArtist,
    year:  searchYear
  }//end searchObject
  for(record of collection){
  if (searchObject.artist == record.artist && searchObject.year == record.year){
    searchResults.push(record);}
    else if (searchObject.artist == record.artist && searchObject.year == null){
    searchResults.push(record);}
    else if (searchObject.artist == null && searchObject.year == null){
    searchResults.push(collection);
    }//end if statment
  }//end for loop
  return searchResults
}//end search function

console.log( search( 'Viktor Vaughn', ));

console.log( search( 'Viktor Vaughn', 1999));

console.log( search());
