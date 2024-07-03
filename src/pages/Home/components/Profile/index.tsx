import { ArrowSquareUpRight, Buildings, GithubLogo, Users } from "phosphor-react";
import { ProfileContainer } from "./styles";
import { ExternalLink } from "../../../../components/ExternalLink";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface ProfileProps {
  name: string
  login: string
  bio: string
  avatar_url: string
  work_at?: string
  html_url: string
  followers: string
}

const username = import.meta.env.VITE_GITHUB_USERNAME
const reposName = import.meta.env.VITE_GITHUB_REPONAME

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)

  const loadProfile = useCallback(async () => {
    const response = await api.get(`/users/${username}`)

    setProfile(response.data)
  }, [])

  useEffect(() => {
    loadProfile()
  }, [])

  return (
    <ProfileContainer>
      <img src={profile.avatar_url} alt="github-avatar-user" />
      <div>
        <header>
          <h1>{profile.name}</h1>
          <ExternalLink
            text="github"
            href={profile.html_url}
            target="_blank"
            icon={<ArrowSquareUpRight size={12} />}
          />
        </header>
        <p>{profile.bio}</p>
        <ul>
          <li>
            <GithubLogo size={18} />
            <span>{profile.login}</span>
          </li>
          <li>
            <Buildings size={18} />
            <span>{profile.work_at ? profile.work_at : 'N/A'}</span>
          </li>
          <li>
            <Users size={18} />
            <span>{profile.followers} seguidores</span>
          </li>
        </ul>
      </div>
    </ProfileContainer>
  )
}