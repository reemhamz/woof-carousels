import React from "react";
import {
  ArrowSquareRight,
  CalendarBlank,
  CurrencyDollar,
} from "phosphor-react";
import niceStats from "../assets/benefits.svg"

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="info">
        <h3>Manage Your Doggy Daycare with Ease</h3>
        <p>
          Very good spot clouds thicc shooberino, bork heckin good boys. Bork
          very good spot many pats waggy wags woofer, doge you are doing me a
          frighten. Shibe heck borking doggo very jealous pupper heckin good
          boys and girls big ol heckin angery woofer very taste wow
        </p>
        <div className="cards">
          <div className="card pink">
            <ArrowSquareRight size={30} />
            <h4>Effortless Attendance</h4>
            <p>
              Much ruin diet snoot borking doggo clouds pupperino bork, big ol
              pupper snoot lotsa pats the neighborhood pupper.
            </p>
            <a href="#">Learn More ›</a>
          </div>
          <div className="card green">
            <CalendarBlank size={30} />
            <h4>Doggy Management</h4>
            <p>
              Much ruin diet snoot borking doggo clouds pupperino bork, big ol
              pupper snoot lotsa pats the neighborhood pupper.
            </p>
            <a href="#">Learn More ›</a>
          </div>
          <div className="card yellow">
            <CurrencyDollar size={30} />
            <h4>Billing & Payments</h4>
            <p>
              Much ruin diet snoot borking doggo clouds pupperino bork, big ol
              pupper snoot lotsa pats the neighborhood pupper.
            </p>
            <a href="#">Learn More ›</a>
          </div>
        </div>
          </div>
          <div className="image">
            <img src={niceStats} alt="Man infront of computer showing growth and projections"/>
          </div>
    </div>
  );
};

export default Benefits;
