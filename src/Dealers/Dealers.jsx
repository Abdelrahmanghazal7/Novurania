import React from "react";
import "./Dealers.css";
import { CgArrowLongDown } from "react-icons/cg";

const Counter = () => {
  return (
    <section className="sec-5" id="dealers">
      <div className="discover wow fadeInUp">
        <p>Discover</p>
        <h1>Novurania</h1>

        <div className="follow-5">
          <img src="images/Vector2.png" alt="vector" />
          <p>Frequently Asked Questions</p>
          <img src="images/Vector2.png" alt="vector" />
        </div>
      </div>

      <div className="accordion-menu">
        <ul className="wow fadeInDown">
          <li>
            <input type="checkbox" defaultChecked />
            <button>
              <CgArrowLongDown className="i" />
            </button>
            <h2>How do I clean mold and mildew spores from older tubes?</h2>
            <p>This UI was written in HTML and CSS.</p>
          </li>
          <li>
            <input type="checkbox" defaultChecked />
            <button>
              <CgArrowLongDown className="i" />
            </button>
            <h2>What are these spots on the Hypalon fabric?</h2>
            <p>
              Using the sibling and checked selectors, we can determine the
              styling of sibling elements based on the checked state of the
              checkbox input element.
            </p>
          </li>
          <li>
            <input type="checkbox" defaultChecked />
            <button>
              <CgArrowLongDown className="i" />
            </button>
            <h2>Where is my hull id located?</h2>
            <p>
              By making the open state default for when :checked isn't detected,
              we can make this system accessable for browsers that don't
              recognize :checked.
            </p>
          </li>
          <li>
            <input type="checkbox" defaultChecked />
            <button>
              <CgArrowLongDown className="i" />
            </button>
            <h2>Is 316 Stainless Steel Really Rust Proof?</h2>
            <p>This UI was written in HTML and CSS.</p>
          </li>
          <li>
            <input type="checkbox" defaultChecked />
            <button>
              <CgArrowLongDown className="i" />
            </button>
            <h2>Can I have a Custom Logo Made for My Tender?</h2>
            <p>
              Using the sibling and checked selectors, we can determine the
              styling of sibling elements based on the checked state of the
              checkbox input element.
            </p>
          </li>
          <li>
            <input type="checkbox" defaultChecked />
            <button>
              <CgArrowLongDown className="i" />
            </button>
            <h2>
              How does the Fiberglass "V" hull affect the performance of
              Novurania?
            </h2>
            <p>
              By making the open state default for when :checked isn't detected,
              we can make this system accessable for browsers that don't
              recognize :checked.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Counter;
