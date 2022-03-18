// import module with object literal {}
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // useNavigate(react-router-dom v6) = useHistory

const AddProduct = () => {
  // destructuring array | initial value = empty string
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

   // asynchronous arrow function expression
  const saveProduct = async(event) => {
    event.preventDefault(); // avoid page reload
    // store-data
    await axios.post("http://localhost:5000/products", {
      title: title,
      price: price
    });
    // to use navigate -> navigate(path);
    navigate("/");
  }; 

  return (
    <div>
      <form onSubmit={ saveProduct }>
        <div className="field">
          <label className="label">Title</label>
          <input
            className="input"
            type="text"
            placeholder="input title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Price</label>
          <input
            className="input"
            type="text"
            placeholder="input price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>

        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
      {/* test inputan */}
      {/* {title} - {price} */}
    </div>
  );
};

export default AddProduct;
