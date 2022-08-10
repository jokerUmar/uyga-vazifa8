import {useState} from 'react'
import "./main.css"

function Main() {

const [name, setName] = useState("");
const [completed, setCompleted] = useState(false);

const [data, setData] = useState([
]);

const dataLength = {
name : name.trim().length
}

const addElement = () =>{
const item = {
name:name ,
id: Date.now(),
completed: completed
}

setData([...data , item])
setName('')

}

const deleteItem = (item) =>{
let filterItem = data.filter((obj) => {
return obj.id !== item
})

setData(filterItem)
}

const [current2, setCurrent2] = useState(1);
const [totalPage2, setTotalPage2] = useState(9);

const firstIndex2 = current2 * totalPage2
const lastIndex2 = firstIndex2 - totalPage2

const lastData2 = data.slice(lastIndex2 , firstIndex2)

let paginate2 = (num2) => {
    setCurrent2(num2)
}

let dot2 = []

for(let i = 1; i <= Math.ceil(data.length/totalPage2); i++) {
    dot2.push(i)
}

return (
<div className='main'>
    <div className="container1">
        <div className="header">
            <h1 className='title'>Overview</h1>

            <div className="form">
                <input className='input' value={name} onChange={(e)=>setName(e.target.value)} type="text"
                placeholder='your name' />
                <button onClick={()=>addElement()}>add</button>
            </div>

        </div>


        <ul className="list">

            <li className='list-head'>
                <p className="number-h">number</p>
                <p className='name-h'>name</p>

                <p className='check-box-h'>check</p>
                <p className='del'>delete</p>
            </li>

            {
            lastData2.map((item , idx) =>{
            return <li className='list-item'>
                <p className="number">{idx+1}</p>
                <p className='name'>{item.name}</p>
                <article className='checkbox'>
                    <input type="checkbox" name="" id="" />
                    <p className='check-box'>false</p>
                </article>
                <button className='delete' onClick={()=> deleteItem(item.id)} >delete</button>
            </li>
            })
            }


        </ul>

        <ul className="pagination">
            {
                dot2.map(dot =>{
                   return <li className="waves-effect" onClick={()=> paginate2(dot)}><a href="#!">{dot}</a></li>
                })
            }
        </ul>

    </div>
</div>
)
}

export default Main