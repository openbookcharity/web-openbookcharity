import { Container } from "@/shared/components/Container";
import { PageLayout } from "@/shared/components/PageLayout";
import { CommunityDirectory } from "../components/CommunityDirectory";
import { CommunityForum } from "../components/CommunityForum";
import { CommunityGroups } from "../components/CommunityGroups";
import { CommunityVolunteer } from "../components/CommunityVolunteer";

export function CommunityPage() {
  return (
    <PageLayout>
      <CommunityVolunteer />
      <section className="flex-1 border-t border-border bg-muted py-2 sm:py-8">
        <Container className="space-y-4 sm:space-y-8">
          <CommunityGroups />
          <div className="grid gap-4 sm:gap-8 lg:grid-cols-2">
            <CommunityDirectory />
            <CommunityForum />
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
