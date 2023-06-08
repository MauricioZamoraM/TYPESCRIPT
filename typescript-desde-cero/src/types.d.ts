// El .d del archivo hace referencia a que en este archivo solo podemos tener definiciones de typescript
export interface Sub {
  nick: string,
  avatar: string,
  subMonths: number,
  description?: string
}

export type SubsResponseFromApi = Array< {
  nick: string,
  months: number,
  profileUrl: string,
  description: string
}>