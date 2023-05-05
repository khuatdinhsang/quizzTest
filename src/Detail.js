import React from 'react'

const Detail = ({ detailStudent }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <p>Name: {detailStudent.name}</p>
            <p>Gender: {detailStudent.gender}</p>
            <p>Age: {detailStudent.age}</p>
            <p>Color: {detailStudent.color}</p>
            <p>Class: {detailStudent.class}</p>
        </div>
    )
}

export default Detail