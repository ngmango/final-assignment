const mongoose = require('mongoose'),
Schema = mongoose.Schema;


const artistSchema = new Schema({
    Artist: {type: String},
    Date:{type: String},
    Venue:{type: String}
});

// next, create a model
const ArtistModel = mongoose.model('Artists', artistSchema);

module.exports = ArtistModel;