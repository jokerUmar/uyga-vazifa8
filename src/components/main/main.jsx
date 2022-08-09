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
const [totalPage2, setTotalPage2] = useState(10);

const firstIndex2 = current2 * totalPage2
const lastIndex2 = firstIndex2 - totalPage2

const lastData2 = data.slice(lastIndex2 , firstIndex2)




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
            data.map((item , idx) =>{
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
            <li className="waves-effect"><a href="#!"></a></li>
        </ul>

    </div>
</div>
)
}

export default Main