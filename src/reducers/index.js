import { combineReducers } from "redux";
import {reducers as posts} from "./posts"

export const reducers = combineReducers({ posts })