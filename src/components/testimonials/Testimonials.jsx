import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>My personal & professional development</h5>
      <h2 className="testimonials__category">Work</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="club__avatar">
            <img
              src="https://th.bing.com/th/id/R.14faea1f5c3935bdad8b8fd8b98ef358?rik=7HVMm%2ff77s87EQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fdell-logo-png-dell-logo-png-2778.jpg&ehk=qtLGk59SkiYYhpviZmFjYlOoRtPpFcBrAowONNrH10A%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </div>
          <h5 className="club__name">Dell Technologies</h5>
          <h5 className="club__name">Software Engineer Intern | May 2023 - Aug 2023</h5>
          <small className="club__review">
            • Enhanced a multi-cloud orchestration platform using <span>Docker, Kubernetes, 
PostgreSQL, and RabbitMQ,</span> ensuring seamless scalability across diverse cloud environments
          </small>
          <small className="club__review">
            • Conducted a successful Proof of Concept for company’s cutting-edge technology acquisition worth <span>$100 million</span>, 
demonstrating its capabilities in reducing operational overhead by deploying complex blueprints to cloud services
          </small>
          <small className="club__review">
            • Architected and implemented a robust infrastructure by efficiently isolating database services and messaging queue services into distinct virtual machines, optimizing resource utilization and enhancing system reliability
          </small>
        </article>
      </div>
      <br />
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="club__avatar">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/University_of_South_Florida_seal.svg/800px-University_of_South_Florida_seal.svg.png"
              alt=""
            />
          </div>
          <h5 className="club__name">Student Government Computer Services</h5>
          <h5 className="club__name">Computer Assistant | Nov 2022 - Present</h5>
          <small className="club__review">
            • Diagnose and troubleshoot <span>30+</span> network, printing, and
            technical problems per week
          </small>
          <small className="club__review">
            • Monitor functionality, security, and integrity of the printing
            service and computers’ physical structure
          </small>
          <small className="club__review">
            • Provide quality customer service with general support for
            hardware, network connections, and external software
          </small>
        </article>
      </div>
      <br />
      <br />
      <h2 className="testimonials__category">Leadership</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="club__avatar">
            <img
              src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/chapter_banners/logo_4osUi1m.jpg"
              alt=""
            />
          </div>
          <h5 className="club__name">Google Developer Student Club</h5>
          <h5 className="club__name">Tech Lead | Jan 2023 - Present</h5>
          <small className="club__review">
            • Spearhead the development of GDSC’s <span>full-stack software development project</span> in collaboration with the e-board team, utilizing cutting-edge technologies and innovative methodologies to deliver a robust and scalable solution
          </small>
          <small className="club__review">
            • Organize <span>4+</span> emerging technologies workshops per semester and provide hands-on training to the latest advancements, resulting in a <span>30%</span> increase in attendance and positive feedback from participants
          </small>
        </article>
        <br />

        <article className="testimonial">
          <div className="club__avatar">
            <img
              src="https://localist-images.azureedge.net/photos/34463452569620/huge/71922379a508b23e5803bf55c60b21793db59336.jpg"
              alt=""
            />
          </div>
          <h5 className="club__name">
            Society of Hispanic Professional Engineers (SHPE)
          </h5>
          <h5 className="club__name">Software Workshops Director | June 2023 - Present</h5>
          <small className="club__review">
            • Lead the promotion of technology within the chapter by organizing <span>6 </span>annual software workshops on cutting-edge technologies, including Cloud, Docker, and Kubernetes, attracting an average of <span>50</span> participants per session
          </small>
          <small className="club__review">
            • Partner with top industry experts and seasoned instructors to curate and refine workshop content, guaranteeing its alignment with current tech trends and significantly enhancing its applicability for student real-world scenarios
          </small>
        </article>
        <br />
        <article className="testimonial">
          <div className="club__avatar">
            <img
              src="https://localist-images.azureedge.net/photos/34463452569620/huge/71922379a508b23e5803bf55c60b21793db59336.jpg"
              alt=""
            />
          </div>
          <h5 className="club__name">
            Society of Hispanic Professional Engineers (SHPE)
          </h5>
          <h5 className="club__name">Marketing Director | Nov 2022 - June 2023</h5>
          <small className="club__review">
            • Develop effective marketing strategy and maintain professional
            communication with industry connections on SHPE’s LinkedIn to
            promote the BBQ With Industry – the largest networking event on
            campus
          </small>
          <small className="club__review">
            • Organize industry contacts, send 10+ emails per day and arrange
            meetings with company representatives
          </small>
          <small className="club__review">
            • Partner with <span>6+</span> large tech companies, namely
            Microsoft, Honeywell, and Walmart, to manage their participation in
            the event, including network fair, information sessions, resume
            critique, and mock interview
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
