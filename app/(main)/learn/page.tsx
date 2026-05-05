import DraftPage from "../_components/draft-page";

export default function LearnPage() {
  return (
    <DraftPage
      title="Learn"
      description="Structured Islamic learning paths are being prepared for students, families, and youth circles."
      bullets={[
        "Aqeedah fundamentals",
        "Fiqh essentials",
        "Akhlaq and character",
        "Arabic foundations",
        "Qur'an reading plan",
        "Hadith study circles",
      ]}
    />
  );
}
