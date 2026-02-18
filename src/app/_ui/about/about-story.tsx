import TimelineEvent from "@/app/_ui/components/timeline-events";

export default function AboutStory() {
  const events = [
    {
      number: 1,
      title: "Our Idea",
      description:
        "When taking Michael Weiss’s “Writing for Evolving Platforms” class, Chloe and Shaira were required to pitch an original audio fiction idea. When brainstorming, Chloe and Shaira couldn’t help but reminisce on their wacky workplace stories at their campus job. On the fly, they decided to pitch it as a comedy series and the reaction was nothing but positive!",
      rightSide: false,
    },
    {
      number: 2,
      title: "Scripts",
      description:
        "With Shaira’s departure to Spain for her semester abroad and Chloe’s impending graduation date, the pair decided they had to act fast. They worked together, each writing three episodes of the six episode season, over the course of only three weeks before entering production.",
      rightSide: true,
    },
    {
      number: 3,
      title: "Recordings",
      description:
        "Recording the episodes was made possible by the Dodge College of Film and Media Arts! Over the course of two eight-hour days, Chloe and Shaira co-directed all six episodes in ADR suites with the help of their friends and classmates as voice actors.",
      rightSide: false,
    },
    {
      number: 4,
      title: "Editing",
      description:
        "The editing process brought everything together! With the hard work of sound designer and editor, Ashley Uhrig, Chloe was able to review multiple cuts of the episodes, various sound effects, and music options in order to finalize and polish the episodes for distribution!",
      rightSide: true,
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
