import AddNewTaskModel from "./new-task";
import Column from "./column";

export default function Columns() {
  return (
    <section >
      <AddNewTaskModel />
      <div className="mt-10 flex gap-6 lg:gap-12" >
        <Column title="Todo" status="TODO" />
        <Column title="In Progress" status="IN_PROGRESS" />
        <Column title="Done" status="DONE" />
      </div>
    </section>
  );
}
