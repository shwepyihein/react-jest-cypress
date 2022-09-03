declare module "@heroicons/react/outline" {
  export { default as PhoneIcon } from "@heroicons/react/outline"
  export { default as Em } from "@heroicons/react/outline"
  // rest of outline icons
}

declare module "@heroicons/react/*" {
  const content: any
  export default content
}
