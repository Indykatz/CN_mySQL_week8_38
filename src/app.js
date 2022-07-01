const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const {
  addMovie,
  listMovies,
  deleteMovie,
  updateMovies,
  updateMovie2,
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
      await updateMovies(
        { title: yargsObj.newTitle, actor: yargsObj.newActor },
        { where: { title: yargsObj.oldTitle } }
      );
      // Update 1
    } else if (yargsObj.update) {
      const toEdit = { title: yargsObj.update };
      let update = {};
      if (yargsObj.title) {
        update = { ...update, title: yargsObj.title };
      }
      if (yargsObj.actor) {
        update = { ...update, actor: yargsObj.actor };
      }
      // Update 2
      await updateMovie2(toEdit, update);
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
