import { useState } from 'react'
import "./styles/globals.scss"
import styles from "./styles/App.module.scss"
import SearchBar from "./components/SearchBar"
import PagesAdmin from "./pages/PagesAdmin"
import { BrowserRouter } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { SkeletonTheme } from "react-loading-skeleton"


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App() {

  return (
    <div className={styles.appContainer}>
      <SkeletonTheme duration={0.5} baseColor="#CCC" highlightColor="#AAAAAA">
        <BrowserRouter>
          <SearchBar />
          <QueryClientProvider client={queryClient}>
            <PagesAdmin />
          </QueryClientProvider>
        </BrowserRouter>
      </SkeletonTheme>
    </div>
  )
}

export default App
