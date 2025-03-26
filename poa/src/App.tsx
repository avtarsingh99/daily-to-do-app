import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
// import {nav} from '.components/ui/navigation-menu'
import {NavigationMenu} from './components/ui/navigation-menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <NavigationMenu> Link 1</NavigationMenu> */}
<Button> Default </Button>
<Button variant={'destructive'} size={'lg'} > Destructive </Button>
<Button variant={'secondary'} size={'sm'}> Secondary </Button>
<Button variant={'link'} > Link </Button>
<Button variant={'ghost'} > Default </Button>
<Button variant={'outline'} > Outline </Button>
    </>
  )
}

export default App
