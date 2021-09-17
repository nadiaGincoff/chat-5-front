import Chat from './chat'
import HomeView from './home'

export default function Home(props) {
  const loggedUser = false
  return (
    <>
      {loggedUser != false? <Chat /> : <HomeView />}
    </>
  );
}