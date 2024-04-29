/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListTable = ({ table, item, setItem }) => {
  const { _id, country, spotName, photoUrl } = table;

  const handleDeleteMyList = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://southeast-asia-server.vercel.app/spot/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = item.filter((ml) => ml._id !== _id);
              setItem(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr>
              <th>*</th>
              <td>{country}</td>
              <td>{spotName}</td>
              <td>
                <img
                  className=" rounded-full w-10 h-10"
                  src={photoUrl}
                  alt="photo"
                />
              </td>
              <td>
                {" "}
                <Link
                  className="btn  bg-slate-500 font-serif"
                  to={`/update/${_id}`}
                >
                  Update
                </Link>
              </td>
              <td>
                {" "}
                <button
                  className=" btn bg-slate-500"
                  onClick={() => handleDeleteMyList(_id)}
                >
                  X
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListTable;
