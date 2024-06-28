import { Button, Label, TextInput } from "flowbite-react";

export default function AddStudents() {
  return (
    <div className="flex justify-center">
      <form className="flex max-w-md flex-col gap-4 w-full md:w-[500px]">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Student" value="Your name" />
          </div>
          <TextInput id="Student" type="text" placeholder="fullname" required />
        </div>
        <Button className="mt-[10px]" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
