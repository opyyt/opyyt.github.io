export const useImageUrl = (image) => {
  // 参数一: 相对路径
  // 参数二: 当前路径的URL
  return new URL(`../assets/images/${image}`, import.meta.url).href
}
export default useImageUrl