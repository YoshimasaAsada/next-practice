import Sidebar from "@/components/Sideber";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex justify-around items-center h-screen">
      <Sidebar />
      <div>
        <h1>動画の埋め込み</h1>
        <video width="600" controls>
          <source src="/mov_hts-samp004.mp4" type="video/mp4" />
          お使いのブラウザはvideoタグをサポートしていません。
        </video>
      </div>
    </div>
  );
}
