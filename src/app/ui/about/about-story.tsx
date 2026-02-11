import TimelineEvent from "@/app/ui/components/timeline-events";

export default function AboutStory() {
  const events = [
    {
      number: 1,
      title: "Our Idea",
      description:
        "We had to pitch an idea for an original audio drama in class — I asked Shaira how much she prepared for her pitch and she said what pitch and I was like girl we’re pitching today and so we needed to come up with a last minute idea for her so I said pitch a comedy about us at work taking calls and doing interviews.",
      rightSide: false,
    },
    {
      number: 2,
      title: "Scripts",
      description:
        "We were on a tight timeline which motivated us. We each wrote three episodes and table read the pilot in our class for feedback and it got a great reaction.",
      rightSide: true,
    },
    {
      number: 3,
      title: "Recordings",
      description:
        "Recording was awesome! We did two 8 hour days and each directed our own episodes. It was fun to hear the lines come to life. One highlight was recording ad libs and having our cast improv some stuff.",
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
