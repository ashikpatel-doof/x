const mongoose = require('mongoose')

const connectToDB =  async ()=>{
 try {
     const conn = await mongoose.connect("mongodb+srv://Ashik_Stories:ashik@cluster1.bcndx.mongodb.net/InstituteData?retryWrites=true&w=majority",{
        useNewUrlParser :true,
        useFindAndModify :false,
        useUnifiedTopology :true
     })

     console.log("Connnection Has been Settup.....")
 } catch (error) {
     console.log("Not able to Connect With Cluster...")
 }
}

module.exports = connectToDB