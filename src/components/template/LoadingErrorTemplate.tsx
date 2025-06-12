import { Containers, Typography } from "@/components/atoms";
import { Loader } from "@/components/Organismes";

const LoadingErrorTemplate = () => {
  return (
    <Containers.Simple className="w-full h-full flex flex-col justify-around items-center">
      <Containers.Simple className="bg-layer-3 p-8 flex flex-col justify-center items-center rounded-md">
        <Typography.Title>
          {" "}
          Erreur lors du chargement des données !{" "}
        </Typography.Title>
        <Typography.Text> Essayez de recharger la page ! </Typography.Text>
      </Containers.Simple>

      <Loader />
    </Containers.Simple>
  );
};

export default LoadingErrorTemplate;
