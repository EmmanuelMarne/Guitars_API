const Guitars = require('../models/Guitars.model');

const postGuitarController = async (req, res) => {
  try {
    const { modelo, marca, tipo, nCuerdas, color } = req.body;

    const [guitar, create] = await Guitars.findOrCreate({
      where: { modelo },
      defaults: {
        marca,
        tipo,
        nCuerdas,
        color,
      },
    });

    if (!create) return res.status(409).json({ response: 'objeto ya creado' });
    res.status(201).json(guitar);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postGuitarController;
