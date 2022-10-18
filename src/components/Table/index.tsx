import { Table as TableMantine } from "@mantine/core";
import React, { useEffect, useMemo, useState } from "react";
import { DataProps, TableProps } from "../../@types";
import { IconDiscount } from "@tabler/icons";
import RowsTable from "../RowsTable";

interface LogicProps {
  data: DataProps[];
  setArrayTable: React.Dispatch<React.SetStateAction<DataProps[]>>;
};

const Table = () => {
  return (
    <TableMantine striped highlightOnHover style={{ maxWidth: "320px" }}>
      <thead
        style={{
          background: "#D9D9D9",
          color: "#352F29",
        }}
      >
        <tr>
          <th>Cerveja</th>
          <th>Mls</th>
          <th>Qtd</th>
          <th>R$</th>
          <th>
            <IconDiscount />
          </th>
          <th>R$/L</th>
          <th>{" "}</th>
        </tr>
      </thead>
      <tbody
        style={{
          color: "#352F29",
        }}
      >
      </tbody>
    </TableMantine>
  );
};

export default Table;