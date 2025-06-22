import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../public/static/fonts/Linearicons/Font/demo-files/demo.css';
import '../public/static/fonts/font-awesome/css/font-awesome.min.css';
import '../public/static/css/bootstrap.min.css';
import '../public/static/css/slick.min.css';
import '@/asset/scss/style.scss';
import '@/asset/scss/home-default.scss';
import '@/asset/scss/market-place-1.scss';
import '@/asset/scss/market-place-2.scss';
import '@/asset/scss/market-place-3.scss';
import '@/asset/scss/market-place-4.scss';
import '@/asset/scss/electronic.scss';
import '@/asset/scss/furniture.scss';
import '@/asset/scss/organic.scss';
import '@/asset/scss/technology.scss';
import '@/asset/scss/autopart.scss';
import '@/asset/scss/electronic.scss';
import { RecoilRoot } from 'recoil';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
