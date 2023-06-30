import { useState } from 'react';
import { Button, Navbar, Text, Switch } from '@nextui-org/react';
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';
import Contact from '../components/modals/Contact';

export default function MenuBar({ isDark, setIsDark }) {
  const [openDialog, setOpenDialog] = useState(false);
  const handleTheme = () => {
    setIsDark(isDark ? false : true);
  };
  return (
    <>
      <Contact openDialog={openDialog} setOpenDialog={setOpenDialog} />
      <Navbar isBordered variant={'floating'}>
        <Navbar.Brand>
          <Text b color='inherit'>
            Ahmad
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Switch color={'secondary'} size='sm' checked={false} iconOn={<MoonIcon filled />} iconOff={<SunIcon filled />} onChange={handleTheme} />
          <Button color='secondary' auto ghost rounded size={'sm'} onPress={() => setOpenDialog(true)}>
            Say Hello
          </Button>
        </Navbar.Content>
      </Navbar>
    </>
  );
}
