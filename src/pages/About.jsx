import AboutHero from '../sections/about/AboutHero'
import AboutExperience from '../sections/about/AboutExperience'
import AboutEducationLeadership from '../sections/about/AboutEducationLeadership'
import AboutCTA from '../sections/about/AboutCTA'
import AboutHobbies from '../sections/about/AboutHobbies'

export default function About() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <AboutHero />
      <AboutExperience />
      <AboutEducationLeadership />
      <AboutHobbies />
      <AboutCTA />
    </main>
  )
}
