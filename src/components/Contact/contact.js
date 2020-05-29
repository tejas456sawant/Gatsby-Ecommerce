import React from "react"
import Heading from "../Reusable/Heading"

const Contact = () => {
  return (
    <section className="py-3">
      <Heading title="Contact Us" />
      <div className="col-10 col-sm-8 mx-auto">
        <form action="https://formspree.io/xpzjgzop" method="POST">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="_replyto"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Your Mobile"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              type="text"
              name="message"
              id="description"
              placeholder="Your Message"
            />
          </div>
          <button className="btn btn-outline-info btn-block" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
