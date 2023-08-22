import { useState } from "react";

const Todo = () => {
  const [name, setName] = useState('');
  const [namesArr, setNamesArr] = useState([]);

  function getName(e) {
    e.preventDefault();
    if (name.trim()) {
      setNamesArr(prevNames => [...prevNames, { text: name, checked: false }]);
      setName('');
    }
  }

  function toggleChecked(index) {
    console.log('ishlayapti:', index);
    const updatedTodos = namesArr.map((todo, idx) => {
      if (idx === index) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });

    setNamesArr(updatedTodos);
  }


  function removeTodo(index) {
    setNamesArr(prevNames => {
      return prevNames.filter((_, i) => i !== index);
    });
  }

  return (
    <div >
      <div className="todos">
        <h1>Todos</h1>
        {namesArr.map((el, index) => (
          <div className="element" key={index}>
            <div className="input-group">
              <div style={{ display: "flex", alignItems: "center" }}>
                <label className="checkbox-container" checked={el.checked} onChange={() => toggleChecked(index)}>
                  <input type="checkbox"  />
                  <span className="checkmark"></span>
                </label>
                <div style={{ textDecoration: el.checked ? "line-through" : "none" }}>{el.text}</div>
              </div>
              <div>
                <i className='bx bx-x'
                   onClick={() => removeTodo(index)}
                   style={{ cursor: "pointer", background: "red", width: "30px",
                     height: "30px", display: "flex", alignItems: "center", justifyContent:
                       "center", color: "white", borderRadius: "100px" }}>
                </i>
              </div>
            </div>
          </div>
        ))}
        <form onSubmit={getName}>
          <input type="text" placeholder="enter value" value={name} onChange={e => setName(e.target.value)} />
        </form>
      </div>
    </div>
  )
}

export default Todo;
