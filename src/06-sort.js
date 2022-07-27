/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByRuntimeAscending(songs) {
  const runtimeOrder = songs.sort((song1, song2) => {
    if(song1.runtimeInSeconds > song2.runtimeInSeconds){
      return 1
    }
    return -1
  })
  return runtimeOrder
}

/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
  const organizedArtists = songs.sort((song1, song2) => {
    let artistName1 = song1.artist.toLowerCase()
    let artistName2= song2.artist.toLowerCase()
    if(artistName1 > artistName2){
      return -1
    } return 1
    
  })
  return organizedArtists
}

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {
const organizedByTitle = songs.sort((song1, song2) => {
  let title1 = song1.title.toLowerCase()
  let title2 = song2.title.toLowerCase()
  if(title1 > title2){
    return 1
  } return -1
})
return organizedByTitle
}
module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
