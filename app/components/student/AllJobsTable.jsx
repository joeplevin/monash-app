"use client";
import {
  Table,
  TableBody,
  TableHeader,
  TableColumn,
  TableRow,
  TableCell,
  Pagination,
  Input,
} from "@nextui-org/react";
import { columns, renderCell } from "@/app/components/student/AllJobsColumns";
import { useCallback, useMemo } from "react";
import { useState } from "react";
import { SearchIcon } from "@/app/components/icons";

export default function StudentJobsTable({ jobs }) {
  // Filter
  const [filter, setFilter] = useState("");
  const hasSearchFilter = Boolean(filter);
  const filteredItems = useMemo(() => {
    let filteredJobs = [...jobs];

    if (hasSearchFilter) {
      filteredJobs = filteredJobs.filter((job) =>
        job.title.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return filteredJobs;
  }, [jobs, filter, hasSearchFilter]);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilter(value);
      setPage(1);
    } else {
      setFilter("");
    }
  }, []);

  const onClearSearch = useCallback(() => {
    setFilter("");
    setPage(1);
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-end just gap-3">
          <Input
            isClearable
            placeholder="Search Your Jobs"
            value={filter}
            className="w-full sm:max-w-[44%]"
            startContent={<SearchIcon />}
            onValueChange={onSearchChange}
            onClear={() => onClearSearch()}
          />
        </div>
      </div>
    );
  }, [filter, onSearchChange, onClearSearch]);

  // Pagination
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const pages = Math.ceil(filteredItems.length / rowsPerPage);
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredItems.slice(start, end);
  }, [filteredItems, page]);

  //Sort
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "title",
    direction: "ascending",
  });
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;
      return sortDescriptor.direction === "descending" ? cmp : -cmp;
    });
  }, [sortDescriptor, items]);

  return (
    <Table
      aria-label="Student Jobs Table"
      className="col-span-2"
      topContent={topContent}
      topContentPlacement="outside"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      bottomContentPlacement="outside"
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.key}
            {...(column.key === "title" ? { allowsSorting: true } : {})}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        items={sortedItems}
        emptyContent={"You haven't got any jobs, go get one!"}
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
