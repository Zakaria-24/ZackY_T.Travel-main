import { useForm } from "react-hook-form";
import CustomContex from "../Utilis/CustomContex";
import toast from "react-hot-toast";

const AddTouristsSpot = () => {
  const { user } = CustomContex();
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const {
      cost,
      country,
      description,
      email,
      location,
      name,
      photoUrl,
      seasonality,
      spotName,
      time,
      visit,
    } = data;
    const newTouristSpot = {
      cost,
      country,
      description,
      email,
      location,
      name,
      photoUrl,
      seasonality,
      spotName,
      time,
      visit,
    };
    console.log(newTouristSpot);
    // send data to the server
    fetch("https://southeast-asia-server.vercel.app/spot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Added successfully");
        }
      });
  };
  return (
    <div className=" p-24">
      <h2 className="text-3xl font-extrabold">Add Tourist Spot</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Spot_Name</span>
            </label>
            <label className="input-group">
              <input
                name="spotName"
                type="text"
                placeholder="Tourist_Spot_Name"
                className="input input-bordered w-full"
                {...register("spotName", { required: true })}
              />
              {errors.spotName && <span>This field is required</span>}
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="country"
                placeholder="Country_Name"
                className="input input-bordered w-full"
                {...register("country", { required: true })}
              />
              {errors.country && <span>This field is required</span>}
            </label>
          </div>
        </div>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Short_Description"
                className="input input-bordered w-full"
                {...register("description", { required: true })}
              />
              {errors.description && <span>This field is required</span>}
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">location</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="location"
                placeholder="location..."
                className="input input-bordered w-full"
                {...register("location", { required: true })}
              />
              {errors.location && <span>This field is required</span>}
            </label>
          </div>
        </div>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Cost</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="cost"
                placeholder="Average_Cost"
                className="input input-bordered w-full"
                {...register("cost", { required: true })}
              />
              {errors.cost && <span>This field is required</span>}
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Seasonality</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="seasonality"
                placeholder="Seasonality"
                className="input input-bordered w-full"
                {...register("seasonality", { required: true })}
              />
              {errors.seasonality && <span>This field is required</span>}
            </label>
          </div>
        </div>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="time"
                placeholder="Travel_Time"
                className="input input-bordered w-full"
                {...register("time", { required: true })}
              />
              {errors.time && <span>This field is required</span>}
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Visit</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="visit"
                placeholder="Total_Visit_Per_Year"
                className="input input-bordered w-full"
                {...register("visit", { required: true })}
              />
              {errors.visit && <span>This field is required</span>}
            </label>
          </div>
        </div>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User_Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                defaultValue={user.email}
                placeholder="Travel_Time"
                className="input input-bordered w-full"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User_Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={user.displayName}
                placeholder="Total_Visit_Per_Year"
                className="input input-bordered w-full"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                {...register("photoUrl", { required: true })}
              />
              {errors.photoUrl && <span>This field is required</span>}
            </label>
          </div>
        </div>
        <input type="submit" value="Add" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddTouristsSpot;
