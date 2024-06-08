// backend/controllers/classesController.js
const classes = [
    { id: 1, title: 'Clase de Matemáticas', description: 'Aprende cálculo y álgebra avanzada', image: 'https://picsum.photos/id/0/300/200' },
    { id: 2, title: 'Clase de Arte', description: 'Descubre tu creatividad con pintura y escultura', image: 'https://picsum.photos/id/21/300/200' },
    { id: 3, title: 'Clase de Música', description: 'Aprende a tocar instrumentos y teoría musical', image: 'https://picsum.photos/id/237/300/200' }
  ];
  
  const getClasses = (req, res) => {
    res.json(classes);
  };
  
  const addClass = (req, res) => {
    const newClass = req.body;
    newClass.id = classes.length + 1;
    classes.push(newClass);
    res.status(201).json(newClass);
  };
  
  module.exports = {
    getClasses,
    addClass,
  };
  