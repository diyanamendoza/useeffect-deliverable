const resultsMap = (results) => {
    return results.map(character => ({
        name: character.name,
        species: character.species,
        gender: character.gender,
        image: character.image,
        origin: character.origin.name,
        status: character.status
        }))
}

//TO DO: destructure info object from allData, return array instead where [0] is results and [1] is info for pagination 
export const fetchAll = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const allData = await res.json()
    const { results } = allData
    return resultsMap(results)
}

export const fetchSearch = async (searchQuery) => {
    const lowerCaseQuery = searchQuery.toLowerCase()
    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${lowerCaseQuery}`)
    const { results } = await res.json()

    if(!results) return []
    return resultsMap(results)
}

export const fetchFilter = async (searchQuery, species, status) => {
    const lowerCaseQuery = searchQuery.toLowerCase()
    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${lowerCaseQuery}&species=${species}&status=${status}`)
    const { results } = await res.json()

    if(!results) return []
    return resultsMap(results) 
}

export const fetchAllSpeciesFilter = async (searchQuery, status) => {
    const lowerCaseQuery = searchQuery.toLowerCase()
    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${lowerCaseQuery}&status=${status}`)
    const { results } = await res.json()

    if(!results) return []
    return resultsMap(results) 
}