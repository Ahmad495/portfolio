import { NextUIProvider, createTheme } from '@nextui-org/react';
import { RouterProvider } from 'react-router-dom';
import MenuBar from './layout/Navbar';
import { router } from './routes.jsx';
import { useEffect, useState } from 'react';

const lightTheme = createTheme({
  type: 'light',
});

const darkTheme = createTheme({
  type: 'dark',
});
export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkTheme', false);
  }, []);

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <MenuBar isDark={isDark} setIsDark={setIsDark} />
      <RouterProvider router={router} />
    </NextUIProvider>
  );
}
