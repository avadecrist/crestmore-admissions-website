import TimelineEvent from "@/app/ui/components/timeline-events";

export default function AboutStory() {
  const events = [
    {
      number: 1,
      title: "Our Idea",
      description:
        "Embarking on a journey into advanced technology studies for a brighter future.",
      rightSide: false,
    },
    {
      number: 2,
      title: "Scripts",
      description:
        "Diving deep into the world of cybersecurity to combat digital threats.",
      rightSide: true,
    },
    {
      number: 3,
      title: "Recordings",
      description:
        "Delving into the realm of quantum computing for cutting-edge problem-solving.",
      rightSide: false,
    },
  ];

  return (
    <section className="timeline-container bg-offwhite">
      {events.map((e) => (
        <TimelineEvent
          key={`${e.number}-${e.title}`}
          number={e.number}
          title={e.title}
          description={e.description}
          rightSide={e.rightSide}
        />
      ))}
    </section>
  );
}
