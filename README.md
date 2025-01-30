# JavaScript Bug: Unexpected Null and Undefined Handling

This repository demonstrates a common yet subtle JavaScript bug related to handling null and undefined values. The provided code intends to check for null values, but its behavior with undefined values may lead to unexpected results.

## Bug Description

The `foo` function aims to return 0 if the input `x` is null and the length of `x` otherwise. However, it uses loose equality (`==`) for null checking, which leads to unexpected output when the input is `undefined`.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` using a JavaScript runtime (e.g., Node.js).
3. Observe the unexpected output for the `undefined` input.

## Solution

The `bugSolution.js` file provides a corrected version using strict equality (`===`) which correctly differentiates between null and undefined, fixing the unintended behavior.

## Lessons Learned

- Always use strict equality (`===`) when comparing values, particularly when handling null and undefined, unless you have a specific reason to use loose equality.
- Be mindful of the subtle differences between loose and strict equality in JavaScript. 