import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import { IRootState } from "../store/reducers";
import { ScoreActions } from "../store/actions";

import ScoreList from "../components/ScoreList";

type ScoreProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & { hide?: boolean };

function Score(props: ScoreProps) {
  const { isFetching } = props;

  React.useEffect(() => {
    props.getScore();
  }, []);

  return (
    <Container style={{ display: props.hide ? "none" : "flex" }}>
      <Grid container direction="column" alignItems="center">
        <Typography color="textPrimary" variant="h3" style={{ margin: "20px" }}>
          Счет
        </Typography>

        <Grid container justify="space-around">
          <Grid container style={{ width: "45%" }} justify="space-between">
            <Typography color="textPrimary">Побед Игрока</Typography>
            <Typography color="textPrimary">{props.player}</Typography>
          </Grid>
          <Grid container style={{ width: "45%" }} justify="space-between">
            <Typography color="textPrimary">Побед ИИ</Typography>
            <Typography color="textPrimary">{props.ai}</Typography>
          </Grid>
          <Grid container style={{ width: "45%" }} justify="space-between">
            <Typography color="textPrimary">Побед Крестиков</Typography>
            <Typography color="textPrimary">{props.X}</Typography>
          </Grid>
          <Grid container style={{ width: "45%" }} justify="space-between">
            <Typography color="textPrimary">Побед Ноликов</Typography>
            <Typography color="textPrimary">{props.O}</Typography>
          </Grid>
        </Grid>

        <Typography color="textPrimary" variant="h4" style={{ margin: "20px" }}>
          Партии
        </Typography>

        <ScoreList list={props.list} />

        <Button
          variant="contained"
          color="primary"
          onClick={props.reset}
          disabled={isFetching}
          style={{ marginTop: "20px" }}
        >
          Обнулить счет
        </Button>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state: IRootState) => ({ ...state.score });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getScore: () => dispatch(ScoreActions.getScore.request()),
  reset: () => dispatch(ScoreActions.resetScore.request()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);
