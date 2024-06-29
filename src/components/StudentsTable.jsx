import { Table } from "flowbite-react";
import { useDispatch } from "react-redux";
import {
  addModalStudentId,
  editIsModal,
} from "../store/StudentSlice/StudentSlice";

export function StudentsTable({ firstName, lastName, id }) {
  const dispatch = useDispatch();
  return (
    <Table.Body>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {`${firstName} ${" "} ${lastName}`}
        </Table.Cell>

        <Table.Cell>
          <div className="flex gap-[10px]">
            <button
              onClick={() => {
                dispatch(addModalStudentId(id));
                dispatch(editIsModal());
              }}
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Edit
            </button>
            <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              Delete
            </button>
          </div>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
}
