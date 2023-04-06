import { expect, test } from 'vitest'
import { testAdd } from '../src'

test('1 + 1', () => {
  expect(testAdd(1, 1)).toBe(2)
})
