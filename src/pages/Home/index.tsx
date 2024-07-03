import { useCallback, useEffect, useState } from "react";
import { IssueList } from "./components/IssuesList";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { api } from "../../lib/axios";
import { LoadingContainer } from "./styles";

export interface IssueProps {
  body: string
  title: string
  number: number
  created_at: string
}

export function Home() {
  const [issues, setIssues] = useState<IssueProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const loadIssues = useCallback(async (query = '') => {
    setIsLoading(true)
    if (query === '') {
      const response = await api.get('/repos/rocketseat-education/reactjs-github-blog-challenge/issues')
      setIssues(response.data)
    } else {
      const response = await api.get(`/search/issues?q=${query}%20repo:rocketseat-education/reactjs-github-blog-challenge`)

      setIssues(response.data.items)
    }

    setIsLoading(false)
  }, [])

  useEffect(() => {
    loadIssues()
  }, [])

  return (
    <>
      <Profile />
      <SearchForm total={issues.length} loadIssues={loadIssues} />

      {isLoading ? (
        <LoadingContainer><span>Carregando...</span></LoadingContainer>
      ) : <IssueList issues={issues} />}
    </>
  )
}