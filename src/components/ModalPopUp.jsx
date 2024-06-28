"use client";

import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editIsModal } from "../store/StudentSlice/StudentSlice";

export function ModalPopUp() {
  const [studentModal, setStudentId] = useState(null);
  const students = useSelector((state) => state.student.students);
  const isModal = useSelector((state) => state.student.isModal);
  const studentIdModal = useSelector((state) => state.student.ModalStudentId);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const student = students.find((stud) => stud.id === studentIdModal);
    setStudentId(student);
  }, [isModal]);

  return (
    <>
      <Modal show={isModal} onClose={() => dispatch(editIsModal())}>
        <Modal.Header>{studentModal?.firstName}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => dispatch(editIsModal())}>I accept</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
