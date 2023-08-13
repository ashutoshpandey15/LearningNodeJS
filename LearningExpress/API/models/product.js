// Defining the schema and model for Product

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'product name must be provided'],

    },
    price: {
        type: Number,
        required: [true, 'product price must be provided'],
    },
    featured: {
        type: Boolean,
        default: false,

    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum:{
            values:['apple','samsung','dell','mi','lg','google','amazon','microsoft','ibm','tesla','facebook','twitter','instagram','youtube','tiktok','snapchat','whatsapp','telegram','signal','discord','zoom','skype','linkedin','netflix','spotify','twitch','github','stackoverflow','quora','reddit','pinterest','tumblr','medium','wordpress','blogger','wix','weebly',''],
            message:`{VALUE} is not supported`
        },
    },
})

//Creating a collection of products and exporting it
module.exports = mongoose.model('Product', productSchema);

