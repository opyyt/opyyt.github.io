const useImageUrl = (folder: string = '', name: string, type: string = 'jpg'): string => {
    /**
     * @method vite动态引入图片
     * @params folder 文件夹名称 name 文件名称 type 文件格式 一般为png/jpg/webp/gif等...
     * @returns 图片
     */
    return new URL(`../assets/images/Work/${folder}/${name}.${type}`, import.meta.url).href
  }
  export default useImageUrl