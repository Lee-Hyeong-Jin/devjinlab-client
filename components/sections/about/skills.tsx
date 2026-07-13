const skill_groups = [
  {
    label: "Languages",
    items: ["Python", "Java", "C++", "JavaScript"],
  },
  {
    label: "Frameworks & Libs",
    items: ["LangChain", "NumPy", "Pandas", "Seaborn", "PyQt", "Spring Boot"],
  },
  {
    label: "DevOps & Infra",
    items: [
      "Docker",
      "Kubernetes",
      "Rancher",
      "Harbor",
      "Airflow",
      "RabbitMQ",
      "AWS",
    ],
  },
  {
    label: "Tools",
    items: ["Git", "mpi4py", "OpenCV", "CNN"],
  },
] as const

export function Skills() {
  return (
    <div>
      <p className="font-mono text-xs tracking-[0.3em] text-signal uppercase">
        기술 스택
      </p>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {skill_groups.map((group) => (
          <div key={group.label}>
            <p className="font-mono text-xs text-muted-foreground">
              {group.label}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded bg-muted px-2.5 py-1 font-mono text-xs"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
