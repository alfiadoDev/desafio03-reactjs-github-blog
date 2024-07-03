import { ComponentProps, ReactElement } from "react";
import { ExternalLinkContainer } from "./styles";
type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string
  iconPosition?: 'left' | 'right'
  icon: ReactElement
}

export function ExternalLink({ text, iconPosition = 'right', icon, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      {iconPosition === 'right' ? (
        <>
          {text}
          {icon}
        </>
      ) : (
        <>
          {icon}
          {text}
        </>
      )}
    </ExternalLinkContainer>
  )
}