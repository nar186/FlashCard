import React from 'react'

const CardForm = ({FormData, handleChange}) => {
    return (
        <div>
            <label>
                Front
            </label>
            <br/>
            <textarea
            type = "textarea"
            id = "front"
            name = "front"
            rows = "3"
            placeholder = "Front side of the card"
            onChange = {handleChange}
            value ={FormData.front}
            style={{sidth: '100%'}}
            />
            <br/>
            <br/>
            <label>
                Back
            </label>
            <textarea
            type = "textarea"
            id = "back"
            name = "back"
            rows = "3"
            placeholder = "Back side of the Card"
            onChange={handleChange}
            value={FormData.back}
            style={{width:'100%'}}
            />
            <br/>
        </div>
    )
}
export default CardForm