import Search from "./Search"
import Filter from "./Filter"
import Sort from "./Sort"

export default function Controls ({ 
    searchQuery,
    setSearch,
    handleSubmit,
    species,
    setSpecies,
    status,
    setStatus,
    sort,
    setSort
    }) {

    return (
        <div className='controls-container'>
          <Search                     
            setSearch={setSearch}
            searchQuery={searchQuery}
            handleSubmit={handleSubmit}/>
            <div className='filters'>
                <Filter 
                    category={'Species'}
                    selection={species}
                    filterChange={setSpecies}
                    options={['human', 'alien', 'unknown']}
                />
                <Filter 
                    category={'Status'}
                    selection={status}
                    filterChange={setStatus}
                    options={['alive', 'dead', 'unknown']}
                />
            </div>
        <Sort                     
            selection={sort}
            filterChange={setSort}
            options={['a-z', 'z-a']} />
        </div>
      )
    }