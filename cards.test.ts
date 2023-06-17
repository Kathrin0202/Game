import { cards } from './src/cards'
import { it, expect } from '@jest/globals'
it('should check the contents of the cards', () => {
    const card: string[] = ['дама черви']

    expect(cards).toContain('дама черви')
    expect(new Set(cards)).toContain('дама черви')
    expect(card).toContain('дама черви')
})
