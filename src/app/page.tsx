import Loader from "@/components/loader/loader";

export default function Home() {
    return (
        <div className="flex flex-col w-full h-full justify-center">
            <div className="w-full">
                <Loader/>
            </div>
        </div>
    );
}
