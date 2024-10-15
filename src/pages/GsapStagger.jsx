import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const GsapStagger = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 200,
      scale: 0.8,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 1.5, //total amount of time in sec
        from: "center",
        grid: [2, 1],
        axis: "y",
        ease: "power2.inOut",
      },
    });
  }, []);

  return (
    <main>
      <img
        src="/arrow.png"
        alt="back-icon"
        className="w-5 h-5 mb-3"
        onClick={() => {
          navigate("/");
        }}
        style={{
          cursor: "pointer",
        }}
      />
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
