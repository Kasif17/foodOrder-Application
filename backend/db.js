// const mongoose = require('mongoose');

// const mongoURI =
//   'mongodb+srv://developer786kasif:kasif321@cluster0.8oxcop0.mongodb.net/gofoodkhan?retryWrites=true&w=majority';

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true, // Fixed typo in option name
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');

//     const db = mongoose.connection;

//     db.on('error', (err) => {
//       console.error('MongoDB Connection Error:', err);
//     });

//     db.once('open', async () => {
//       try {
//         const fooditemsCollection = db.collection('fooditems');
//         const foodCatagoryCollection = db.collection('foodCatagory');

//         const data = await fooditemsCollection.find({}).toArray();
//         const catData = await foodCatagoryCollection.find({}).toArray();

//         global.foodCatagory = catData;
//         global.fooditems = data;

//         console.log('Fetched data:', global.fooditems);
//       } catch (err) {
//         console.error('Error fetching data:', err);
//       }
//     });
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   }
// };

// module.exports = mongoDB;

const mongoose = require('mongoose');

const mongoURI =
  'mongodb+srv://developer786kasif:kasif786@cluster0.8oxcop0.mongodb.net/gofoodkhan?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    const db = mongoose.connection;

    db.on('error', (err) => {
      console.error('MongoDB Connection Error:', err);
    });

    db.once('open', async () => {
      try {
        const fooditemsCollection = db.collection('fooditems');
        const foodCatagoryCollection = db.collection('foodCatagory');

        const data = await fooditemsCollection.find({}).toArray();
        const catData = await foodCatagoryCollection.find({}).toArray();

        if (data.length > 0) {
          global.foodCatagory = catData;
          global.fooditems = data;
          console.log('Fetched data:', global.fooditems);
        } else {
          console.log('No data found in collections.');
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

module.exports = mongoDB;


// const mongoose = require('mongoose');

// const mongoURI =
//   'mongodb+srv://developer786kasif:kasif321@cluster0.8oxcop0.mongodb.net/gofoodkhan?retryWrites=true&w=majority';

// const mongoDB = async() => {
//         try {
//           await mongoose.connect(mongoURI, {
         
//           });
//           console.log('Connected to MongoDB');

//           const fetch_data = await mongoose.connection.db.collection("fooditems");
//           fetch_data.find({}).toArray( async function(err,data){
//             const foodCatagory = await mongoose.connection.db.collection("foodCatagory");
//             foodCatagory.find({}).toArray(function(err,catData){
//               if(err) console.log(err);
//               else{
//                 global.foodCatagory=catData
//                global.fooditems = data;
//                console.log(global.foodCatagory)
//               }
//             })
            
//           })
//         } catch (err) {
//           console.error('Error connecting to MongoDB:', err);
//         }
//       };
      
// //   await mongoose.connect(mongoURI,{ userNewUrlParser: true},async(err,result)=>{
// //     if (err) console.log("Error",err)
// //     else{
// //      console.log("connected");
// //     }
// //   });

// //  };

// module.exports = mongoDB;
