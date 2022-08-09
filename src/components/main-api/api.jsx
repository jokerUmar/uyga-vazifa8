import {useEffect, useState} from 'react'
import "./api.css"

function Api({data , totalPage,lastData, paginate}) {

const dot = []

console.log(dot);

for (let i = 1; i <=Math.ceil( data.length/totalPage); i++) {
    dot.push(i)
}

return (
<div className="api">
    <div className="container1" style={{backgroundColor:""}}>
        <h1 className='api-title'>API</h1>
        <ul className='api-list'>
            {
            lastData.map( (i , idx) => {
            return <li className='item-api'>
                <span className='id'>{idx+1}</span> <span className='api__text'> {i.title}</span>
            </li>
            })
            }
        </ul>

        <ul className="pagination" style={{marginTop:'20px'}}>

            {
             dot.map(i => {
            return <li className="waves-effect" onClick={()=>paginate(i)}><a  href="#!">{i}</a></li>
 
             })
            }
            
            
        </ul>

    </div>
</div>
)
}

export default Api