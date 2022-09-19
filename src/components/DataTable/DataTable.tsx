import React, { useState } from "react";
import styles from "./DataTable.module.css";

enum Sort {
  None,
  AZ,
  ZA,
  Closest,
  Furthest,
}

type DataTableProps = {
  serverDataList: Server[];
  search: string;
};

function DataTable({ serverDataList, search }: DataTableProps) {
  const [sortOption, setSortOption] = useState(Sort.None);

  const sortByName = () => {
    if (sortOption !== Sort.AZ) {
      setSortOption(Sort.AZ);
    } else {
      setSortOption(Sort.ZA);
    }
  };

  const sortByDistance = () => {
    if (sortOption !== Sort.Closest) {
      setSortOption(Sort.Closest);
    } else {
      setSortOption(Sort.Furthest);
    }
  };

  const filteredServerDataList = serverDataList.filter(
    (server) =>
      server.name.toLowerCase().includes(search?.toLowerCase() || "") ||
      server.distance.toString().includes(search || ""),
  );

  const sortedServerDataList = (sortedList: Server[]): Server[] => {
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
    return dataList.map((server) => (
      <tr key={server.distance}>
        <td className={styles.datatableRow}>{server.name}</td>
        <td className={styles.datatableRow}>{server.distance}</td>
      </tr>
    ));
  };

  return (
    <div className={styles.datatableContainer}>
      {filteredServerDataList.length ? (
        <table cellSpacing="0">
          <thead>
            <tr>
              <th>
                NAME:{" "}
                <button
                  type="button"
                  className={styles.sortButton}
                  onClick={sortByName}
                >
                  Sort By Name ↑↓
                </button>
              </th>
              <th>
                DISTANCE:{" "}
                <button
                  type="button"
                  className={styles.sortButton}
                  onClick={sortByDistance}
                >
                  Sort By Distance ↑↓
                </button>
              </th>
            </tr>
          </thead>
          <tbody>{table(sortedServerDataList(filteredServerDataList))}</tbody>
        </table>
      ) : (
        <p>Servers not found.</p>
      )}
    </div>
  );
}

export default DataTable;
