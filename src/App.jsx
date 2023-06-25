import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'SilvanaZal24435',
    name: 'Rocio Zalazar',
    isFollowing: false
  },
  {
    userName: 'funknTion',
    name: 'Damian Fernandez',
    isFollowing: true
  },
  {
    userName: 'pekeñita_48',
    name: 'Nelly Pedraza',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
    }
