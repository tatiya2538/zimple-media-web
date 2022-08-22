export const getSegmentUrl = (number) => {
  let segment = window.location.pathname.split('/')
  return segment[number]
}