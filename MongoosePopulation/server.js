const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect("mongodb://localhost/SolarSystem", { useNewUrlParser: true, useUnifiedTopology: true })

const solarSystemSchema = new Schema({
    planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }],
    starName: String
})


const planetSchema = new Schema({
    name: String,
    system: { type: Schema.Types.ObjectId, ref: 'SolarSystem' },
    visitors: [{ type: Schema.Types.ObjectId, ref: 'Visitor' }]
})


const visitorSchema = new Schema({
    name: String,
    homePlanet: { type: Schema.Types.ObjectId, ref: 'Planet' },
    visitedPlanets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
})


const SolarSystem = mongoose.model("SolarSystem", solarSystemSchema)
const Planet = mongoose.model("Planet", planetSchema)
const Visitor = mongoose.model("Visitor", visitorSchema)


let ss = new SolarSystem({
    planets: [],
    starName: "Soya Way"
})


let p1 = new Planet({
    name: "Earthy",
    system: ss,
    visitors: []
})


let p2 = new Planet({
    name: "Marsy",
    system: ss,
    visitors: []
})


let p3 = new Planet({
    name: "Uranusy",
    system: ss,
    visitors: []
})


let v1 = new Visitor({
    name: "Mr mars",
    homePlanet: p2,
    visitedPlanets: []
})


let v2 = new Visitor({
    name: "Mr Uranus",
    homePlanet: p3,
    visitedPlanets: []
})



// Find a visitor's list of visited planets
// Visitor.findOne({}).populate("visitedPlanets").exec(function(err, visitor) {
// visitor.visitedPlanets.forEach(vp => console.log(vp.name))
// }) 

// Find all the visitors on a planet
// Planet.findOne({}).populate("visitors").exec(function(err, planet) {
// planet.visitors.forEach(v => console.log(v.name))
// }) 

//Find all the visitors in a system (subdocuments!)
// SolarSystem.findOne({}).populate({
//         path: "planets",
//         populate: {
//             path: "visitors"
//         }
//     }).exec(function (err, solarSystem){
//         for(planet of solarSystem.planets) {
//             planet.visitors.forEach(v => console.log(v.name))
//         }
//     }) 



