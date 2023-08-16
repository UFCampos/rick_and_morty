const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

async function getCharById(req, res) {
    try {
        const { data } = await axios(`${URL}/${req.query.id}`);
        if (data.name) { 
            const { id, status, name, species, origin, image, gender } = data;
            const character = { id, status, name, species, origin, image, gender };
            res.status(200).json(character);
        }
        else {
            res.status(404).send('Not found');
        }
        
    } catch (err) {
        res.status(500).send(err);
    }
}
    

module.exports = getCharById
