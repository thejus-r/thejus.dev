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
} from "solid-start"
import NavBar from "./components/NavBar"
import "./root.css"

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Thejus Rajendran</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
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
