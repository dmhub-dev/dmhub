export const VideoIcon = ({ src }: { src: string }) => {
  return (
    <div className="w-[80px] h-[80px] inline-flex justify-center items-center bg-white mb-5">
      <video width="80" height="80" loop={true} autoPlay={true} muted={true}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
