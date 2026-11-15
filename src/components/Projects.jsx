
import React, { useMemo, useState } from "react";
import "./Projects.css";

const orders = [
  { name: "Paul Henriot", id: "10248", country: "France", city: "Reims" },
  { name: "Karin Josephs", id: "10249", country: "Germany", city: "Münster" },
  { name: "Mario Pontes", id: "10250", country: "Brazil", city: "Rio de Janeiro" },
];

const features = [
  {
    number: "01",
    category: "EMPTY STATE",
    title: "Empty Record Template",
    description:
      "Implemented a customizable empty record template that allows developers to display meaningful content when the DataGrid has no records.",
    tags: ["JavaScript", "TypeScript", "DataGrid"],
    preview: "empty",
  },
  {
    number: "02",
    category: "CUSTOMIZATION",
    title: "Column Chooser Template",
    description:
      "Built a customizable Column Chooser Template with flexible column selection, allowing applications to adapt the chooser UI to their requirements.",
    tags: ["JavaScript", "Templates", "UI Customization"],
    preview: "chooser",
  },
  {
    number: "03",
    category: "GRID FEATURES",
    title: "Dynamic Column Visibility",
    description:
      "Worked on runtime column visibility, allowing users to show or hide columns and customize the information displayed in the grid.",
    tags: ["JavaScript", "DataGrid", "UI Logic"],
    preview: "visibility",
  },
  {
    number: "04",
    category: "USER EXPERIENCE",
    title: "Column Sorting",
    description:
      "Contributed to column sorting behavior and visual indicators to make data-heavy tables easier to understand and navigate.",
    tags: ["JavaScript", "DataGrid", "Interaction"],
    preview: "sorting",
  },
  {
    number: "05",
    category: "VISUAL POLISH",
    title: "Header Icon & Typography",
    description:
      "Improved header icon alignment and typography for a more consistent, readable, and polished DataGrid experience.",
    tags: ["CSS", "Typography", "UI Refinement"],
    preview: "header",
  },
  {
    number: "06",
    category: "PROBLEM SOLVING",
    title: "UI Debugging & Issue Resolution",
    description:
      "Investigated and resolved DataGrid UI issues, improving component consistency, usability, and reliability.",
    tags: ["Debugging", "JavaScript", "Problem Solving"],
    preview: "debug",
  },
  {
    number: "07",
    category: "PERSONAL PROJECT",
    title: "TypeSpeak – Typing Speed Game",
    description:
      "Built a browser-based typing practice application that helps users improve typing speed and accuracy with real-time performance tracking, voice feedback, and flexible practice options.",
    tags: [
      "Typing Practice",
      "Voice Feedback",
      "PDF & TXT Support",
      "Responsive UI",
    ],
    preview: "typespeak",
    link: "https://lnkd.in/giDtnaQN",
  },
];


function TypeSpeakPreview() {
  return (
    <div className="preview-window typespeak-preview">
      <div className="preview-toolbar">
        <span>TypeSpeak · Typing Practice</span>
        <span className="preview-status">Ready to practice</span>
      </div>

      <div className="typespeak-content">
        <div className="typespeak-top">
          <div>
            <span className="typespeak-label">YOUR PERFORMANCE</span>
            <strong className="typespeak-wpm">72 <small>WPM</small></strong>
          </div>
          <span className="typespeak-timer">01:00</span>
        </div>

        <div className="typespeak-stats">
          <div>
            <strong>98%</strong>
            <span>Accuracy</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Errors</span>
          </div>
          <div>
            <strong>345</strong>
            <span>Characters</span>
          </div>
        </div>

        <div className="typespeak-paragraph">
          The quick brown fox jumps over the lazy dog.
          Practice every day to improve your typing speed
          and accuracy.
        </div>

        <div className="typespeak-bottom">
          <span>🔊 Voice feedback enabled</span>
          <span>60-second mode</span>
        </div>
      </div>
    </div>
  );
}

function EmptyPreview() {
  return (
    <div className="preview-window">
      <div className="preview-toolbar">
        <span>Orders DataGrid</span>
        <span className="preview-muted">0 records</span>
      </div>
      <div className="empty-preview-content">
        <div className="empty-preview-icon">▤</div>
        <strong>No Records Found</strong>
        <span>There is no data available to display.</span>
        <button type="button" className="preview-small-button">
          Refresh data
        </button>
      </div>
    </div>
  );
}

function ChooserPreview() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([
    "Order ID",
    "Customer Name",
    "Ship Country",
  ]);

  const columns = [
    "Order ID",
    "Customer Name",
    "Order Date",
    "Ship Country",
    "Ship City",
    "Ship Address",
  ];

  const filtered = columns.filter((column) =>
    column.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (column) => {
    setSelected((current) =>
      current.includes(column)
        ? current.filter((item) => item !== column)
        : [...current, column]
    );
  };

  return (
    <div className="preview-window">
      <div className="preview-toolbar">
        <span>Column Chooser</span>
        <span className="preview-status">Custom template</span>
      </div>
      <div className="chooser-preview">
        <input
          className="preview-search"
          placeholder="Search columns..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div className="chooser-list">
          {filtered.map((column) => (
            <label key={column} className="chooser-option">
              <input
                type="checkbox"
                checked={selected.includes(column)}
                onChange={() => toggle(column)}
              />
              <span>{column}</span>
            </label>
          ))}
          {filtered.length === 0 && (
            <span className="preview-muted">No matching columns</span>
          )}
        </div>
        <div className="chooser-footer">
          <span>{selected.length} selected</span>
          <span className="preview-apply">Apply</span>
        </div>
      </div>
    </div>
  );
}

