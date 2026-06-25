const projects = {
  orbit: {
    index: "01",
    name: "Orbit Health",
    title: "Making care feel easier to navigate",
    timeline: "January–May 2026",
    role: "Lead Product Designer<br>UX Researcher",
    team: "Your Name<br>Product & Engineering",
    disciplines: "Research<br>Product design<br>Prototyping",
    accent: "#a88bff",
    deep: "#5f42ac",
    logo: "ORBIT",
    mockHeading: "Your care, all in one place.",
    overviewHeading: "A clearer path through a complicated system.",
    overviewCopy:
      "Orbit brings appointments, care plans, and support into one calm, understandable experience. The project focused on reducing uncertainty at the moments when people need clarity most.",
    impactOneNumber: "42%",
    impactOneLabel: "faster task completion",
    impactTwoNumber: "3×",
    impactTwoLabel: "clearer next steps",
    problemHeading:
      "Patients were piecing together critical information across too many places.",
    problemCopy:
      "Interviews showed that the problem was not a lack of information—it was the effort required to understand what mattered now, what came next, and who to ask for help.",
    hmw: "help people understand and act on their care without adding more cognitive load?",
    solutionHeading: "One home for every next step.",
    solutionCopy:
      "The redesigned experience prioritizes timely actions, uses plain language, and keeps the right support within reach.",
    features: [
      ["See what needs attention", "A personalized home screen turns scattered updates into a short, prioritized plan."],
      ["Understand the details", "Complex information is translated into clear summaries with progressive disclosure."],
      ["Get support in context", "Help appears where questions naturally arise, instead of hiding behind another menu."],
    ],
    process:
      "The work moved between research and prototyping rather than treating them as separate phases. Each round narrowed the problem and sharpened the product.",
    reflection:
      "Clarity is not about showing less. It is about revealing the right thing at the right moment.",
    next: "common-ground",
  },
  "common-ground": {
    index: "02",
    name: "Common Ground",
    title: "Building belonging into every interaction",
    timeline: "August–December 2025",
    role: "Brand & Digital Designer<br>Creative Strategist",
    team: "Your Name<br>Community Partners",
    disciplines: "Brand strategy<br>Identity<br>Web design",
    accent: "#c9f970",
    deep: "#779b2f",
    logo: "COMMON+",
    mockHeading: "There is always room at the table.",
    overviewHeading: "A brand built to make gathering feel natural.",
    overviewCopy:
      "Common Ground is a neighborhood platform for meals, stories, and events. The identity needed to feel flexible enough for many cultures while remaining unmistakably warm.",
    impactOneNumber: "68%",
    impactOneLabel: "increase in event discovery",
    impactTwoNumber: "4.7/5",
    impactTwoLabel: "community sentiment",
    problemHeading:
      "The community was vibrant in person, but fragmented and difficult to discover online.",
    problemCopy:
      "People wanted a welcoming way to find events and understand the community before showing up. Existing channels felt inconsistent, transactional, and easy to miss.",
    hmw: "translate the warmth of a shared table into a flexible digital experience?",
    solutionHeading: "A living identity for shared experiences.",
    solutionCopy:
      "A modular brand language brings events, hosts, and stories together without flattening what makes each gathering unique.",
    features: [
      ["Find your table", "A warm event directory helps people browse by mood, neighborhood, and shared interest."],
      ["Meet the people", "Host stories create trust and give every gathering a human face."],
      ["Keep the door open", "Flexible tools let community members create and share their own events."],
    ],
    process:
      "Community workshops shaped the strategy from the beginning. The system grew through collaborative making, rapid identity tests, and real event pilots.",
    reflection:
      "A community brand should not speak for people. It should give people a richer way to speak together.",
    next: "elsewhere",
  },
  elsewhere: {
    index: "03",
    name: "Elsewhere",
    title: "Reimagining the way we discover a city",
    timeline: "March–July 2025",
    role: "Creative Director<br>Interaction Designer",
    team: "Your Name<br>Two collaborators",
    disciplines: "Concept<br>UX design<br>Prototype",
    accent: "#ff806f",
    deep: "#a63e31",
    logo: "ELSEWHERE",
    mockHeading: "Skip the checklist. Follow your curiosity.",
    overviewHeading: "Travel discovery without the top-ten sameness.",
    overviewCopy:
      "Elsewhere is a speculative travel companion that recommends places through feeling, context, and serendipity instead of popularity rankings.",
    impactOneNumber: "2.4×",
    impactOneLabel: "more saved discoveries",
    impactTwoNumber: "87%",
    impactTwoLabel: "felt recommendations were personal",
    problemHeading:
      "Travel platforms kept sending everyone to the same places in the same way.",
    problemCopy:
      "Travelers described spending hours comparing repetitive lists, only to arrive with an itinerary that felt generic. They wanted confidence without losing surprise.",
    hmw: "help travelers find places that feel personal while preserving room for spontaneity?",
    solutionHeading: "A compass for the kind of day you want.",
    solutionCopy:
      "Elsewhere starts with mood and context, then offers a small set of considered prompts that invite exploration rather than prescribe it.",
    features: [
      ["Choose a feeling", "Recommendations begin with the pace, energy, and atmosphere someone wants right now."],
      ["Follow a thread", "Each place connects to another through local stories, details, and curious associations."],
      ["Leave room for chance", "Lightweight prompts create gentle detours without turning the day into a schedule."],
    ],
    process:
      "Diary studies revealed how people balance planning with spontaneity. Storyboards and live city walks then helped test the concept in context.",
    reflection:
      "The best recommendation does not end the search. It makes someone more curious about what could happen next.",
    next: "orbit",
  },
};

const params = new URLSearchParams(window.location.search);
const slug = projects[params.get("project")] ? params.get("project") : "orbit";
const project = projects[slug];
const nextProject = projects[project.next];

document.documentElement.style.setProperty("--accent", project.accent);
document.documentElement.style.setProperty("--accent-deep", project.deep);
document.title = `${project.name} — Your Name`;

const setText = (id, value) => {
  document.querySelector(`#${id}`).textContent = value;
};
const setHtml = (id, value) => {
  document.querySelector(`#${id}`).innerHTML = value;
};

setText("project-index", `Case study / ${project.index}`);
setText("project-title", project.title);
setText("project-timeline", project.timeline);
setHtml("project-role", project.role);
setHtml("project-team", project.team);
setHtml("project-disciplines", project.disciplines);
setText("mock-logo", project.logo);
setText("screen-brand", project.logo);
setText("mock-heading", project.mockHeading);
setText("overview-heading", project.overviewHeading);
setText("overview-copy", project.overviewCopy);
setText("impact-one-number", project.impactOneNumber);
setText("impact-one-label", project.impactOneLabel);
setText("impact-two-number", project.impactTwoNumber);
setText("impact-two-label", project.impactTwoLabel);
setText("problem-heading", project.problemHeading);
setText("problem-copy", project.problemCopy);
setText("hmw-copy", project.hmw);
setText("solution-heading", project.solutionHeading);
setText("solution-copy", project.solutionCopy);
setText("feature-one-title", project.features[0][0]);
setText("feature-one-copy", project.features[0][1]);
setText("feature-two-title", project.features[1][0]);
setText("feature-two-copy", project.features[1][1]);
setText("feature-three-title", project.features[2][0]);
setText("feature-three-copy", project.features[2][1]);
setText("process-copy", project.process);
setText("reflection-copy", project.reflection);
setText("next-project-name", nextProject.name);
document.querySelector("#next-project").href = `project.html?project=${project.next}`;
