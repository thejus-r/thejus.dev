import { A } from "solid-start"
import "./navbar.css"

export const routes = [
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "About",
    href: "/about",
  },
]

export default function NavBar() {
  return (
    <nav class="sticky flex top-0 left-0 items-center justify-between w-full h-24 bg-stone-100 px-20">
      <div class="font-medium py-10">
        <A href="/">Thejus Rajendran</A>
      </div>
      <div class="">
        <ul class="flex space-x-24">
          <li class="nav-item">
            <A href="/">Home</A>
            <div class="text-underline" />
          </li>
          <li class="nav-item">
            <A href="/blogs">Blogs</A>
            <div class="text-underline" />
          </li>
          <li class="nav-item">
            <A href="/about">About</A>
            <div class="text-underline" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
