import { Button, FloatingLabel, Modal, TextInput } from "flowbite-react";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editIsModal, editStudent } from "../store/StudentSlice/StudentSlice";

export function ModalPopUp() {
  const dispatch = useDispatch();
  // const [studentModal, setStudentId] = useState(null);
  const students = useSelector((state) => state.student.students);
  const isModal = useSelector((state) => state.student.isModal);
  const studentIdModal = useSelector((state) => state.student.ModalStudentId);
  const [handleInput, setHandleInput] = useState({});

  const studentModal = useMemo(() => {
    const student = students.find((stud) => stud.id === studentIdModal);
    setHandleInput({
      firstName: student?.firstName,
      lastName: student?.lastName,
    });
    return student;
  }, [studentIdModal, isModal]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(handleInput);
    dispatch(editIsModal());
    // dispatch(editStudent({ id: studentModal?.id, data: handleInput }));
  };

  return (
    <>
      <Modal show={isModal} onClose={() => dispatch(editIsModal())}>
        <Modal.Header>{`${studentModal?.firstName}${" "}${
          studentModal?.lastName
        }`}</Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => handleSubmitForm(e)} className="space-y-6">
            <TextInput
              type="text"
              placeholder="firstName"
              name="firstName"
              required
              value={handleInput?.firstName}
              onChange={(e) =>
                setHandleInput({
                  ...handleInput,
                  [e.target.name]: e.target.value,
                })
              }
            />{" "}
            <TextInput
              type="text"
              placeholder="lastName"
              name="lastName"
              required
              value={handleInput?.lastName}
              onChange={(e) =>
                setHandleInput({
                  ...handleInput,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <Button type="submit">Save</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
