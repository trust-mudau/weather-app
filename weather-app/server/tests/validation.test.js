import test from "node:test";
import assert from "node:assert/strict";

import { validateCoordinates } from "../validation.js";

test("accepts numeric coordinates inside valid ranges", () => {
  assert.deepEqual(validateCoordinates("-25.7479", "28.2293"), {
    latitude: -25.7479,
    longitude: 28.2293,
  });
});

test("rejects latitude outside its range", () => {
  assert.match(validateCoordinates("91", "0").error, /lat/);
});

test("rejects longitude outside its range", () => {
  assert.match(validateCoordinates("0", "-181").error, /lon/);
});

test("rejects missing and non-numeric values", () => {
  assert.match(validateCoordinates(undefined, "20").error, /lat/);
  assert.match(validateCoordinates("", "20").error, /lat/);
  assert.match(validateCoordinates("20", "east").error, /lon/);
});
