export default function Button({text, fn}) {
  console.log(fn);
  return (
    <button
    class='m-3 bg-green-500 text-white p-3 px-6 w-min hover:bg-green-600 hover:cursor-pointer'
    onClick={fn}>
      {text}
    </button>
  );
}
  