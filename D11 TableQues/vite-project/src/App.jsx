import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([{
    id: 1,
    name: "kartik",
    lastName: "mahurkar"
  }, {
    id: 1,
    name: "kartik",
    lastName: "mahurkar"
  }]);


  const handleAddTop = (value) => {

  }
  const addBottomRow = (value) => {
    // newData came because the when we add the object directly to push method 
    const newData = [
      ...data,
      value
    ];
    setData(newData);
  };
  const removeBottomRow = (value) => {
    const newDatalist = []
    for (let i = 0; i <= data.length; i++) {
      //  console.log("dat",value)
      //  console.log("ivalue",i)
      //  console.log(" i== value", i == value)
      if (!(value == i)) {
        if (!(data[i] == undefined)) {
          newDatalist.push(data[i])
        }
      }
    }
    console.log("newDatalist", newDatalist)
    setData(newDatalist);
  };

  console.log("asdfasf", data)
  return (
    <>
      <button onClick={() => {
        handleAddTop(0)
      }
      }>
        Add top
      </button>
      <table>
        <thead>
          <tr>
            <th>
              Id
            </th>
            <th>
              Name
            </th>
            <th>
              LastName
            </th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => {
            return (<tr key={index}>
              <td>
                {item?.id}
              </td>
              <td>
                {item?.name}
              </td>
              <td>
                {item?.lastName}
              </td>
            </tr>)
          })}
        </tbody>
      </table>
      <br />
      <div>
        <button onClick={() => {
          addBottomRow({
            id: 2,
            name: "mks",
            lastName: "data"
          })
        }}>
          Add bottom row
        </button>
        <button onClick={() => {
          removeBottomRow(data.length - 1);
        }}>
          Remove bottom
        </button>
      </div>
    </>
  )
}

export default App
