

const Contact = () => {
  return (
    <div>
        <h1 className="m-2 p-2 font-extrabold text-2xl">Contact Page</h1>
        <div className="flex flex-col w-2/12 justify-center items-center gap-2">
        <input className="border border-gray-700 rounded-md p-1" type="text" name="name" placeholder="Enter Name" id="" />
        <input className="border border-gray-700 rounded-md p-1" type="text" name="name" placeholder="Your Message" id="" />
        <button className="m-2 p-1 border border-black hover:bg-black hover:text-white rounded-md">Submit</button>
        </div>
        <p>You can contact to our email: kumargulshan955@gmail.com</p>

        <p>Phone number: 9989476806</p>
    </div>

  )
}

export default Contact;