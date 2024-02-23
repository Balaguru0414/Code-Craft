const style = {
  animation25: { animationDelay: "-0.25s" },
  animation5: { animationDelay: "-0.5s" },
  animation75: { animationDelay: "-0.75s" },
  animation1: { animationDelay: "-1s" },
};
const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div class="w-full justify-center mx-auto space-x-2 flex mt-10">
        <h1 style={style.animation25} class="loading-text text-blue-600">
          C
        </h1>
        <h1 style={style.animation5} class="loading-text text-red-600">
          o
        </h1>
        <h1 style={style.animation75} class="loading-text text-yellow-600">
          d
        </h1>
        <h1 style={style.animation1} class="loading-text text-green-600">
          e
        </h1>

        <h1 style={style.animation1} class="loading-text text-blue-600">
          C
        </h1>
        <h1 style={style.animation75} class="loading-text text-red-600">
          R
        </h1>
        <h1 style={style.animation5} class="loading-text  text-yellow-600">
          A
        </h1>
        <h1 style={style.animation25} class="loading-text text-green-600">
          F
        </h1>

        <h1 style={style.animation5} class="loading-text text-blue-600">
          T
        </h1>
      </div>
    </div>
  );
};

export default Loading;
