import React from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";

interface ScoreListProps {
  list: Array<{ ts: number; winner?: string; team?: string }>;
}

export default function ScoreList(props: ScoreListProps) {
  function getStatus(winner: string) {
    switch (winner) {
      case "ai":
        return "Победил ИИ";
      case "player":
        return "Победил игрок";
      default:
        return "Ничья";
    }
  }

  function prettifyDate(ts: number) {
    return new Date(ts).toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid container justify="space-around">
          <Typography color="textPrimary" variant="h6" style={{ width: "33%" }}>
            Дата партии
          </Typography>
          <Typography color="textPrimary" variant="h6" style={{ width: "33%" }}>
            Победитель
          </Typography>
          <Typography color="textPrimary" variant="h6" style={{ width: "33%" }}>
            Команда победителя
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        wrap="nowrap"
        style={{ maxHeight: "500px", overflowY: "auto" }}
      >
        {props.list &&
          props.list.map((row, index) => (
            <Grid
              key={index}
              container
              justify="space-around"
              style={{ margin: "10px 0" }}
            >
              <Typography color="textPrimary" style={{ width: "33%" }}>
                {prettifyDate(row.ts)}
              </Typography>
              <Typography color="textPrimary" style={{ width: "33%" }}>
                {getStatus(row.winner)}
              </Typography>
              <Typography
                color="textPrimary"
                style={{ width: "33%", textAlign: "center" }}
              >
                {row.team}
              </Typography>
            </Grid>
          ))}
      </Grid>
    </>
  );
}
