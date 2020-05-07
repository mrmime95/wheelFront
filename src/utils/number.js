/**
 * Generates a range of numbers from start to end
 * @param  {number} start The start of the range
 * @param  {number} end The end of the range
 */
export function range(start, end) {
  if (start > end) throw new Error('The begining is higher then the end!')

  if (start === end) return [start]
  return [start, ...range(start + 1, end)]
}
