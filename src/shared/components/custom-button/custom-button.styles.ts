import { CustomButtonTypes } from './custom-button.types'

const primaryButtonStyles =
  'text-xl rounded-full border border-black bg-black py-2 px-5 text-sm text-white transition-all hover:bg-gray-100 hover:text-black disabled:opacity-50'

const secondaryButtonStyles =
  'hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400 disabled:opacity-50'

export const customButtonStyles = Object.freeze({
  [CustomButtonTypes.PRIMARY]: primaryButtonStyles,
  [CustomButtonTypes.SECONDARY]: secondaryButtonStyles,
})
