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



module.exports={
    getName,
    getNameId,
    // getChapter,
    // getchapterId
}
