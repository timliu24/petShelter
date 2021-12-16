const PetController = require("../controllers/pet.controller");

module.exports = function(app){
    app.post('/api/pets', PetController.createPet);
    app.get('/api/pets', PetController.findAllPets);
    app.get('/api/pets/:_id', PetController.findOnePet);
    app.put('/api/pets/:_id', PetController.updatePet);
    app.delete('/api/pets/:_id', PetController.deletePet);
}