export type HeroProps = {
  results: [
    {
      name: string,
      description: string,
      thumbnail: {
        path: string,
        extension: string
      }
    }
  ]
}