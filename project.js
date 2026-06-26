const projects = {
  placeholder: {
    index: "01",
    name: "Coming Soon",
    title: "A third case study is coming soon.",
    timeline: "TBD",
    role: "UX Researcher<br>Product Designer",
    team: "TBD",
    disciplines: "Research<br>Design<br>Prototyping",
    accent: "#a88bff",
    deep: "#5f42ac",
    logo: "TBD",
    mockHeading: "More work coming soon.",
    overviewHeading: "This case study is still in progress.",
    overviewCopy:
      "Use this space for your third portfolio project. You can replace this placeholder with a UPS AI product, couponing app, robotics project, or another HCI case study.",
    impactOneNumber: "TBD",
    impactOneLabel: "metric",
    impactTwoNumber: "TBD",
    impactTwoLabel: "outcome",
    problemHeading: "Define the core problem here.",
    problemCopy:
      "Add the main user pain point, business challenge, or design opportunity for this project.",
    hmw: "frame the problem as a clear design opportunity?",
    solutionHeading: "Describe your final solution here.",
    solutionCopy:
      "Summarize the product, feature, or redesign you created.",
    features: [
      ["Feature one", "Describe the first key feature."],
      ["Feature two", "Describe the second key feature."],
      ["Feature three", "Describe the third key feature."],
    ],
    process:
      "Describe your research, ideation, prototyping, and testing process here.",
    reflection:
      "Add your biggest takeaway from the project here.",
    next: "zillow",
  },

  zillow: {
    index: "02",
    name: "Zillow Apartment Search Redesign",
    title: "Helping roommate groups make housing decisions together.",
    timeline: "HCI Course Project",
    role: "UX Researcher<br>Product Designer",
    team: "Individual Project",
    disciplines: "HCI<br>Information Retrieval<br>Collaborative UX<br>Prototyping",
    accent: "#6aa6ff",
    deep: "#2457a6",
    logo: "ZILLOW",
    mockHeading: "Find a place that works for everyone.",
    overviewHeading: "Redesigning apartment search for shared decision-making.",
    overviewCopy:
      "This project redesigned Zillow’s apartment search experience to better support roommate groups who need to compare listings, balance preferences, and make housing decisions collaboratively.",
    impactOneNumber: "MSRRF",
    impactOneLabel: "ranking framework",
    impactTwoNumber: "3",
    impactTwoLabel: "collaboration features",
    problemHeading:
      "Apartment search platforms are built for individuals, but housing decisions are often made by groups.",
    problemCopy:
      "Roommate groups frequently coordinate across texts, spreadsheets, screenshots, and separate searches. This makes it difficult to compare tradeoffs and agree on listings.",
    hmw:
      "help roommate groups search, compare, and decide on apartments together within one platform?",
    solutionHeading: "A collaborative apartment search experience.",
    solutionCopy:
      "The redesign adds shared preferences, group ranking, and collaborative discussion tools to help users make more informed housing decisions together.",
    features: [
      [
        "Shared preference profiles",
        "Each roommate can define priorities such as budget, commute, neighborhood, amenities, and safety."
      ],
      [
        "Group compatibility ranking",
        "Listings are ranked based on how well they satisfy the group’s combined preferences instead of one person’s filters."
      ],
      [
        "Collaborative listing review",
        "Roommates can save, comment on, compare, and vote on listings in one shared decision space."
      ],
    ],
    process:
      "The process included secondary research, user needs analysis, problem framing, ranking logic, wireframing, and iterative design refinements focused on reducing coordination friction.",
    reflection:
      "Designing for multiple stakeholders requires more than adding sharing features. The experience must support negotiation, compromise, and trust.",
    next: "spotify",
  },
spotify: {
    index: "03",
    name: "Spotify",
    title: "Breaking language barriers through music.",
    timeline: "HCI Course Project",
    role: "UX Researcher<br>Product Designer",
    team: "Individual Project",
    disciplines: "HCI<br>User Research<br>Accessibility<br>Prototyping",
    accent: "#1DB954",
    deep: "#0f5f2d",
    logo: "SPOTIFY",
    mockHeading: "Translate lyrics without leaving the listening experience.",
    overviewHeading: "Making global music and audio easier to understand.",
    overviewCopy:
      "This project explored how Spotify could support real-time lyric and podcast translation so users can engage with music, artists, and spoken content across languages.",
    impactOneNumber: "HCI",
    impactOneLabel: "course project",
    impactTwoNumber: "3",
    impactTwoLabel: "core features designed",
    problemHeading:
      "Spotify helps users discover global content, but language can limit deeper connection.",
    problemCopy:
      "Users may enjoy songs, artists, or podcasts in other languages, but often need to leave Spotify to understand lyrics or spoken content. This creates friction in the listening experience.",
    hmw:
      "help listeners understand multilingual content without disrupting the flow of music discovery?",
    solutionHeading: "A contextual translation layer inside Spotify.",
    solutionCopy:
      "The redesign introduces lyric translation, podcast transcript translation, and clearer language cues while preserving Spotify’s familiar listening experience.",
    features: [
      [
        "Translate lyrics in real time",
        "Users can switch between original and translated lyrics while the song continues playing."
      ],
      [
        "Understand podcast content",
        "Translated transcripts help users follow spoken audio in languages they may not fully understand."
      ],
      [
        "Discover global content confidently",
        "Language labels and translation availability help users explore international music with less uncertainty."
      ],
    ],
    process:
      "The process included identifying accessibility gaps in Spotify’s current experience, analyzing user needs around multilingual content, sketching interaction flows, and prototyping translation features that felt native to the product.",
    reflection:
      "This project taught me that accessibility is not only about access to content, but also access to meaning.",
    next: "placeholder",
  },
  
};

const params = new URLSearchParams(window.location.search);
const slug = projects[params.get("project")] ? params.get("project") : "orbit";
const project = projects[slug];
const nextProject = projects[project.next];

document.documentElement.style.setProperty("--accent", project.accent);
document.documentElement.style.setProperty("--accent-deep", project.deep);
document.title = `${project.name} — Victoria`;

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
