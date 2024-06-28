import React from "react";
import { StudentsTable } from "../components/StudentsTable";
import { ModalPopUp } from "../components/ModalPopUp";
import { Table } from "flowbite-react";
import { useSelector } from "react-redux";

export default function Students() {
  const students = useSelector((state) => state.student.students);
  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Students</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          {students.map((student) => (
            <StudentsTable
              firstName={student.firstName}
              lastName={student.lastName}
              id={student.id}
              key={student.id}
            />
          ))}
        </Table>
      </div>
      <ModalPopUp />
    </>
  );
}
