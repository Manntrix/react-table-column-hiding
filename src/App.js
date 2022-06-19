import "./styles.css";
import Table from "./components/Table";
import { useMemo } from "react";
import data from "./users.json";

export default function App() {
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
    ],
    []
  );
  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}
