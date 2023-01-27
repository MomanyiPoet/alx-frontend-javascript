#!/usr/bin/node
/**
 * If trueOrFalse is true, then return [true, false], otherwise return [false, true].
 */

export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
