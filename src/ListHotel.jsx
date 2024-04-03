import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFood } from "./reducers/foodList-reducer";

function ListHotel() {
  // const { userName, setUserName } = useContext(UserContext); //commented to do redux

  //State to maintain textbox value
  // const [newUser, setNewUser] = useState("");   //commented to do redux

  const dispatch = useDispatch();

  const data = useSelector((state) => state.app);
  let getData = async () => {
    try {
      const foodList = await axios.get(
        "https://65fba50a14650eb2100a446c.mockapi.io/food"
      );
      dispatch(setFood(foodList.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data.food.length == 0) {
      getData();
    }
  }, []);

  return (
    <div className="container">
      {/* <input
        type="text"
        onChange={(e) => {
          setNewUser(e.target.value);       //commented to do redux
        }}
      />
      <button
        onClick={() => {
          setUserName(newUser);
        }}
      >
        Change
      </button> */}
      <div className="row">
        <div className="d-flex justify-content-between">
          <h1>Hotel List</h1>
          <Link to={"/portal/create-hotel"} className="btn btn-primary ">
            Create Hotel
          </Link>
        </div>
      </div>
      <div className="row">
        {/* {userName} */} {/* commented to do redux*/}
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
            {data.food.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <th scope="row">1</th>
                    <td>{item.name}</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </>
              );
            })}
            {/* <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>                        commented for practicing redux
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
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListHotel;
