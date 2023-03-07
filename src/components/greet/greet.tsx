type TGreetProps = {
  name: string
}

export const Greet = (props: TGreetProps) => {
  if (!props.name) return <></>
  return <div>{props.name || 'rada'}</div>
}
