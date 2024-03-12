export default function() {
  return (
    data: { [key:string]: string | number },
    keys: string[]
  ): { error_key: string, is_error: boolean, msg?: string } => {
    return { error_key: "", is_error: false }
  }
}
