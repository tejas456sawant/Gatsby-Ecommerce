import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

const InfoBlock = ({ heading }) => {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center text-white">
            <p className="lead text-white mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              error recusandae itaque. Quia saepe quo quaerat tempora? Velit
              accusantium obcaecati laborum molestias, nisi numquam maiores
              corrupti quod ipsum, quidem omnis cumque cupiditate repellat
              facilis hic ullam modi non sit possimus ad est quam accusamus
              porro. Culpa est ducimus officia ex qui doloremque accusamus
              repellat dolore saepe, expedita architecto veritatis ut.
            </p>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoBlock
