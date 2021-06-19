const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ecom", { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => console.log("Connection Successfull...") )
.catch( (err) => console.log(err) );

const itemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : Number,
    rating : Number,
    review: String
});


// Collection Creation
const Item = new mongoose.model("Item", itemSchema);


// Create document
const createDocument = async () => {
    try{
        const item1 = new Item({
            name : "Pen",
            price : 2,
            rating : 5, 
            review : "Very good product"
        });
        
        const result = await item1.save();  //Saving the document
        // console.log(result);
    }catch(err){
        console.log(err);
    }
}

createDocument();


// Read Document 
const getDocument = async () => {
    try{
        const result = await Item.find();  // You can also pass query inside find()
        console.log(result);
    }catch(err){
        console.log(err)
    }
};

getDocument();


// Update document

const updateDocument = async (_id) => {
    const result = await Item.updateOne( {_id}, {
        $set : {
            name : "Pencil"
        }
    } );  
    // you can also use Item.findByIdAndUpdate

    console.log(result);
};

// updateDocument("60781bd0e38fd03ad8501deb");


// Delete document

const deleteDocument = async (_id) => {
    try{
        const result = await Item.deleteOne( {_id} );
        //You can also use Item.findByIdAndDelete
        console.log(result);
    }catch(err){
        console.log(err);
    }
};

deleteDocument("60781e4e1575886490b3e277");

