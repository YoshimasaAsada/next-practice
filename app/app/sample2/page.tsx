import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 justify-center items-center p-4">
        <div className="text-center">
          <h1 className="mb-4">天才エンジニアあさだのありがたい講義part2</h1>
          <div className="max-w-3xl w-full">
            <video className="w-full" controls>
              <source src="/mov_hts-samp004.mp4" type="video/mp4" />
              お使いのブラウザはvideoタグをサポートしていません。
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}