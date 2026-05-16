import { initializeTimes, updateTimes } from "../reducer";

test("initializeTimes returns the correct initial times", () => {
const result = initializeTimes();
expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns the same state provided", () => {
const state = ["17:00", "18:00"];
const action = { type: "update_times", date: "2023-01-01" };
const result = updateTimes(state, action);
expect(result).toEqual(state);
});
