const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

async function getAllChars(req, res) {
    try {
        const { data } = await axios(`${URL}`);
        return res.status(200).json(data.results);
    } catch (err) {
        res.status(500).send(err);
    }
}


module.exports = getAllChars