export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION as string || '2024-02-26'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
