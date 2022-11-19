import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Createtask = () => {
    const [data, setdata] = useState([])
    const [item, setitem] = useState("")
    const [status, setstatus] = useState(false)
    const [refresh, setrefresh] = useState(false)
    
    const ref = useRef(null);
    
    useEffect(() => {
      
    axios({
      method: "get",
      url: "http://localhost:4000/task",
    }).then((res) => {
        console.log(res.data)
        setdata(res.data)
    });
    }, [refresh])
    
    const additem = () => {
         if (!ref.current.checked) {
           setstatus(true)
         } else {
           setstatus(false)
         }
        const itemdata = { "title": item,"status":status}
      axios({
        method: "post",
        url: "http://localhost:4000/task",
        data: itemdata,
      }).then((res) => {
          console.log(res, 1);
          setrefresh(true)
      });
    }
    const deleteitem = () => {
        
    }

  return (
    <div>
      <div className="createdata">
        <div className="input">
          <input
            type="text"
            id="input1"
            onInput={(e) => setitem(e.target.value)}
          />
          <input type="checkbox" id="checkbox" ref={ref} />
        </div>
        <div className="submit" onClick={() => additem()}>
          Add
        </div>
      </div>
      <div className="data">
        {data.map((item) => (
          <div className="task" key={item.id}>
                <div className="title"> Title :- {item.title}</div>
                
                <div className="status"> status :- {item.status ? "true" : "false"}</div>
                <button >delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Createtask