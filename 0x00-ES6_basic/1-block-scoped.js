#!/usr/bin/node
/**
 * If trueOrFalse is true, then return [true, false], otherwise return [false, true].
 */

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    return [task, task2];
  }

  return [task, task2];
}
