export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-08-03'

export const dataset = 'production'

export const projectId = 'h4hb3c4v'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
