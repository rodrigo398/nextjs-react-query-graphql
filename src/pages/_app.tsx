import '@/styles/global.css'
import { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
    },
  },
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={reactQueryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <Component {...pageProps} />;
  </QueryClientProvider>
)

export default MyApp
