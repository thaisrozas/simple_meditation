import React from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Image,
  Nav,
} from "react-bootstrap";

import Button from "./Button";

export default function ContentLanding() {
  return (
    <>
      <main>
        <Container>
          <section className="contentlanding">
            <article>
              <h1 className="contentlanding-heading">
                Find Your Calm with Simple Meditation
              </h1>
              <p className="contentlanding-text">
                At Simple Meditation, we believe in making mindfulness
                accessible to everyone. Our guided meditations and calming
                practices are designed to help you find peace in your daily
                life. Whether you're new to meditation or looking to deepen your
                practice, our simple, effective techniques will guide you
                towards a more centered and balanced life.
              </p>
              <Button nameButton="Start here"></Button>
            </article>
            <Image
              className="contentlanding-image"
              src="woman-meditation.jpg"
            />
          </section>
          <section>
            
          </section>
        </Container>
      </main>
    </>
  );
}
