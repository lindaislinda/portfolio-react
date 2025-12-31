import React from "react";
import "./testimonials.css";

// Import images from assets
// import appleLogo from "../../assets/apple.png";
// import dellLogo from "../../assets/dell.png";
// import usfLogo from "../../assets/usf.png";
import gdscLogo from "../../assets/GDSC_Logo_White.png";
import microsoftLogo from "../../assets/Microsoft_logo.svg.png";
import colorstackLogo from "../../assets/colorstack_logo.png";
import saseLogo from "../../assets/sase_logo.png";
// import shpeLogo from "../../assets/shpe.png";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>My personal & professional development</h5>
      <h2 className="testimonials__category">Work</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="club__avatar__square">
            <img
            src={microsoftLogo}
            alt="Microsoft Logo"
            />
          </div>
          <h5 className="club__name">Microsoft - Cloud & AI</h5>
          <h5 className="club__name">
            Software Engineer | July 2025 - Present
          </h5>
          <small className="club__review">
            • Lead the <span>Datacenter Buildout team</span> to support the deployment
            and maintenance of <span>cloud infrastructure across global data centers</span>
          </small>
          <small className="club__review">
            • <span>Provide Topology Metadata to the most advanced Datacenters in the world, training AI/ML models to optimize energy efficiency and resource allocation.</span>
          </small>
          <small className="club__review">
            • Collaborated with cross-functional teams to <span>optimize cloud
            services, improving performance and reliability for end-users</span>
          </small>
          <small className="club__review">
            • Utilized tools such as <span>Azure, PowerShell, Python, and C#</span> to automate
            tasks and streamline operations
          </small>
          <small className="club__review">
            • Gained hands-on experience in <span>cloud computing, networking, and
            infrastructure management</span> for sovereign and airagapped clouds
          </small>
        </article>
        <br />
        <article className="testimonial">
          <div className="club__avatar">
            <img
              src="https://th.bing.com/th/id/R.0992c8b4ecc37f4d5e22a0840cb8034b?rik=bp3CSAmcqMoC7g&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2faiq%2f6kn%2faiq6knx5T.jpg&ehk=QVL36hHqNbKRh%2bnRqLwKSDyVD8KOlTxAjYo1%2b9I2nPI%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </div>
          <h5 className="club__name">Apple - CAD</h5>
          <h5 className="club__name">
            Software Engineer Intern | May 2024 - Aug 2024
          </h5>
          <small className="club__review">
            • <span>Reduce 99% space usage</span> by designing optimal graph
            database schemas, ensuring efficient data retrieval
          </small>
          <small className="club__review">
            • Enhancedata querying capabilities and{" "}
            <span>reduced response times by 40%</span> by implementing a robust{" "}
            <span>GraphQL API</span>
          </small>
          <small className="club__review">
            {" "}
            • Identify key information requirements by creating multiple{" "}
            <span>UI prototypes</span> and presenting them to stakeholders
          </small>
          <small className="club__review">
            {" "}
            • <span>Increase code coverage to 95%</span> by automating testing
            procedures with unit tests
          </small>
        </article>
        <br />
        <article className="testimonial">
          <div className="club__avatar">
            <img
              src="https://th.bing.com/th/id/R.14faea1f5c3935bdad8b8fd8b98ef358?rik=7HVMm%2ff77s87EQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fdell-logo-png-dell-logo-png-2778.jpg&ehk=qtLGk59SkiYYhpviZmFjYlOoRtPpFcBrAowONNrH10A%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </div>
          <h5 className="club__name">Dell Technologies</h5>
          <h5 className="club__name">
            Software Engineer Intern | May 2023 - Aug 2023
          </h5>
          <small className="club__review">
            • Improved scalability upgrading a multi-cloud orchestration
            platform using{" "}
            <span>Docker, Kubernetes, PostgreSQL, and RabbitMQ</span>
          </small>
          <small className="club__review">
            • Analyzed Dell’s <span>$100M cloud technology acquisition</span>,
            identifying use cases and achieving a{" "}
            <span>25% faster deployment</span>
          </small>
          <small className="club__review">
            {" "}
            • Architected infrastructure by isolating database and messaging
            queue services, <span>optimizing resource use by 15%</span>
          </small>
          <small className="club__review">
            {" "}
            • <span>Orchestrated 50+ virtual machines</span> and established
            secure connections by creating a Public Key Infrastructure
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
          <h5 className="club__name">
            Computer Assistant | Nov 2022 - Present
          </h5>
          <small className="club__review">
            •{" "}
            <span>
              Diagnose and troubleshoot 30+ network, printing, and technical
              problems
            </span>{" "}
            per week
          </small>
          <small className="club__review">
            • <span>Monitor functionality, security, and integrity</span> of the
            printing service and computers’ physical structure
          </small>
          <small className="club__review">
            • Provide quality customer service with general support for{" "}
            <span>hardware, network connections, and external software</span>
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
              src={colorstackLogo}
              alt=""
            />
          </div>
          <h5 className="club__name">ColorStack</h5>
          <h5 className="club__name">Public Speaker | Jan 2023 - Present</h5>
          <small className="club__review">
            • <span>Public Speaker </span> at <span>ColorStack, Society of Asian Scientists and Engineers (SASE), Society of Hispanic Professional Engineers (SHPE), Google Developer Groups (GDC), Association for Computing Machinery (ACM), Society of Women Engineers (SWE), and more</span>
          </small>
          <small className="club__review">
            • Host <span>20+ workshops</span> per year, up to <span>350 attendees</span> per workshop on topics including <span>Technical Interview Prep, Resume Building, Personal Branding, and Networking</span>
          </small>
        </article>
        <br />

        <article className="testimonial">
          <div className="club__avatar">
            <img
              src={saseLogo}
              alt=""
            />
          </div>
          <h5 className="club__name">Society of Asian Scientists and Engineers (SASE)</h5>
          <h5 className="club__name">Public Speaker | Jan 2023 - Present</h5>
          <small className="club__review">
            • Invited by <span>SASE Director</span> to speak at <span>Florida Regional Conventions</span> with the <span>highest student turnout</span>
          </small>
          <small className="club__review">
            • Share insights on <span>Personal Branding, Networking, and Career Development to Big Tech</span> to empower aspiring <span>50+</span> professionals in STEM fields
          </small>
        </article>
        <br />

        

        <article className="testimonial">
          <div className="club__avatar">
            <img
              src={gdscLogo}
              alt=""
            />
          </div>
          <h5 className="club__name">Google Developer Student Club</h5>
          <h5 className="club__name">Tech Lead | Jan 2023 - Present</h5>
          <small className="club__review">
            • Spearhead the development of GDSC’s{" "}
            <span>full-stack software development project</span> in
            collaboration with the e-board team, utilizing cutting-edge
            technologies and innovative methodologies to deliver a robust and
            scalable solution
          </small>
          <small className="club__review">
            • Organize <span>4+</span> emerging technologies workshops per
            semester and provide hands-on training to the latest advancements,
            resulting in a <span>30%</span> increase in attendance and positive
            feedback from participants
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
          <h5 className="club__name">
            Software Workshops Director | June 2023 - Present
          </h5>
          <small className="club__review">
            • Lead the promotion of technology within the chapter by organizing{" "}
            <span>6 </span>annual software workshops on cutting-edge
            technologies, including Cloud, Docker, and Kubernetes, attracting an
            average of <span>50</span> participants per session
          </small>
          <small className="club__review">
            • Partner with top industry experts and seasoned instructors to
            curate and refine workshop content, guaranteeing its alignment with
            current tech trends and significantly enhancing its applicability
            for student real-world scenarios
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
          <h5 className="club__name">
            Marketing Director | Nov 2022 - June 2023
          </h5>
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
