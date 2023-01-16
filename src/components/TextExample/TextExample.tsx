import { ReactNode } from 'react'

interface TextExampleProps {
  children: ReactNode
}

export const TextExample = ({ children }: TextExampleProps) => {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>
}
