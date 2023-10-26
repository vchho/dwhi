import { ReactNode } from 'react';

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="h-full flex items-center justify-center">
      {children}
    </div>
  )
}

export default RootLayout;