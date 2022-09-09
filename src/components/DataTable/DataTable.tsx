/* eslint-disable */
import React, {useState} from 'react';

enum Sort {
    None,
    AZ,
    ZA,
    Closest,
    Furthest,
  }

  type DataTableProps = {
    serverDataList: Server[];
    search?: string;
  };


function DataTable({serverDataList, search}:DataTableProps) {
    const [sortOption, setSortOption] = useState(Sort.None)


    const sortByName = () => {
        if (sortOption !== Sort.AZ) {
            setSortOption(Sort.AZ);
          } else {
            setSortOption(Sort.ZA);
          }
    }

    const sortByDistance = () => {
        if (sortOption !== Sort.Closest) {
            setSortOption(Sort.Closest);
          } else {
            setSortOption(Sort.Furthest);
          }
    }

    const filteredServerDataList = serverDataList.filter(
        (server) =>
          server.name.toLowerCase().includes(search?.toLowerCase() || "") ||
          server.distance.toString().includes(search || "")
      );

      const sortedServerDataList = (
        sortedList: Server[],
        sortOption: Sort = Sort.None
      ): Server[] => {
        switch (sortOption) {
          case Sort.None:
            return sortedList;
          case Sort.AZ:
            return sortedList.sort((a, b) => a.name.localeCompare(b.name));
          case Sort.ZA:
            return sortedList.sort((a, b) => b.name.localeCompare(a.name));
          case Sort.Closest:
            return sortedList.sort((a, b) => a.distance - b.distance);
          case Sort.Furthest:
            return sortedList.sort((a, b) => b.distance - a.distance);
          default:
            return sortedList;
        }
      };

      const table = (dataList: Server[]) => {
        return dataList.map((server, index) => (
          <tr
            key={index}
          >
            <td>{server.name}</td>
            <td>{server.distance}</td>
          </tr>
        ));
      };


  return (
    <div>
        {filteredServerDataList.length ? (
        <table cellSpacing="0">
          <thead>
            <tr>
              <th>
                NAME:{" "}
                <button
                  className="server-table-sort"
                  onClick={sortByName}
                  
                >
                  Sort By Name
                  </button>
              </th>
              <th>
                DISTANCE:{" "}
                <button
                  className="server-table-sort"
                  onClick={sortByDistance}
                >
                  Sort By Distance
                  </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {table(sortedServerDataList(filteredServerDataList, sortOption))}
          </tbody>
        </table>
      ) : (
        <p className="server-table-no-data">
          Servers not found.
        </p>
      )}





    </div>
  )
}

export default DataTable