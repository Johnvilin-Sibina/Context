import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "./UserContext";
function ListHotel() {
  const { userName, setUserName } = useContext(UserContext);

  //State to maintain textbox value
  const [newUser, setNewUser] = useState("");

  return (
    <div className="container">
      <input
        type="text"
        onChange={(e) => {
          setNewUser(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setUserName(newUser);
        }}
      >
        Change
      </button>
      <div className="row">
        <div className="d-flex justify-content-between">
          <h1>Hotel List</h1>
          <Link to={"/portal/create-hotel"} className="btn btn-primary ">
            Create Hotel
          </Link>
        </div>
      </div>
      <div className="row">
        {userName}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListHotel;
