import { useState, useEffect } from 'react'
import { fetchAll, fetchFilter, fetchSearch, fetchAllSpeciesFilter } from '../../services/fetch'
import Controls from '../../components/Controls/Controls'
import CharacterList from '../../components/CharacterList/CharacterList'
import './LandingPage.css'

export default function LandingPage() {
    const [loading, setLoading] = useState(true);
    const [allresults, setAllResults] = useState([])

    const [searchQuery, setSearch] = useState('')
    const [species, setSpecies] = useState('')
    const [status, setStatus] = useState('')
    const [sortSelection, setSort] = useState('')


//useEffect for all results
    useEffect(() => {
        const getAll = async () => {
            const results = await fetchAll()
            // console.log(results)
            setAllResults(results)
            setLoading(false)
        }
        getAll()
    }, [])

//handleSubmit for search button
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const results = await fetchSearch(searchQuery)
        setAllResults(results)
        setLoading(false)
        setSpecies('')
        setStatus('')
    }

//useEffect for multi filter
    useEffect(() => {
        const getMultiFilter = async () => {
            setLoading(true)
            const results = await fetchFilter(searchQuery, species, status)
            setAllResults(results)
            setLoading(false)          
        }
        getMultiFilter()
    }, [species, status, searchQuery])

//useEffect for all species bug (for instance where changing species back to all while mainting status filter did not work)
    useEffect(() => {
        const getFilterAllSpecies = async () => {
            if(species === '') {
                const results = await fetchAllSpeciesFilter(searchQuery, status)
                setAllResults(results)
                setLoading(false)
            }
        } 
        getFilterAllSpecies()
    }, [species, status, searchQuery])

//useEffect for sort
    useEffect(() => {
        // if(!sortSelection) return
        const sortAction = async () => {
            setLoading(true)
            const results = await fetchFilter(searchQuery, species, status)
            if(sortSelection === 'a-z') {
                const sorted = [...results].sort(function (a,b) { 
                    let nameA = a.name.toUpperCase()
                    let nameB = b.name.toUpperCase()
                    if(nameA < nameB) { return -1 }
                    if(nameA > nameB) { return 1 }
                    return 0
                 })
                 setAllResults(sorted)
                } 
            if(sortSelection === 'z-a') {
                const sorted = [...results].sort(function (a,b) { 
                    let nameA = a.name.toUpperCase()
                    let nameB = b.name.toUpperCase()
                    if(nameA > nameB) { return -1 }
                    if(nameA < nameB) { return 1 }
                    return 0
                })
                setAllResults(sorted)       
            }
            setLoading(false)
        }
        sortAction()
    }, [sortSelection, searchQuery, species, status])


    return (
        <div className='landing-page'>
            <header>
                <img src='./Rick_and_Morty_logo.png' alt='Rick and Morty logo' />
                <h1>Character DB</h1>
            </header>
            <main>
                <Controls 
                    //props for search
                    setSearch={setSearch}
                    searchQuery={searchQuery}
                    handleSubmit={handleSubmit}

                    //props for species filter
                    species={species}
                    setSpecies={setSpecies}

                    //props for status filter
                    status={status}
                    setStatus={setStatus}

                    //props for sort
                    sort={sortSelection}
                    setSort={setSort}

                    />
                {loading ? <h3> Loading </h3> : 
                <CharacterList characters={allresults} />
                }
            </main>
        </div>

    )
}