function VisibilityPreview() {
  const [visible, setVisible] = useState([
    "Order ID",
    "Customer",
    "Country",
  ]);

  const columns = ["Order ID", "Customer", "Country"];

  const toggle = (column) => {
    setVisible((current) =>
      current.includes(column)
        ? current.filter((item) => item !== column)
        : [...current, column]
    );
  };

  return (
    <div className="preview-window">
      <div className="preview-toolbar">
        <span>Grid Preferences</span>
        <span className="preview-status">Live preview</span>
      </div>
      <div className="visibility-preview">
        <div className="visibility-controls">
          {columns.map((column) => (
            <label key={column}>
              <input
                type="checkbox"
                checked={visible.includes(column)}
                onChange={() => toggle(column)}
              />
              {column}
            </label>
          ))}
        </div>
        <div className="mini-grid">
          <div className="mini-grid-row mini-grid-head">
            {visible.map((column) => (
              <span key={column}>{column}</span>
            ))}
          </div>
          <div className="mini-grid-row">
            {visible.map((column) => (
              <span key={column}>
                {column === "Order ID"
                  ? "10248"
                  : column === "Customer"
                    ? "Paul"
                    : "France"}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SortingPreview() {
  const [ascending, setAscending] = useState(true);

  const sortedOrders = useMemo(
    () =>
      [...orders].sort((a, b) =>
        ascending
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      ),
    [ascending]
  );

  return (
    <div className="preview-window">
      <div className="preview-toolbar">
        <span>Customer Orders</span>
        <span className="preview-status">Sortable columns</span>
      </div>
      <div className="sorting-preview">
        <button
          type="button"
          className="sort-header"
          onClick={() => setAscending((value) => !value)}
        >
          Customer Name
          <span>{ascending ? "↑" : "↓"}</span>
        </button>
        <div className="sort-hint">Click the header to change sorting</div>
        {sortedOrders.map((order) => (
          <div className="sort-row" key={order.id}>
            <span>{order.name}</span>
            <span>{order.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeaderPreview() {
  return (
    <div className="preview-window">
      <div className="preview-toolbar">
        <span>DataGrid Header</span>
        <span className="preview-status">UI refinement</span>
      </div>
      <div className="header-preview-grid">
        <div className="header-preview-cell">
          <span>Order ID</span>
          <span className="header-icons">↕ ⋮</span>
        </div>
        <div className="header-preview-cell">
          <span>Customer Name</span>
          <span className="header-icons">↕ ⋮</span>
        </div>
        <div className="header-preview-cell">
          <span>Ship Country</span>
          <span className="header-icons">↕ ⋮</span>
        </div>
      </div>
      <div className="header-preview-note">
        <span className="alignment-dot" />
        Consistent alignment · Clear typography
      </div>
    </div>
  );
}

function DebugPreview() {
  const [fixed, setFixed] = useState(false);

  return (
    <div className="preview-window">
      <div className="preview-toolbar">
        <span>UI Issue Investigation</span>
        <span className={fixed ? "preview-status" : "preview-warning"}>
          {fixed ? "Resolved" : "Issue detected"}
        </span>
      </div>
      <div className="debug-preview">
        <div className="debug-code-line">
          <span>01</span> Inspect component behavior
        </div>
        <div className="debug-code-line">
          <span>02</span> Identify UI inconsistency
        </div>
        <div className="debug-code-line">
          <span>03</span> Apply and verify the fix
        </div>
        <button
          type="button"
          className="debug-action"
          onClick={() => setFixed((value) => !value)}
        >
          {fixed ? "Reset demonstration" : "Resolve demonstration"}
        </button>
      </div>
    </div>
  );
}


function FeaturePreview({ type }) {
  switch (type) {
    case "empty":
      return <EmptyPreview />;
    case "chooser":
      return <ChooserPreview />;
    case "visibility":
      return <VisibilityPreview />;
    case "sorting":
      return <SortingPreview />;
    case "header":
      return <HeaderPreview />;
    case "debug":
      return <DebugPreview />;
    case "typespeak":
      return <TypeSpeakPreview />;
    default:
      return null;
  }
}


export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading reveal">
          <span className="section-eyebrow">04 / SELECTED WORK</span>
          <h2>
            Engineering details
            <br />
            behind the <span>interface.</span>
          </h2>
          <p>
            A collection of frontend engineering contributions and personal
            projects focused on usability, interaction, and meaningful
            digital experiences.
          </p>
        </div>

        <div className="projects-grid">
          {features.map((feature) => (
              <article
                className={`project-card reveal ${
                  feature.preview === "typespeak" ? "project-card-featured" : ""
                }`}
                key={feature.number}
              >
              <div className="project-card-top">
                <span className="project-number">{feature.number}</span>
                <span className="project-category">{feature.category}</span>
              </div>

              <FeaturePreview type={feature.preview} />

              <div className="project-card-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

                <div className="project-tags">
                  {feature.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                  {feature.link && (
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-link"
                    >
                      Try TypeSpeak
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer reveal">
          <span>FROM COMPONENT ENGINEERING TO PERSONAL PRODUCTS</span>
          <span>BUILD · EXPLORE · IMPROVE</span>
        </div>
      </div>
    </section>
  );
}
