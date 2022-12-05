import { Nav } from 'components/index/Nav'
import { NextPage } from 'next'

const Index: NextPage = () => (
  <>
    <style jsx>{`
      main {
        display: flex;
        padding: 0;
      }
    `}</style>
    <main>
      <Nav />
    </main>
  </>
)

export default Index
