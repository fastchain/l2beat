import { expect } from 'chai'
import { formatLargeNumber } from '../../src/shared'

describe('formatLargeNumber', () => {
  const cases = [
    { value: 0, expected: '0.00' },
    { value: 1, expected: '1.00' },
    { value: 1.337, expected: '1.33' },
    { value: 1.331, expected: '1.33' },
    { value: 21.37, expected: '21.37' },
    { value: 99.999, expected: '99.99' },
    { value: 100.999, expected: '100' },
    { value: 420.69, expected: '420' },
    { value: 999.999, expected: '999' },
    { value: 1_000.999, expected: '1.00K' },
    { value: 2_345.67, expected: '2.34K' },
    { value: 34_567.89, expected: '34.56K' },
    { value: 99_999.999, expected: '99.99K' },
    { value: 345_678.91, expected: '345K' },
    { value: 999_999.999, expected: '999K' },
    { value: 999_999.999, expected: '999K' },
    { value: 1_234_567, expected: '1.23M' },
    { value: 12_345_678, expected: '12.34M' },
    { value: 123_456_789, expected: '123M' },
    { value: 1_234_567_891, expected: '1.23B' },
    { value: 12_345_678_912, expected: '12.34B' },
    { value: 123_456_789_123, expected: '123B' },
    { value: 1_234_567_891_234, expected: '1.23T' },
    { value: 12_345_678_912_345, expected: '12.34T' },
    { value: 123_456_789_123_456, expected: '123T' },
    { value: 1e15, expected: '1000T' },
  ]

  describe('positive', () => {
    for (const { value, expected } of cases) {
      it(`formats ${value} as ${expected}`, () => {
        const result = formatLargeNumber(value)
        expect(result).to.equal(expected)
      })
    }
  })

  describe('negative', () => {
    for (const { value, expected } of cases) {
      if (value === 0) {
        continue
      }
      it(`formats ${-value} as -${expected}`, () => {
        const result = formatLargeNumber(-value)
        expect(result).to.equal('-' + expected)
      })
    }
  })
})