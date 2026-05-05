import DraftPage from "../_components/draft-page";

export default function BlogsPage() {
  return (
    <DraftPage
      title="Blogs"
      description="Short reflections, practical reminders, and articles for daily spiritual growth."
      bullets={[
        "Daily reminders",
        "Benefits and wisdom",
        "Long-form articles",
      ]}
    />
  );
}
