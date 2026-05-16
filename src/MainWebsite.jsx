import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  HeartHandshake, Home, Droplets, Flame, ShieldCheck, ClipboardCheck,
  Mail, Phone, MapPin, Users, Handshake, Wrench, GraduationCap, ArrowRight, Menu
} from 'lucide-react'
import './styles.css'

const projects = [
  {
    icon: <Home />,
    title: 'Shelter Rehabilitation',
    text: 'Minor and major rehabilitation for vulnerable households, damaged homes, collective shelters, and schools hosting displaced families.'
  },
  {
    icon: <Droplets />,
    title: 'WASH & Infrastructure',
    text: 'Sanitation repair, water tanks, sewage systems, pipelines, solar water heating connections, and basic infrastructure support.'
  },
  {
    icon: <Flame />,
    title: 'First Responder Training',
    text: 'Training of Trainers in firefighting and first aid to build community-based emergency response capacity.'
  },
  {
    icon: <ShieldCheck />,
    title: 'Protection & Dignity',
    text: 'Internal partitions, emergency lighting, safer electrical systems, privacy support, and dignity-focused improvements.'
  }
]

const impact = [
  ['25+', 'Households targeted for rehabilitation'],
  ['300+', 'Community activists targeted for training'],
  ['5+', 'Shelters and public facilities supported'],
  ['3', 'Priority response sectors']
]

export default function MainWebsite()  {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home">
          <span className="brandMark"><HeartHandshake size={24} /></span>
          <span>
            <strong>CRO Initiative</strong>
            <small>Community Reconstruction Organization</small>
          </span>
        </a>

        <nav className="links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#emergency">Emergency</a>
          <a href="#impact">Impact</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="navCta" href="#contact">Partner With Us</a>
        <Menu className="mobileIcon" />
      </header>

      <section id="home" className="hero">
        <div className="heroContent">
          <div className="pill">
            <HeartHandshake size={16} />
            Youth-led humanitarian and reconstruction initiative
          </div>
          <h1>Rebuilding communities with dignity, safety, and resilience.</h1>
          <p>
            CRO supports vulnerable families and displaced communities through practical shelter rehabilitation,
            WASH infrastructure, emergency preparedness, and community-based response.
          </p>
          <div className="actions">
            <a className="primaryBtn" href="#contact">Support Our Work <ArrowRight size={18} /></a>
            <a className="secondaryBtn" href="#work">Explore Projects</a>
          </div>
        </div>

        <div className="heroPanel">
          <h2>Current Emergency Focus</h2>
          <p>
            Supporting IDP-hosting schools, shelters, and safer accessible areas with urgent technical interventions.
          </p>
          <ul>
            <li><ClipboardCheck /> Shelter and sanitation repairs</li>
            <li><ClipboardCheck /> Water tanks, sewage, and piping</li>
            <li><ClipboardCheck /> Electrical safety and emergency lighting</li>
            <li><ClipboardCheck /> First aid and firefighting preparedness</li>
          </ul>
        </div>
      </section>

      <section id="about" className="section twoCol">
        <div>
          <p className="label">Who We Are</p>
          <h2>A practical community initiative for humanitarian action.</h2>
        </div>
        <div className="textBlock">
          <p>
            Community Reconstruction Organization (CRO) is a civil society initiative working with volunteers,
            engineers, municipalities, local actors, and community representatives to respond to urgent needs.
          </p>
          <p>
            Our work focuses on field assessment, technical planning, stakeholder coordination, transparent selection,
            and rapid implementation support for vulnerable communities.
          </p>
        </div>
      </section>

      <section id="work" className="section white">
        <div className="sectionHead">
          <p className="label">Our Work</p>
          <h2>Core intervention areas</h2>
          <p>Integrated support combining engineering, humanitarian coordination, and community mobilization.</p>
        </div>

        <div className="cards">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <div className="iconBox">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="emergency" className="section emergency">
        <div>
          <p className="label">Emergency Response</p>
          <h2>Rapid support for IDP-hosting areas.</h2>
          <p className="lead">
            Following escalation and large-scale displacement, many families are staying in public schools,
            collective shelters, and residential buildings in relatively safer areas. CRO can coordinate and
            implement flexible interventions in Saida City, Mount Lebanon shelters and schools, and other
            accessible locations in coordination with designated authorities.
          </p>

          <div className="responseGrid">
            <div><Wrench /><span>Technical assessment and BOQ preparation</span></div>
            <div><Handshake /><span>Coordination with municipalities and stakeholders</span></div>
            <div><Users /><span>Community engagement and beneficiary verification</span></div>
            <div><GraduationCap /><span>Practical trainings for first responders</span></div>
          </div>
        </div>

        <aside className="quoteCard">
          <h3>Operating Principles</h3>
          <p><strong>Coordination first:</strong> activities are aligned with local authorities and shelter managers.</p>
          <p><strong>Technical quality:</strong> engineering-based assessment and practical implementation.</p>
          <p><strong>Do no harm:</strong> safety, dignity, privacy, and community acceptance guide all interventions.</p>
        </aside>
      </section>

      <section id="impact" className="section impact">
        <p className="label">Impact Snapshot</p>
        <h2>Built for measurable community results.</h2>
        <div className="impactGrid">
          {impact.map(([num, text]) => (
            <div className="impactBox" key={text}>
              <strong>{num}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section gallery">
        <div className="sectionHead">
          <p className="label">Field Documentation</p>
          <h2>Assessment. Coordination. Implementation.</h2>
          <p>Add your real field photos here later: assessments, trainings, rehabilitation works, and community meetings.</p>
        </div>
        <div className="photoGrid">
          <div>Field Visit Photo</div>
          <div>Training Photo</div>
            <img src="/photos/cro logo.PNG" alt="cro" />
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="label">Contact</p>
          <h2>Partner with CRO</h2>
          <p>
            We welcome coordination with donors, municipalities, NGOs, volunteers, engineers, and technical partners
            to support vulnerable communities and displaced families.
          </p>
        </div>

        <div className="contactCard">
          <div><Mail /> contact@crorelief.org</div>
          <div><Phone /> +961 03123456</div>
          <div><MapPin /> Lebanon –Saida, Beirut & Mount Lebanon, and accessible areas</div>
          <a className="primaryBtn full" href="mailto:contact@crorelief.org">Send Email</a>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} CRO Initiative</span>
        <span>Community Reconstruction Organization</span>
      </footer>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
