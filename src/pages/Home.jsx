import Hero             from '../sections/Hero'
import StatsBar         from '../sections/StatsBar'
import FeaturedProjects from '../sections/FeaturedProjects'
import TechStack        from '../sections/TechStack'
import ProjectProcess   from '../components/Home/process/ProjectProcess'
import AboutSnapshot    from '../sections/AboutSnapshot'
import Testimonials     from '../sections/Testimonials'
import ContactCTA       from '../sections/ContactCTA'

// isolation: isolate confines each section's internal stacking context.
// Without it, sections using transform/opacity/filter create child stacking
// contexts that can escape to the root and paint above the sticky process
// section's z-index:9999 — causing bleed-through.
const Isolated = ({ children }) => (
  <div style={{ position: 'relative', isolation: 'isolate' }}>
    {children}
  </div>
)

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedProjects />
      <Isolated><TechStack /></Isolated>

      <ProjectProcess>
        <Isolated><AboutSnapshot /></Isolated>
        <Isolated><Testimonials /></Isolated>
        <Isolated><ContactCTA /></Isolated>
      </ProjectProcess>
    </>
  )
}