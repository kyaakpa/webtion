export default function CustomForm() {
  console.log("hello world");
  return (
    <div className="w-screen h-screen fixed flex justify-center z-50">
      <form className="w-1/2 justify-center">
        <h2>Custom Form Builder</h2>
        <input type="text" />
      </form>
    </div>
  );
}
