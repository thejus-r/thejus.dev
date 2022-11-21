// @refresh reload
import {
  Body,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  Link,
} from "solid-start"
import "./root.css"
import NavBar from "./components/NavBar"

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Thejus Rajendran</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" type="image/svg" href="/favicon.svg" />
      </Head>
      <Body>
        <NavBar />
        <main>
          <Routes>
            <FileRoutes />
          </Routes>
        </main>
        <Scripts />
      </Body>
    </Html>
  )
}
