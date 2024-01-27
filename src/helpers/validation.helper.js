const { validationError } = require('./errors.helper');

const validationData = ({ nombre, nCuerdas, color } = {}) => {
  if (!nombre) throw new validationError('Nombre es requerido');
  if (!nCuerdas) throw new validationError('Numero de cuerdas es requerido');
  if (!color) throw new validationError('Color es requerido');
};

module.exports = { validationData };
