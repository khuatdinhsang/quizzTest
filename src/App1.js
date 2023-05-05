import './App.css';
import data from "./data.json"
import { useState, } from 'react'
import { useRef } from 'react';

import { Button, ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
function App1({ detailElement }) {
  const [listData, setListData] = useState(data);
  const nameRef = useRef();
  const genderRef = useRef();
  const classRef = useRef();
  const searchRef = useRef();
  const ageRef = useRef();
  const [listReplacer, setListReplacer] = useState(data)
  const [active, setActive] = useState(false);
  const [filterGender, setFilterGender] = useState("");
  const [filterAge, setFilterAge] = useState("");
  const [checked, setChecked] = useState([]);
  // tim id max de add
  let idMax = 0;
  for (let i = 0; i < listData.length; i++) {
    if (listData[i].id > idMax) {
      idMax = listData[i].id;
    }
  }

  // add
  const submit = () => {
    const listColor = checked.toString()
    const newStudent = {
      id: idMax + 1,
      name: nameRef.current.value,
      gender: genderRef.current.value,
      age: ageRef.current.value,
      color: listColor,
      class: classRef.current.value,
    }
    console.log(newStudent.color);
    setListData((listData) => [...listData, newStudent])
    setListReplacer((listReplacer) => [...listReplacer, newStudent])
    clearForm();
  }
  // reset Form
  const clearForm = () => {
    nameRef.current.value = ''
    genderRef.current.value = ''
    classRef.current.value = ''
  }

  // delete
  const deleteStudent = (id) => {
    const newListdata = listData.filter(s => s.id !== id);
    setListData(newListdata);
    setListReplacer(newListdata)
  }
  //search
  const searchStudent = () => {
    const newListDataSearch = listData.filter(s => {
      return s.name.toString().toLowerCase().includes(searchRef.current.value.toLowerCase())
    })
    if (searchRef.current.value) {
      setListData(newListDataSearch);
    } else {
      setListData(listReplacer)
    }
    newListDataSearch.length === 0 ? setActive(true) : setActive(false)
  }
  // filter gender
  const filterGenderFunction = (e) => {
    setFilterGender(e.target.value)
    const newListDataFilter = listData.filter(s => {
      return s.gender.toString().toLowerCase() === e.target.value.toLowerCase()
    })
    console.log(e.target.value)
    console.log(newListDataFilter)
    setListData(newListDataFilter)
  }

  // filter age if same age sort a->z age
  const filterAgeFunction = (e) => {
    setFilterAge(e.target.value);
    console.log(e.target.value);
    let newAgeFilter = []
    if (e.target.value === "1") {
      console.log("a")
      newAgeFilter = listData.sort((a, b) => {
        if (a.age === b.age) {
          return a.name.localeCompare(b.name)
        } else {
          return a.age - b.age
        }

      })
    } else {
      console.log("b")
      newAgeFilter = listData.sort((a, b) => b.age - a.age)
    }
    setListData(newAgeFilter)
  }

  //add color
  const handleChecked = (data) => {
    setChecked(checked => {
      const isChecked = checked.includes(data);
      if (isChecked) {
        return checked.filter((item) => {
          return item !== data;
        })
      } else {
        return [...checked, data];
      }
    })
  }
  const detailStudent = (id) => {
    const studentEdit = listData.find(s => s.id === id);
    detailElement(studentEdit)
  }
  return (

    <div className="App" >
      <p style={{ color: 'red' }}>Add a new student</p>
      Name: <input ref={nameRef} type="text" name="name" placeholder="enter name" /> <br />
      Gender : <input type="radio" ref={genderRef} name="gender" value="male" /> Male
      <input type="radio" name="gender" ref={genderRef} value="female" /> Female
      <br />
      Age:  <input type="number" ref={ageRef} />
      <br />
      Color:
      <input type="checkbox" name="color" checked={checked.includes("red")} onChange={() => handleChecked("red")} value="red" /> Red
      <input type="checkbox" name="color" checked={checked.includes("white")} onChange={() => handleChecked("white")} value="white" /> White
      <input type="checkbox" name="color" checked={checked.includes("blue")} onChange={() => handleChecked("blue")} value="blue" /> Blue
      <input type="checkbox" name="color" checked={checked.includes("yellow")} onChange={() => handleChecked("yellow")} value="yellow" /> Yellow
      <input type="checkbox" name="color" checked={checked.includes("brown")} onChange={() => handleChecked("brown")} value="Brown" /> Brown
      <br />
      Class: <select ref={classRef}>
        <option value="SE001">SE001</option>
        <option value="SE002">SE002</option>
        <option value="SE003">SE003</option>
      </select>
      < br />
      <button onClick={submit}>Submit</button>
      <br />
      <input ref={searchRef} name="search" placeholder='enter search' />
      <button onClick={searchStudent}>Search</button>
      <br />
      <select onChange={filterGenderFunction} value={filterGender} >
        <option value="">Filter Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <select value={filterAge} onChange={filterAgeFunction} >
        <option value="0">Filter Age</option>
        <option value="1">Low to High</option>
        <option value="-1">High to Low</option>
      </select>
      <table >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Color</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            listData.map((s, index) => {
              return (
                <tr key={s.id}>
                  <td>{index + 1}</td>
                  <td>{s.name}</td>
                  <td>{s.gender}</td>
                  <td>{s.age}</td>
                  <td>{s.color}</td>
                  <td>{s.class}</td>
                  <td><button onClick={() => deleteStudent(s.id)}>Delete</button>
                  </td>
                  <td onClick={() => detailStudent(s.id)}><Link to={`./detail/${s.id}`}>Detail</Link></td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
      {active && <p>Khong co san pham nao</p>}

    </div >
  );
}

export default App1;
