import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Test() {
  const [response, setResponse] = useState([]);
  const fetchData = async () => {
    await axios.get("http://localhost:3000/test").then((response) => {
      setResponse(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Test">
      {response.map((item) => (
        <div key={item._id}>
          <p>Title: {item.title}</p>
          <p>Description: {item.description}</p>
          <p>Location: {item.locationText}</p>
        </div>
      ))}
      <button onClick={fetchData}>Click me</button>
    </div>
  );
}

export default Test;
