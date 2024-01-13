import { CustomButtonTypes } from './custom-button.types'

const primaryButtonStyles =
  'text-xl rounded-full border border-black bg-black py-2 px-5 text-sm text-white transition-all hover:bg-gray-100 hover:text-black disabled:opacity-50'

const secondaryButtonStyles =
  'text-xl rounded-full border border-black/40 py-2 px-5 text-sm text-black/80 transition-all hover:bg-gray-100 hover:text-black disabled:opacity-50'

export const customButtonStyles = Object.freeze({
  [CustomButtonTypes.PRIMARY]: primaryButtonStyles,
  [CustomButtonTypes.SECONDARY]: secondaryButtonStyles,
})
