import React, { useState } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"

const Coursecart = ({ courses }) => {
  const getCaty = items => {
    let holdItem = items.map(item => {
      return item.node.category
    })
    let holdCategories = new Set(holdItem)
    let categories = Array.from(holdCategories)
    categories = ["all", ...categories]
    return categories
  }

  const [myCategories] = useState(getCaty(courses))
  const [allCourses, setAllCourses] = useState(courses)

  const catyClicked = category => {
    let keepItSafe = [...courses]
    if (category === "all") {
      setAllCourses(keepItSafe)
    } else {
      let holdme = keepItSafe.filter(({ node }) => node.category === category)
      setAllCourses(holdme)
    }
  }

  return (
    <section className="py-5">
      <div className="container">
        <Heading title="Courses" />
        <div className="row my-3">
          <div className="col-10 mx-auto text-center">
            {myCategories.map((category, index) => (
              <button
                type="button"
                className="btn btn-info m-3 px-5"
                key={index}
                onClick={() => {
                  catyClicked(category)
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          {allCourses.map(({ node }) => (
            <div key={node.id} className="col-11 col-md-6 d-flex my-3 mx-auto">
              <Img fixed={node.image.fixed} />
              <div className="flex-grow-1 px-3">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-0">{node.title}</h6>
                  <h6 className="mb-0 text-success">${node.price}</h6>
                </div>
                <p className="text-muted">
                  <small>{node.description.description}</small>
                </p>
                <button
                  data-item-id={node.id}
                  data-item-name={node.title}
                  data-item-price={node.price}
                  data-item-url="https://dailyneed.netlify.app/"
                  data-item-image={node.image.fixed.src}
                  className="btn btn-warning snipcart-add-item"
                >
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Coursecart
