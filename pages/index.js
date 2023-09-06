import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import hill1 from "../public/assets/hill1.png";
import hill2 from "../public/assets/hill2.png";
import hill3 from "../public/assets/hill3.png";
import hill4 from "../public/assets/hill4.png";
import hill5 from "../public/assets/hill5.png";
import leaf from "../public/assets/leaf.png";
import plant from "../public/assets/plant.png";
import tree from "../public/assets/tree.png";
import { useEffect } from "react";

export default function Home() {


useEffect(() => {
  let text = document.getElementById('text');
  let leaf = document.getElementById('leaf');
  let hill1 = document.getElementById('hill1');
  let hill4 = document.getElementById('hill4');
  let hill5 = document.getElementById('hill5');

  window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (value < 320) {
      text.style.marginTop = value * 3 + 'px';
      leaf.style.top = value * -1.5 + 'px';
      leaf.style.left = value * 1.5 + 'px';
      hill4.style.left = value * -1.5 + 'px';
      hill5.style.left = value * 1.5 + 'px';
      hill1.style.top = value * 1.5 + 'px';
    }

  })

}, [])


  return (
    <>
      <Head>
        <title>Parallax Website</title>
        <meta name="description" content="Creating Parallax Website by Millaamedun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2 className="logo">Logo</h2>
        <nav className="navigation">
          <Link href="/" className="active">
            Home
          </Link>
          <Link href="/about">About</Link>
          <Link href="/service">Service</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <section className="parallax">
        <Image className="img" src={hill1} id="hill1" />
        <Image className="img" src={hill2} id="hill2" />
        <Image className="img" src={hill3} id="hill3" />
        <Image className="img" src={hill4} id="hill4" />
        <Image className="img" src={hill5} id="hill5" />
        <Image className="img" src={tree} id="tree" />
        <h2 id="text">Parallax Website</h2>
        <Image className="img" src={leaf} id="leaf" />
        <Image className="img" src={plant} id="plant" />
      </section>
      <section className="sec">
        <h2>Parallax Scrolling Website</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo couat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culminim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culminim veniam, qsint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </>
  );
}
