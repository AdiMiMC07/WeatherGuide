import React from 'react'

const Search = (props) => {
    return (
        <>
            <div className="d-flex my-3" role="search" style={{ alignItems: "center", justifyContent: "center" }}>
                <input className="form-control me-2" name="location" type="search" placeholder="Search" aria-label="Search" onChange={props.onChange} />
                <button className="btn btn-outline-dark w-50" onClick={props.handleSubmitClick} type="submit">Search Your City here</button>
            </div>
        </>
    )
}

export default Search