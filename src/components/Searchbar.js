// SeachBar.js
<<<<<<< HEAD
import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

function SearchBar() {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Search Here" />
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
=======
import { useState } from 'react'

function SeachBar(props) {
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>

            <input type="text" placeholder="Enter a search term here" onChange={
                (e) => setSearchTerm(e.target.value)
            }/>

            <input type="submit" />

>>>>>>> origin/RR_CONT
        </form>
    )
}

<<<<<<< HEAD

export default SearchBar
=======
export default SeachBar
>>>>>>> origin/RR_CONT
