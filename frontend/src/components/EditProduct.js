// import module with object literal {}
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom"; // useNavigate(react-router-dom v6) = useHistory

const EditProduct = () => {
  // destructuring array | initial value = empty string
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // use effect componentDidMount | initial value = empty array
  const updateProduct = async (event) => {
    event.preventDefault(); // avoid page reload
    // store-data
    await axios.patch(`http://localhost:5000/products/${id}/update`, {
      title: title,
      price: price,
    });
    // to use navigate -> navigate(path);
    navigate("/");
  };

  // use effect componentDidMount | initial value = empty array
  useEffect(() => {
    getProductById();
  }, []);

  // asynchronous arrow function expression
  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    console.log(response.data);
    setTitle(response.data.title);
    setPrice(response.data.price);
  };

  return (
    <div>
      <Link to="/" className="button is-warning mt-2">
        Back
      </Link>
      <form onSubmit={updateProduct}>
        <div className="field">
          <input type="hidden" value={id} />
        </div>
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
          <button className="button is-primary">Update</button>
        </div>
      </form>
      {/* test inputan */}
      {/* {title} - {price} */}
    </div>
  );
};

export default EditProduct;
