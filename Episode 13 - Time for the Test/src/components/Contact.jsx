const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          className="border-[1px] border-black p-2 m-2 shadow-md"
          placeholder="name"
        />
        <input
          type="text"
          className="border-[1px] border-black p-2 m-2 shadow-md"
          placeholder="message"
        />

        <button className="border-[1px] border-black p-2 m-2 bg-gray-200 rounded-lg shadow-lg">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
