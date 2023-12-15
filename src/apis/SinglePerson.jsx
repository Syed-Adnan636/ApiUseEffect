import React from 'react'

const SinglePerson = ({avatar_url,login,organizations_url}) => {
return (
    <>
    <div className="col-md-3">
        <div className="card my-1 p-3 text-capitalize rounded-0">
            <img src={avatar_url} alt="" />
            <h4>Name: {login}</h4>
            <a href={organizations_url}>Organizations Url</a>
        </div>
    </div>
    </>
)
}

export default SinglePerson