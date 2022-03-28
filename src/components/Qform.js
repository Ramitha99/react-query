import { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

const Qform = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const data = [
    { item: "answer1", id: 1 },
    { item: "answer2", id: 2 },
    { item: "answer3", id: 3 },
    { item: "answer4", id: 4 },
    { item: "answer5", id: 5 },
  ];
  const [options] = useState(data);
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Question 1</label>
        <input
          type="text"
          placeholder="Enter the answer"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Question 2</label>
        <input
          type="text"
          placeholder="Enter the answer"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
      </div>
      <label>Question 3</label>
      <div className="dropdown-control">
        <Multiselect options={options} displayValue="item" />
      </div>

      <input type="submit" value="Submit" className="btn btn-block" />
    </form>
  );
};

export default Qform;
