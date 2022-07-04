const Movie = require("./table");

// C - Create
exports.addMovie = async (movieObj) => {
  try {
    const response = await Movie.create(movieObj);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// R - Read
exports.listMovies = async () => {
  try {
    const selected = await Movie.findAll();
    // console.log(selected.every((selected) => selected instanceof Movie));
    console.log("All Movies:", JSON.stringify(selected, null, 2));
  } catch (error) {
    console.log(error);
  }
};
// U - Update 1
exports.updateMovie = async (updateObj, movieObj) => {
  try {
    const updated = await Movie.update(updateObj, {
      where: movieObj,
    });
  } catch (error) {
    console.log(error);
  }
};
// U - Update 2
// exports.updateMovie2 = async (whereObj, updateObj) => {
//   try {
//     const response = await Movie.update(updateObj, { where: whereObj });
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

// D - Delete
exports.deleteMovie = async (movieObj) => {
  try {
    const response = await Movie.destroy({ where: movieObj });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
