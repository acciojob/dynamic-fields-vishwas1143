import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState([
    {
      name: "",
      age: "",
    },
  ]);

  const handleOnChange = (index, event) => {
    const list = [...input];
    list[index][event.target.name] = event.target.value;
    setInput(list);
  };

  const handleSubmit = () => {
    console.log("data", input);
  };

  const handleAdd = () => {
    setInput([...input, { name: "", age: "" }]);
  };

  const handleRemove = (index) => {
    const list = [...input];
    list.splice(index, 1);
    setInput(list);
  };

  return (
    <div>
      {input.map((item, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            value={item.name}
            placeholder="Name"
            onChange={(e) => handleOnChange(index, e)}
          />
          <input
            type="number"
            name="age"
            value={item.age}
            placeholder="Age"
            onChange={(e) => handleOnChange(index, e)}
          />
          {input.length > 1 && (
            <button onClick={() => handleRemove(index)}>Remove</button>
          )}
        </div>
      ))}
      <button onClick={handleAdd}>Add More..</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
