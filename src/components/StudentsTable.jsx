import { Table } from "flowbite-react";
import { useDispatch } from "react-redux";
import {
  addModalStudentId,
  editIsModal,
} from "../store/StudentSlice/StudentSlice";

export function StudentsTable({ student }) {
  const dispatch = useDispatch();
  return (
    <Table.Body>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {"Ketmoboy Teshaboyev"}
        </Table.Cell>

        <Table.Cell>
          <div className="flex gap-[10px]">
            <button
              onClick={() => {
                dispatch(editIsModal());
                dispatch(addModalStudentId(student.id));
              }}
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Edit
            </button>
            <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              Delite
            </button>
          </div>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
}
