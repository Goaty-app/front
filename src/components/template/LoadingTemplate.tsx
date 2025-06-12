import { Containers } from "@/components/atoms";
import { Loader } from "@/components/Organismes";

const LoadingTemplate = () => {
  return (
    <Containers.Simple className="w-full h-full flex flex-col justify-around items-center">
      <Loader />
    </Containers.Simple>
  );
};

export default LoadingTemplate;
