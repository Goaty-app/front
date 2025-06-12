import BirthPage from "@/components/Pages/BirthPage";
import { Suspense } from "react";
import LoadingErrorTemplate from "@/components/template/LoadingErrorTemplate";
import { Containers } from "@/components/atoms";

export default function Home() {
  return (
    <Suspense fallback={<LoadingErrorTemplate />}>
      <Containers.Simple className="p-2 max-h-full overflow-y-auto">
        <BirthPage />
      </Containers.Simple>
    </Suspense>
  );
}
