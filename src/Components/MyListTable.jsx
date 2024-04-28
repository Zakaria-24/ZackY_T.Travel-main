/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MyListTable = ({ table }) => {
  const { country, spotName, photoUrl } = table;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
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
                <Link to="/update">Update</Link>
              </td>
              <td>
                {" "}
                <Link to="/delete">X</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListTable;
