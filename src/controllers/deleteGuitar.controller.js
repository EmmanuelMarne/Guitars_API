const Guitars = require('../models/Guitars.model');

const deleteGuitarController = async (req, res) => {
  try {
    const { guitarId } = req.body;
    const guitar = await Guitars.findByPk(guitarId);
    if (guitar) {
      await guitar.destroy();
      return res.status(201).json({ response: 'borrado exitosamente' });
    }
    res.status(400).json({ error: 'no hay registros' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteGuitarController;
