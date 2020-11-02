import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import GameBoard from "../components/GameBoard";
import { IRootState } from "../store/reducers";
import { GameActions } from "../store/actions";

type GameProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & { hide?: boolean };

function Game(props: GameProps): React.ReactElement {
  const { isFetching } = props;

  React.useEffect(() => {
    if (props.board === null) props.getGame();
  }, []);

  function getStatus() {
    if (props.end === null || props.end === false) return "Ход игрока";
    switch (props.winner) {
      case "ai":
        return "Победил ИИ";
      case "player":
        return "Победил игрок";
      default:
        return "Ничья";
    }
  }

  function move(index: number) {
    if (props.end) return;
    props.move(index);
  }
  console.log(props);

  return (
    <Container style={{ display: props.hide ? "none" : "flex" }}>
      <Grid container direction="column" alignItems="center">
        <Typography color="textPrimary" variant="h3" style={{ margin: "20px" }}>
          {(props.board !== null && getStatus()) || "Загрузка"}
        </Typography>

        <GameBoard board={props?.board} move={move} />

        <Button
          variant="contained"
          color="primary"
          onClick={
            props.end === true ? () => props.next() : () => props.reset()
          }
          disabled={isFetching}
        >
          Начать заново
        </Button>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state: IRootState) => ({ ...state.game });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getGame: () => dispatch(GameActions.getGame.request()),
  move: (index: number) => dispatch(GameActions.move.request(index)),
  reset: () => dispatch(GameActions.resetGame.request()),
  next: () => dispatch(GameActions.nextGame.request()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
