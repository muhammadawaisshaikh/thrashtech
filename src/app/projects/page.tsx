import { Metadata } from 'next'
import ProjectsSection from '../components/projectsSection';
import { projects } from '@/utils/mock-data/projects';

export const metadata: Metadata = {
  title: 'Projects',
}

export default function Projects() {
  return (
    <ProjectsSection projects={projects} isOnLanding={false} />
  );
}