import { cards } from './src/cards'
import { it, expect } from '@jest/globals'
it('should check the contents of the cards', () => {
    const card: string[] = ['дама черви']

    expect(cards).toContain('дама черви')
    expect(new Set(cards)).toContain('дама черви')
    expect(card).toContain('дама черви')
})

it('should length of array', () => {
    expect(cards).toHaveLength(36)
})

it('should exceptions card', () => {
    const numberCard = ['пять крести']
    expect(cards).not.toBe(numberCard)
})
