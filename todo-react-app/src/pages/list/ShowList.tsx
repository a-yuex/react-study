import Todo from "../todo";

interface ShowListProps {
  showList: Todo[];
  finishItem: (index: number) => void;
  deleteItem: (index: number) => void;
  isFinished: boolean | null;
}

export default function ShowList({
  showList,
  finishItem,
  deleteItem,
  isFinished,
}: ShowListProps) {
  const valueList: Todo[] =
    isFinished !== null
      ? showList.filter((item) => {
          if (item.isDone == isFinished) {
            return item;
          }
        })
      : showList;

  return (
    <>
      {valueList.map((item, index) => {
        return (
          <div key={index}>
            <div
              style={{
                width: "100px",
                display: "inline-block",
                border: "1px solid #a8c7fa",
                textDecoration: item.isDone ? "line-through" : "none",
              }}
            >
              {item.value}
            </div>
            {!item.isDone && (
              <>
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    finishItem(index);
                  }}
                >
                  finish
                </button>
                <button
                  onClick={() => {
                    deleteItem(index);
                  }}
                >
                  delete
                </button>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}
