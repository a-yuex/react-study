import { useState } from "react";
import Add from "./pages/add/Add";
import ShowList from "./pages/list/ShowList";
import Todo from "./pages/todo";

function App() {
  const [finishState, setFinishState] = useState<boolean | null>(null);
  const [valueList, setValueList] = useState<Todo[]>([
    {
      value: "test",
      isDone: false,
    },
  ]);

  function add(value: Todo) {
    const newValueList = [...valueList, value];
    setValueList(newValueList);
  }

  function deleteItem(index: number) {
    const newValueList = [
      ...[...valueList].slice(0, index),
      ...[...valueList].slice(index + 1),
    ];
    setValueList(newValueList);
  }

  function finishItem(index: number) {
    const newValueList = [...valueList];
    newValueList[index].isDone = true;
    setValueList(newValueList);
  }

  return (
    <>
      <div>
        <Add add={add} />
      </div>
      <div>
        <ShowList
          showList={valueList}
          deleteItem={deleteItem}
          finishItem={finishItem}
          isFinished={finishState}
        />
      </div>
      <div>
        <button onClick={() => setFinishState(null)}>all</button>
        <button onClick={() => setFinishState(true)}>finished</button>
        <button onClick={() => setFinishState(false)}>unfinished</button>
      </div>
    </>
  );
}

export default App;
