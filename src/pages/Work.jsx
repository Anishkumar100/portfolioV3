import { useState } from 'react'

import WorkHero       from '../sections/work/WorkHero'
import FilterBar      from '../components/work/FilterBar'
import FeaturedProject from '../components/work/FeaturedProject'
import ProjectGrid    from '../components/work/ProjectGrid'
import { projects }   from '../components/work/projectsData'

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <WorkHero />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* Only show featured spotlight when on "All" — not inside a filtered view */}
      {activeFilter === 'All' && (
        <FeaturedProject />
      )}

      <ProjectGrid projects={filteredProjects} />
    </main>
  )
}