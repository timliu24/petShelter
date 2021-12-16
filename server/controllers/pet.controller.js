const Pet = require("../models/pet.model");

const createPet = (request, response) => {
    const skills = [request.body.skillOne, request.body.skillTwo, request.body.skillThree];
    request.body.skills = skills;
    console.log("skills array:", skills);
    console.log("after adding,", request.body);
    Pet.create(request.body)
    .then((newPet) => response.json(newPet))
    .catch((err) => response.status(400).json(err));
};

const findAllPets = (request, response) => {
    Pet.find({}).collation({locale:'en',strength: 2}).sort({petType:1})
    .then((allPets) => {response.json(allPets)})
    .catch((err) => response.status(400).json(err));
};

const findOnePet = (request, response) => {
    Pet.findById({_id: request.params._id})
    .then((onePet) => {response.json(onePet)})
    .catch((err) => response.status(400).json(err));
};

const updatePet = (request, response) => {
    Pet.findByIdAndUpdate({_id: request.params._id},
        request.body,
        {
            new: true,
            runValidators: true
        })
        .then((updatedPet) => {response.json(updatedPet)})
        .catch((err) => response.status(400).json(err));
};

const deletePet = (request, response) => {
    Pet.deleteOne({_id: request.params._id})
    .then((deletedPet) => {response.json(deletedPet)})
    .catch((err) => response.status(400).json(err));
};

module.exports = {
    createPet,
    findAllPets,
    findOnePet,
    updatePet,
    deletePet,
};