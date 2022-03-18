// import module with object literal {}
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom"; // useNavigate(react-router-dom v6) = useHistory

const ShowProduct = () => {
  // destructuring array | initial value = empty array
  const [products, setProduct] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();

  // use effect componentDidMount | initial value = empty array
  useEffect(() => {
    getProductById();
  }, []);

  // asynchronous arrow function expression
  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    console.log(response.data);
    setProduct(response.data.id);
    setTitle(response.data.title);
    setPrice(response.data.price);
  };

  return (
    <div>
      <Link to="/" className="button is-warning mt-2">
        Back
      </Link>
      <table className="table is-stripped is-fullwidth">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr key={products}>
            <td>{title}</td>
            <td>{price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShowProduct;
