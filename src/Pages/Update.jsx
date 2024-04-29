import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  const {
    cost,
    country,
    description,
    location,
    photoUrl,
    seasonality,
    spotName,
    time,
    visit,
    _id,
  } = loadedUser;

  const handleUpdateMyList = (e) => {
    e.preventDefault();

    const form = e.target;

    const cost = form.cost.value;
    const country = form.country.value;
    const description = form.description.value;
    const location = form.location.value;
    const photoUrl = form.photoUrl.value;
    const seasonality = form.seasonality.value;
    const spotName = form.spotName.value;
    const time = form.time.value;
    const visit = form.visit.value;

    const updatedMyList = {
      cost,
      country,
      description,
      location,
      photoUrl,
      seasonality,
      spotName,
      time,
      visit,
    };
    console.log(updatedMyList);
    // send data to server
    fetch(`https://southeast-asia-server.vercel.app/spot/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMyList),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Tousist Spot Update successfully");
        }
      });
  };

  return (
    <div className=" p-24">
      <h2 className="text-3xl font-extrabold">Update Tourist Spot</h2>
      <form onSubmit={handleUpdateMyList}>
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
                defaultValue={spotName}
                placeholder="Tourist_Spot_Name"
                className="input input-bordered w-full"
              />
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
                defaultValue={country}
                placeholder="Country_Name"
                className="input input-bordered w-full"
              />
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
                defaultValue={description}
                placeholder="Short_Description"
                className="input input-bordered w-full"
              />
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
                defaultValue={location}
                placeholder="location..."
                className="input input-bordered w-full"
              />
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
                defaultValue={cost}
                placeholder="Average_Cost"
                className="input input-bordered w-full"
              />
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
                defaultValue={seasonality}
                placeholder="Seasonality"
              />
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
                defaultValue={time}
                placeholder="Travel_Time"
                className="input input-bordered w-full"
              />
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
                defaultValue={visit}
                placeholder="Total_Visit_Per_Year"
                className="input input-bordered w-full"
              />
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
                defaultValue={photoUrl}
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update" className="btn btn-block" />
      </form>
    </div>
  );
};

export default Update;
