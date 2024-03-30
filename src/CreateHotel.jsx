import { useFormik } from "formik";
import {useContext} from "react";
import UserContext from "./UserContext";

function CreateHotel() {

  const {userName, setUserName} = useContext(UserContext)

  const formik = useFormik({
    initialValues: {
      hotelName: "",
      location: "",
      imageUrl: "",
      description: "",
    },
    validate: (values) => {
      let error = {};
      if (values.hotelName == "") {
        error.hotelName = "Please enter hotel name";
      } else if (values.hotelName.length <= 5) {
        error.hotelName = "Hotel name should be more than 5 letters";
      }

      if (values.location == "") {
        error.hotelocationlName = "Please enter hotel name";
      } else if (values.location.length < 3) {
        error.location = "Location should be more than 3 letters";
      }

      return error;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
   
    <div className="container">
      <div className="row">
        <h1>Create Hotel</h1>
        {userName}
        <div className="col-lg-12">
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              placeholder="Hotel Name"
              name="hotelName"
              value={formik.values.hotelName}
              onChange={formik.handleChange}
              className="form-control mt-2"
              style={{
                color:
                  formik.getFieldMeta("hotelName").error &&
                  formik.getFieldMeta("hotelName").touched &&
                  "red",
                //another way of ternary operator - to check only if condition and no else condition
              }}
            />
            {/* <span style={{color:"red"}}>{formik.errors.hotelName}</span> */}
            {formik.getFieldMeta("hotelName").error &&
              formik.getFieldMeta("hotelName").touched && (
                <span style={{ color: "red" }}>
                  {formik.getFieldMeta("hotelName").error}
                </span>
              )}
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={formik.values.location}
              onChange={formik.handleChange}
              className="form-control mt-2"
            />
            {formik.getFieldMeta("location").error &&
              formik.getFieldMeta("location").touched && (
                <span style={{ color: "red" }}>
                  {formik.getFieldMeta("location").error}
                </span>
              )}
            <input
              type="text"
              placeholder="Image"
              name="imageUrl"
              value={formik.values.imageUrl}
              onChange={formik.handleChange}
              className="form-control mt-2"
            />
            <textarea
              placeholder="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              name="description"
              id=""
              cols="30"
              className="form-control mt-2"
              rows="2"
            ></textarea>
            <h3>Menu</h3>
            <h6>Food 1</h6>
            <input
              type="text"
              placeholder="Food Name"
              className="form-control mt-2"
            />
            <input
              type="text"
              placeholder="Price"
              className="form-control mt-2"
            />
            <input
              type="text"
              placeholder="Image"
              className="form-control mt-2"
            />
            <textarea
              placeholder="Description"
              name=""
              id=""
              cols="30"
              className="form-control mt-2"
              rows="3"
            ></textarea>
            <h6>Food 2</h6>
            <input
              type="text"
              placeholder="Food Name"
              className="form-control mt-2"
            />
            <input
              type="text"
              placeholder="Price"
              className="form-control mt-2"
            />
            <input
              type="text"
              placeholder="Image"
              className="form-control mt-2"
            />
            <textarea
              placeholder="Description"
              name=""
              id=""
              cols="30"
              className="form-control mt-2"
              rows="3"
            ></textarea>
            <h6>Food 3</h6>
            <input
              type="text"
              placeholder="Food Name"
              className="form-control mt-2"
            />
            <input
              type="text"
              placeholder="Price"
              className="form-control mt-2"
            />
            <input
              type="text"
              placeholder="Image"
              className="form-control mt-2"
            />
            <textarea
              placeholder="Description"
              name=""
              id=""
              cols="30"
              className="form-control mt-2"
              rows="3"
            ></textarea>
            <h6>Food 4</h6>
            <input
              type="text"
              placeholder="Food Name"
              className="form-control mt-2"
            />
            <input
              type="text"
              placeholder="Price"
              className="form-control mt-2"
            />
            <input
              type="text"
              placeholder="Image"
              className="form-control mt-2"
            />
            <textarea
              placeholder="Description"
              name=""
              id=""
              cols="30"
              className="form-control mt-2"
              rows="3"
            ></textarea>
            <input type="submit" className="btn btn-primary mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateHotel;