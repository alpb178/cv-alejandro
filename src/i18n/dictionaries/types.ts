export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    summary: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
    cta: string;
    print: string;
    theme: { light: string; dark: string };
  };
  sections: {
    summary: string;
    skills: string;
    experience: string;
    projects: string;
    projectsOwn: string;
    projectsClient: string;
    education: string;
    languages: string;
    contact: string;
  };
  ui: {
    open: string;
    availableFor: string;
    availabilityValue: string;
  };
  footer: { line: string };
}
