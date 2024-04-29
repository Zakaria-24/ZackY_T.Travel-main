import { useEffect, useState } from "react";
import CustomContex from "../Utilis/CustomContex";
import MyListTable from "../Components/MyListTable";

const MyList = () => {
  const { user } = CustomContex() || {};
  // console.log(user?.email);
  const [item, setItem] = useState([]);
  // console.log(item);

  useEffect(() => {
    fetch(`https://southeast-asia-server.vercel.app/spots/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);
  return (
    <div className=" bg-slate-300">
      {/* head */}
      <div className="container mx-auto overflow-x-auto pt-16">
        <table className="table">
          {/* head */}
          <thead>
            <tr className=" text-xl">
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
      <div className=" container mx-auto py-16">
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
