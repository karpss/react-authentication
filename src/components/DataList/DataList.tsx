/* eslint-disable */
import React,{useState, useEffect} from 'react';
import {getServerDataList} from "../../api/api";
import {tokenSelect} from "../../redux/authorizationSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/typeManagementHook";
import {setServerDataList, selectServerDataList} from "../../redux/serverDataListSlice";
import DataTable from '../DataTable/DataTable';

function DataList ()  {
const token = useAppSelector(tokenSelect);
const serverDataList = useAppSelector(selectServerDataList);
const dispatch = useAppDispatch();

const [search, setSearch] = useState<string>("");
const [dataListError, setDataListError] = useState<string>("");

useEffect(() => {
  getServerDataList(token)
  .then((res) => {
    if (!res.ok) {
      throw Error(
        "Error! Try again later"
      );
    }
    setDataListError("");
    return res.json();
  })
  .then((data) => dispatch(setServerDataList(data)))
  .catch((error) => setDataListError(error.message));

}, [dispatch, token]);








  return (
    <div>
      <input
          type="text"
          onChange={(event) => setSearch(event?.target.value)}
          placeholder="Search"
        />
        {dataListError ? (
        <p>{dataListError}</p>
      ) : (
        <DataTable serverDataList={serverDataList} search={search} />
      )}



    </div>
  )
}

export default DataList;