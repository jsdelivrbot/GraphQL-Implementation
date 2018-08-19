export const GET_BANDS = `
{
  band {
    name
    discography
    members {
      name
      role
    }
  }
}
`;