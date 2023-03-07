import { act, renderHook } from '@testing-library/react'
import { useCounter } from './counter-hook'

describe('hooks useCounter', () => {
  it('should useCounter works correctly', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initValue: 0 },
    })
    expect(result.current.count).toBe(0)
  })

  it('should useCounter increment function works correctly', async () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initValue: 0 },
    })

    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })

  it('should useCounter decrement function works correctly', async () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initValue: 0 },
    })

    act(() => result.current.decrement())
    expect(result.current.count).toBe(-1)
  })
})
