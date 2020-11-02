import axios from "axios";
import { API_BASE } from "../config";

export const getGame = () => axios.get(API_BASE + "/game");

export const move = (index: number) =>
  axios.post(API_BASE + "/game/move", { index });

export const resetGame = () => axios.post(API_BASE + "/game/reset");

export const nextGame = () => axios.get(API_BASE + "/game/next");
