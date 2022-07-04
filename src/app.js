const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const {
  addMovie,
  listMovies,
  deleteMovie,
  updateMovie,
} = require("./movie/functions");

const app = async (yargsObj) => {
  try {
    await sequelize.sync({ alter: true });
    //add something to movie table
    if (yargsObj.add) {
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
      console.log("Success");
      //list contents of movie table
    } else if (yargsObj.list) {
      await listMovies();
      //update one entry in movie table
    } else if (yargsObj.update) {
      const update = { title: yargsObj.update };
      let edits = {};
      // Check if the identifier exists, if yes add it to the changes object
      if (yargsObj.title) {
        //using spread operator instead of object assign
        edits = { ...edits, title: yargsObj.title };
      }
      if (yargsObj.actor) {
        edits = { ...edits, actor: yargsObj.actor };
      }
        await updateMovie(edits, update);

      //delete entry from table
    } else if (yargsObj.delete) {
      await deleteMovie({ title: yargsObj.title });
      // end
    } else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
  } finally {
    await sequelize.close();
  }
};

app(yargs.argv);
