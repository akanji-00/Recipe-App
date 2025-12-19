export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const email = formData.get("email");
    const password = formData.get("password");

    console.log(password);
  }

  return (
    <>
      <section className="grid centered-content-h form-wrapper">
        <h1>Signup Form</h1>

        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            className="input"
            placeholder="ade@akanji.com"
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            className="input"
          />
          <br />

          <button type="submit" className="form-btn">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
