interface Card {
  id: string
  title: string
  columnId: number
}

export interface CardInterface {
  cards: Card[]
  cardsColumnCount: number
  updatedCardItem?: Card
  addCard: (title: string) => void
  deleteCard: (id: string) => void
  updateCard: (title: string) => void
  onUpdateCardRequest: (id: string) => void
  moveCardToNextColumn: (id: string) => void
  moveCardToPreviousColumn: (id: string) => void
}

const DEFAULT_CARDS_COLUMN_COUNT = 4

export const CardDefaultValue: CardInterface = {
  cards: [],
  updatedCardItem: undefined,
  cardsColumnCount: DEFAULT_CARDS_COLUMN_COUNT,
  addCard: function (): void {
    throw new Error('Function not implemented.')
  },
  deleteCard: function (): void {
    throw new Error('Function not implemented.')
  },
  updateCard: function (): void {
    throw new Error('Function not implemented.')
  },
  moveCardToNextColumn: function (): void {
    throw new Error('Function not implemented.')
  },
  moveCardToPreviousColumn: function (): void {
    throw new Error('Function not implemented.')
  },
  onUpdateCardRequest: function (): void {
    throw new Error('Function not implemented.')
  },
}
