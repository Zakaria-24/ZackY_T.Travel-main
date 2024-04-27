import { useEffect, useState } from "react";
import CustomContex from "../Utilis/CustomContex";
import MyListTable from "../Components/MyListTable";

const MyList = () => {
  const { user } = CustomContex() || {};
  const [item, setItem] = useState([]);
  console.log(item);

  useEffect(() => {
    fetch(`https://southeast-asia-server.vercel.app/spot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);
  return (
    <div>
      <h1>My List:{item.length}</h1>
      <div className=" container mx-auto my-10">
        <MyListTable></MyListTable>
        {/* <>
        {item.map((table) => (
          <MyListTable key={table._id} table={table}></MyListTable>
        ))}
      </> */}
      </div>
    </div>
  );
};

export default MyList;
