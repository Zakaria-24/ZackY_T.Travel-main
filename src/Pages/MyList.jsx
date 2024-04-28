import { useEffect, useState } from "react";
import CustomContex from "../Utilis/CustomContex";
import MyListTable from "../Components/MyListTable";

const MyList = () => {
  const { user } = CustomContex() || {};
  // console.log(user?.email);
  const [item, setItem] = useState([]);
  console.log(item);

  useEffect(() => {
    fetch(`https://southeast-asia-server.vercel.app/spots/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);
  return (
    <div>
      {/* head */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Country Name</th>
              <th>Spot Name</th>
              <th>Photo</th>
              <th>Edit</th>
              <th>Update</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className=" container mx-auto my-10">
        {/* <MyListTable></MyListTable> */}
        <>
          {item.map((table) => (
            <MyListTable key={table._id} table={table}></MyListTable>
          ))}
        </>
      </div>
    </div>
  );
};

export default MyList;
