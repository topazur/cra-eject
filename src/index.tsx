import React, { Fragment, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import '@/index.css'
import reportWebVitals from '@/reportWebVitals'

const App = () => <div>app is loaded {process.env.NODE_ENV}</div>

function StrictModeWrapper(props: any) {
  const { children } = props
  if (process.env.NODE_ENV === 'production') {
    return (
      <StrictMode>
        {children}
      </StrictMode>
    )
  }
  return <Fragment>{children}</Fragment>
}

/**
 * @title react18 新的挂载方式
 * @notice [开发模式下StrictMode导致render两次](https://blog.csdn.net/dreamer_sen/article/details/109381804)
 */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<StrictModeWrapper><App /></StrictModeWrapper>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
