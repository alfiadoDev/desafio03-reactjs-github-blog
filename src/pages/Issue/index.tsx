import { ArrowSquareUpRight, Calendar, CaretLeft, ChatCircle, GithubLogo, } from "phosphor-react";
import { ExternalLink } from "../../components/ExternalLink";
import { IssueContainer, IssueInfoConainer } from "./styles";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { relativeDateFormatter } from "../../utils/formatter";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface IssueProps {
  created_at: string
  comments: number
  title: string
  html_url: string
  body: string
  user: {
    login: string
  }
}

export function Issue() {
  const [issue, setIssue] = useState<IssueProps>({} as IssueProps)

  const { id } = useParams()

  const loadIssue = useCallback(async () => {
    const response = await api.get(`/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`)

    setIssue(response.data)
  }, [id])

  useEffect(() => {
    loadIssue()
  }, [])

  return (
    <>
      <IssueInfoConainer>
        <div>
          <ExternalLink
            text="voltar"
            icon={<CaretLeft size={12} />}
            iconPosition="left"
            href="/"
          />
          <ExternalLink
            text="ver no github"
            icon={<ArrowSquareUpRight size={12} />}
            href={issue.html_url}
            target="_blank"
          />
        </div>

        <h1>{issue.title}</h1>

        <ul>
          <li>
            <GithubLogo size={18} />
            <span>{issue.user ? issue.user.login : ''}</span>
          </li>
          <li>
            <Calendar size={18} />
            <span>{relativeDateFormatter(issue.created_at)}</span>
          </li>
          <li>
            <ChatCircle size={18} />
            <span>{issue.comments} comentários</span>
          </li>
        </ul>
      </IssueInfoConainer>

      <IssueContainer>
        <Markdown
          children={issue.body}
          components={{
            code({ children, className, node, ...props }) {
              let match = /language-(w+)/.exec(className || '')
              match = match ? match : ['', 'javascript'] as unknown as RegExpExecArray
              return match ? (
                <SyntaxHighlighter
                  PreTag={'div'}
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={dracula as any}
                  {...props}
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            }
          }}
        />
      </IssueContainer>
    </>
  )
}