import TimelineEvent from "@/app/ui/components/timeline-events";

export default function AboutStory() {
  const events = [
    {
      year: 2022,
      title: "Future University",
      subtitle: "Advanced Degree in Technology",
      description:
        "Embarking on a journey into advanced technology studies for a brighter future.",
      rightSide: false,
    },
    {
      year: 2020,
      title: "Cyber Academy",
      subtitle: "Specialization in Cybersecurity",
      description:
        "Diving deep into the world of cybersecurity to combat digital threats.",
      rightSide: true,
    },
    {
      year: 2018,
      title: "Quantum Institute",
      subtitle: "Exploring Quantum Computing",
      description:
        "Delving into the realm of quantum computing for cutting-edge problem-solving.",
      rightSide: false,
    },
    {
      year: 2012,
      title: "Tech College",
      subtitle: "Bachelor's Degree in Computer Science",
      description:
        "Commencing the journey with a solid foundation in computer science studies.",
      rightSide: true,
    },
  ];

  return (
    <section className="timeline-container bg-offwhite">
      {events.map((e) => (
        <TimelineEvent
          key={`${e.year}-${e.title}`}
          year={e.year}
          title={e.title}
          subtitle={e.subtitle}
          description={e.description}
          rightSide={e.rightSide}
        />
      ))}
    </section>
  );
}
