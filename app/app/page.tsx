import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 justify-center items-center p-4">
        <div className="text-center">
          <h1 className="mb-4">天才エンジニアあさだのありがたい講義たち</h1>
          <p>お前はおれが導く</p>
        </div>
      </div>
    </div>
  );
}
