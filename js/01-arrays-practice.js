//STEP 1
// let movies = ['Inception', ' Life of Walter Mitty', 'Lord of the Rings', 'GOT', 'Forest Gump'];
//   console.log(movies[2]);

//STEP 2
// let movies = new Array(5)
// movies[0] = 'Inception';
// movies[1] = 'Life Of Walter Mitty';
// movies[2] = 'Lord of the Rings';
// movies[3] = 'Games of Thrones';
// movies[4] = 'Forest Gump';
// console.log(movies[0]);

//STEP 3
// let movies = new Array('Inception', 'Life Of Walter Mitty', 'Lord of the Rings', 'Games of Thrones', 'Forest Gump');
// movies.splice(movies.length / 2, 0, 'Harry Potter');
// console.log(movies);

//STEP 4
// let movies = ['Inception', ' Life of Walter Mitty', 'Lord of the Rings', 'GOT', 'Forest Gump'];
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = ['Inception', 'Life of Walter Mitty', 'Lord of the Rings', 'GOT', 'Forest Gump', 'Harry Potter', 'LaLa Land'];
// for (let movie in movies) {
//     console.log(movies[movie]);
// }

//STEP 6
// let movies = ['Inception', 'Life of Walter Mitty', 'Lord of the Rings', 'GOT', 'Forest Gump', 'Harry Potter', 'LaLa Land'];
// for (let i of movies) {
//     console.log(i);
// }

//STEP 7
// let movies = ['Inception', 'Life of Walter Mitty', 'Lord of the Rings', 'GOT', 'Forest Gump', 'Harry Potter', 'LaLa Land'];
// for (let i of movies.sort()) {  
// console.log(i);
// }

//STEP 8 - needs line breaks after elements in array
// Array.prototype.myname = () => {};
// let movies = ['Inception', 'Life of Walter Mitty', 'Lord of the Rings', 'GOT', 'Forest Gump', 'Harry Potter', 'LaLa Land'];

// console.log(`My favorite movies are: \n ${movies}`);

// let leastFavMovies = movies.splice(3, 7);

// console.log("Movies I like:\n");
// for (let i of movies) console.log(`   ${i}`);

// console.log("Movies I regret watching:\n");
// for (let i of leastFavMovies) console.log(`   ${i}`);


//STEP 9
// let favMovies = ['Inception', 'Life of Walter Mitty', 'Lord of the Rings', 'GOT', 'Forest Gump', 'Harry Potter', 'LaLa Land'];
// leastFavMovies = favMovies.splice(3, 7);
// movies = leastFavMovies.concat(favMovies);
// console.log(movies);
// console.log(`my movies: ${movies.sort().reverse()}`);

//STEP 10 - array
// let favMovies = ['Inception', 'Life of Walter Mitty', 'Lord of the Rings', 'GOT', 'Forest Gump', 'Harry Potter', 'LaLa Land'];
// lastMovie = favMovies.pop();
// console.log(lastMovie);

//STEP 11
// let favMovies = ['Inception', 'Life of Walter Mitty', 'Lord of the Rings', 'GOT', 'Forest Gump', 'Harry Potter', 'LaLa Land'];
// // lastMovie = favMovies.reverse().pop();
// // console.log(lastMovie);
// firstMovie = favMovies.shift();
// console.log(firstMovie);

//STEP 12
let favMovies = ['Inception', 'Life of Walter Mitty', 'Lord of the Rings', 'GOT', 'Forest Gump', 'Harry Potter', 'LaLa Land'];
favMovies.splice(2, 3, 'Gone with the Wind', 'Lawrence of Arabia');
// favMovies.indexOf(aveMovies);
console.log(favMovies);


//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17