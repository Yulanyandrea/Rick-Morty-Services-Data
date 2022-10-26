const axios=require('axios');
const api="https://rickandmortyapi.com/api";

//PERSONAJES
async function getName() {
    try{
        const response = await axios.get(`${api}/character`);
        const res = response.data.results;

        const allCharacter = res.map( item => {
            return item.name;
        })

        console.log(allCharacter);

    } catch (err) {
        console.log(err);
    }
}

//PERSONAJES POR ID

async function getNameId(id){
    try {
        const response=await axios.get(`${api}/character/${id}`)
        console.log(response.data.name)
    } catch (error) {
        console.log(error)
    }
}

// EPISODIOS

async function getChapter(){
    try {
        const response=await axios.get(`${api}/episode`)
        const chapters=response.data.results
        const allCharacter = chapters.map( item => {
            return item.name;
        })
        console.log(allCharacter);
      
    } catch (error) {
        console.log(error)
        
    }
}

//EPISODIOS POR ID
async function getchapterId(id){
    try {
        const response=await axios.get(`${api}/episode/${id}`)
        const Episode=response.data.characters;
        console.log(Episode)
        
    } catch (error) {
        console.log(error)
        
    }
}

module.exports={
    getName,
    getNameId,
    getChapter,
    getchapterId
}
