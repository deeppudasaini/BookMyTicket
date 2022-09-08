const { default: axios } = require("axios")
const config = require('../config');
const knex = require('knex')(config.database);

const getAllMovie=async (request, response)=>{
const allMovie=await knex.select().from('movies')
return response.json(allMovie);


}
const getSingleMovie=async (request, response,id)=>{

}

const addNewMovie = async(request,response)=>{

}

const updateMovie = async(request,response)=>{
    
}
const deleteMovie = async(request,response)=>{
    
}
module.exports={
    getAllMovie
}