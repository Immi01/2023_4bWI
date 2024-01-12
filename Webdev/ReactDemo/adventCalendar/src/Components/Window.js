export default function Window({num}) {

  /*function changeColor(WindowId) {
    React.useEffect(() => {
      document.getElementById(WindowId).classList.add("WindowContainerClicked");
    }, [])
  }*/

  const callId = "Window" + num;

  return (
    <div class="WindowContainer" id={callId} onClick={() => {
      document.getElementById(callId).classList.add("WindowContainerClicked");
    }}>
      <div class="Window">
       {num+1}
      </div>
    </div>
  );
}