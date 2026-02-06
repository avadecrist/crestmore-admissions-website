type TimelineEventProps = {
  year: string | number;
  title: string;
  subtitle: string;
  description: string;
  rightSide?: boolean;
};

export default function TimelineEvent({
  year,
  title,
  subtitle,
  description,
  rightSide = false,
}: TimelineEventProps) {
  return (
    <div className={`timeline-event ${rightSide ? "right-side" : ""}`}>
      <div className="blank-box" />

      <div className="timeline-date">
        <span>{year}</span>
      </div>

      <div className="timeline-details">
        <h2 className="time-title">{title}</h2>
        <h3 className="time-subtitle">{subtitle}</h3>
        <p className="time-description">{description}</p>
      </div>
    </div>
  );
}
