import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

const DualInfoBlock = ({ heading, imgSrc }) => {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Suscipit, quod quia beatae similique rerum voluptas quidem quaerat
              cum, odio qui nemo optio, omnis fuga. Eius pariatur quis quasi
              magnam veniam, sit minima maxime quae saepe dolor numquam labore,
              ex quos. Culpa autem voluptas quae ea, earum sed dolorem at
              aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis dicta quisquam tenetur quas consequatur minus atque!
              Expedita soluta ad maxime minima tempore laboriosam ex ipsum
              consequuntur, vero quis est libero numquam? Reprehenderit labore
              iste esse repellat eum, illum beatae voluptates ipsum eligendi
              soluta. Iure incidunt doloremque veniam velit, similique accusamus
              distinctio nulla suscipit vitae minima odio, debitis facilis
              expedita provident eius repellendus sed, quaerat doloribus!
              Voluptatem similique nesciunt sunt architecto quidem aut saepe,
              harum tenetur fugit beatae adipisci ut, corporis quae blanditiis.
              Quas deleniti ipsa similique nesciunt provident enim esse eos
              optio ratione perferendis? Vero debitis magni voluptate voluptas
              iusto.
            </p>
          </div>
          <div className="col-4">
            <div className="card bg-dark">
              <img src={imgSrc} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white">Just Click Photos</h5>
                <p className="card-text text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  perspiciatis cumque laboriosam repellat fuga nobis ad aut
                  ratione, dolorum tempore laudantium nisi culpa eveniet quae
                  nulla ea maiores doloremque repudiandae!
                </p>
                <Link to="#!" className="btn btn-warning btn-block">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DualInfoBlock
