import React from "react";
import { Paper, Button, ButtonGroup, makeStyles } from "@material-ui/core";

interface BoardProps {
  board: Array<Array<string>>;
  move(index: number): void;
}

const useClasses = makeStyles(() => ({
  paper: {
    width: "80%",
    height: "300px",
    margin: "0 auto 15px",
    padding: "0 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gameBtnGroup: { height: "80%", margin: "10% 0", width: "33%" },
  gameBtn: {
    height: "33%",
    width: "100%",
    fontSize: "2.75rem",
  },
}));

export default function GameBoard({
  board,
  move: moveCallback,
  ...props
}: BoardProps) {
  const classes = useClasses();

  function getTeamSign(index: number, board: Array<Array<string>>) {
    if (board === undefined) return;
    const field = getBoardByIndex(index, board);
    if (field === "O" || field === "X") return field;
    return "";
  }

  function getBoardByIndex(index: number, board: Array<Array<string>>) {
    switch (index) {
      case 1:
        return board[0][0];
      case 2:
        return board[0][1];
      case 3:
        return board[0][2];
      case 4:
        return board[1][0];
      case 5:
        return board[1][1];
      case 6:
        return board[1][2];
      case 7:
        return board[2][0];
      case 8:
        return board[2][1];
      case 9:
        return board[2][2];
      default:
        throw Error("index should be in range 1...9");
    }
  }

  function move(index: number) {
    if (getTeamSign(index, board) !== "") return;
    moveCallback(index);
  }

  return (
    <Paper className={classes.paper} elevation={3}>
      {board &&
        board.map((_, column: number) => (
          <ButtonGroup className={classes.gameBtnGroup} orientation="vertical">
            {Array(3)
              .fill(0)
              .map((_, row: number) => (
                <Button
                  className={classes.gameBtn}
                  onClick={() => move(row + 1 + column * 3)}
                >
                  {getTeamSign(row + 1 + column * 3, board)}
                </Button>
              ))}
          </ButtonGroup>
        ))}
    </Paper>
  );
}
