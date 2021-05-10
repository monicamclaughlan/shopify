import React from 'react'

const Nominations = ({nominated, remove}) => {

    const list = nominated.map((title,index) => {
        return (
            
                <div>
                    <h3 key={index}>{title}</h3>
                    <button onClick={() => remove(index)}>Remove from List</button>
                </div>
        )
    })
    return (
        <>
        <h1>Nominations</h1>
        <div className="nominated">
        {list}
        </div>
        </>
    )
}

export default Nominations
