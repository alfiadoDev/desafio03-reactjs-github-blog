import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";

interface SearchFormProps {
  total: number
  loadIssues: (query: string) => Promise<void>
}

const searchFormSchema = z.object({
  search: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm({ total, loadIssues }: SearchFormProps) {
  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  const handleSearchIssues = useCallback(async (data: SearchFormInputs) => {
    await loadIssues(data.search)

    reset()
  }, [])

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <header>
        <h2>Publicações</h2>
        <span>{total} publicações</span>
      </header>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('search')}
      />
    </SearchFormContainer>
  )
}