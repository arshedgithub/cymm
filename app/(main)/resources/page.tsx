import DraftPage from "../_components/draft-page";

export default function ResourcesPage() {
  return (
    <DraftPage
      title="Resources"
      description="Verified learning resources are being curated and organized for quick access."
      bullets={[
        "Books library",
        "Lecture collections",
        "Step-by-step tutorials",
        "Printable study notes",
      ]}
    />
  );
}
