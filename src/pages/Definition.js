import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "./NotFound";
import DefinitionSearch from "../components/DefinitionSearch";

export default function Definition() {
    const [word, setWord] = useState()
    const [notFound, setNotFound] = useState(false)
    const [error, setError] = useState(false)

    let {search} = useParams()
    const navigate = useNavigate()

    // const [serverError, setServerError] = useState('')

    useEffect(() => {
        // const url = 'https://httpstat.us/500'
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search
        fetch(url)
            .then((response) => {
                console.log(response.status)
                if (response.status === 404) {
                    setNotFound(true)
                } else if (response.status === 401) {
                    navigate('/login')
                } else if (response.status === 500) {
                    setError(true)
                }

                if (!response.ok) {
                    setError(true)
                    throw new Error('Something went wrong!')
                }

                return response.json()
            })
            .then((data) => {
                setWord(data[0].meanings)
            })
            .catch((e) => {
                console.log(e.message)
            })
    }, [])

    if (notFound == true) {
        return (
            <>
                <NotFound />
                <Link to='/dictionaries'>Search another</Link>
            </>
        )
    }

    if (error == true) {
        return (
            <>
                <p>Someting went wrong, try again?</p>
                <Link to='/dictionaries'>Search another</Link>
            </>
        )
    }

    return (
        <>
            {word ? (
                <>
                    <h1>This is definition of:</h1>
                    {word.map((meaning) => {
                        return <p key={uuidv4()}>
                                {meaning.partOfSpeech + " : "}
                                {meaning.definitions[0].definition}
                            </p>
                    })}
                    <p>Searh again here:</p>
                    <DefinitionSearch />
                </>
                ) : null}
        </>
        
    )
}