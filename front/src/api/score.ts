import axios from "axios";
import { API_BASE } from "../config";

export const getScore = () => axios.get(API_BASE + "/score");

export const resetScore = () => axios.post(API_BASE + "/score/reset");
