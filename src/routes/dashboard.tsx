import { createFileRoute } from '@tanstack/react-router';
import DashHome from '@p/DashHome';

export const Route = createFileRoute('/dashboard')({
  component: DashHome,
});
