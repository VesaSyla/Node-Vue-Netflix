const Film = require("../models/Film");

const getFilms = async (req, res) => {
  try {
    const films = await Film.find().sort({ _id: -1 });
    res.status(200).json(films);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getFilm = async (req, res) => {
  const { id: id } = req.params;
  try {
    const film = await Film.findOne({ _id: id });
    res.status(200).json(film);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createFilm = async (req, res) => {
  const url = req.protocol + "://" + req.get("host");

  const newFilm = new Film({
    title: req.body.title,
    description: req.body.description,
    image: url + "/images/" + req.files["image"][0].originalname,
    starring: req.body.starring,
    creators: req.body.creators,
    createdAt: new Date().toISOString(),
  });
  try {
    await newFilm.save();
    res.status(200).json({ newFilm: newFilm, success: true });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateFilm = async (req, res) => {
  const id = req.params.id;
  const url = req.protocol + '://' + req.get('host')

  const film = await Film.findById(id);

  if(!id) {
      return res.status(404).send('No film with that id.');
  }

  if(film) {
      if(req.files['image']) {
          film.image = url + '/images/' + req.files['image'][0].originalname;
      }
      film.title = req.body.title;
      film.description = req.body.description;
      film.starring = req.body.starring;
      film.creators = req.body.creators;
      const updatedPost = await film.save();
      
      if(updatedPost) {
          return res.status(200).send({ msg: 'Film Updated', data: updatedPost, success: true });
      } else {
          return res.status(500).send({ msg: 'Error in Updating Film' });
      }
  }
}

const deleteFilm = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(404).send("No film with that id.");
  }
  const deletedFilm = await Film.findByIdAndRemove(id);

  res.json({ message: "Film deleted successfully", post: deletedFilm });
};

module.exports = { getFilms, getFilm, createFilm, updateFilm, deleteFilm };
