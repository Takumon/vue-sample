const Gender = {
  Male: 1,
  Female: 2,
} as const

export type Gender = (typeof Gender)[keyof typeof Gender]

export function toGender(gender: Gender) {
  switch (gender) {
    case Gender.Male:
      return '男性'
    case Gender.Female:
      return '女性'
  }
}
