// Makes all favorites favorited: 
// $('#favorite-all').on('click', (event) => {
//     debugger; 
//     $('li').toggleClass('favorite');
//     $('li').toggleClass('not-favorite');
// });

//Makes one individual favorite favorited: 
// $('li').on('click', e => {
//     $(e.currentTarget).toggleClass('favorite');
//     $(e.currentTarget).toggleClass('not-favorite');
// });

//Adds another li to ul 
// const newLi = $('<li>');
// newLi.append('Wild geese that fly');
// newLi.addClass('not-favorite');
// $('ul').append(newLi);

//Solution 1: 
// const toggleLi = function(event) {
//     debugger; 
// }; 
// //Event listener and callback 
// $('ul').on("click", toggleLi); 

//Solution 2: 
// $('ul').on('click', 'li', e => {
//     $(e.currentTarget).toggleClass('favorite not-favorite');
// });

//Defaults 
// const addToFavorites = function (e) {
//     debugger;
// };
//Event Listener
// $('.favorite-adder').on('submit', addToFavorites);

