import { IssueProps } from "../.."
import { relativeDateFormatter } from "../../../../utils/formatter"
import { IssueCardContainer, IssueListContainer } from "./styles"


interface IssueListProps {
  issues: IssueProps[]
}

export function IssueList({ issues }: IssueListProps) {
  return (
    <IssueListContainer>
      {issues.map(issue => {
        return (
          <IssueCardContainer href={`/issue/${issue.number}`}>
            <header>
              <h1>{issue.title}</h1>
              <span>{relativeDateFormatter(issue.created_at)}</span>
            </header>

            <p>{issue.body}</p>
          </IssueCardContainer>
        )
      })}
    </IssueListContainer>
  )
}