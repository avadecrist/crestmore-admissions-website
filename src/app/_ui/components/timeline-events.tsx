type TimelineEventProps = {
  number: string | number;
  title: string;
  description: string;
  rightSide?: boolean;
};

export default function TimelineEvent({
  number,
  title,
  description,
  rightSide = false,
}: TimelineEventProps) {
  return (
    <div className={`timeline-event ${rightSide ? "right-side" : ""}`}>
      <div className="blank-box" />

      <div className="timeline-date">
        <span>{number}</span>
      </div>

      <div className="timeline-details">
        <h2 className="time-title">{title}</h2>
        <p className="time-description">{description}</p>
      </div>
    </div>
  );
}
