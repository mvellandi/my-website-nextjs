import PageLayout from "/components/page/Layout";

export default function Contact({ preview = false }) {
  // const labelStyle = "block mb-2 font-medium";
  // const inputStyle =
  //   "shadow-sm bg-[#fafafa] border border-purple-900 rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full py-4 px-12";
  // original dark mode styles:
  // dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
  return (
    <PageLayout page="contact">
      <h1 className="text-[3.6rem] text-black font-light -tracking-1 leading-tight mb-20 lg:mb-40">
        Contact
      </h1>
      <div className="prose-lg lg:prose-xl">
        <p>
          Let me know how I can help you. I am always open to new projects and
          challenges.
        </p>
        <p>
          <span class="obfuscate">ten.idnallev@vaoiram</span>
        </p>
      </div>
      {/* <section className="bg-white mt-36">
        <form
          className="flex flex-col gap-28 max-w-[600px] lg:grid lg:grid-cols-2 lg:gap-40 lg:gap-y-28 lg:max-w-[800px]"
          method="POST"
          action="https://sendfly.io/v1/380cbb70-3550-4e0c-875c-ade39aff8ee0"
        >
          <div>
            <label for="email" className={labelStyle}>
              Your email
            </label>
            <input
              type="email"
              id="email"
              className={inputStyle}
              placeholder=""
              required
            />
          </div>
          <div>
            <label for="subject" className={labelStyle}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className={inputStyle}
              placeholder=""
              required
            />
          </div>
          <div className="lg:col-span-2">
            <label for="message" className={labelStyle}>
              Your message
            </label>
            <textarea
              id="message"
              rows="5"
              className={inputStyle}
              placeholder=""
            ></textarea>
          </div>
          <button type="submit" className="btn btn-md btn-primary">
            Send message
          </button>
        </form>
      </section> */}
    </PageLayout>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  return {
    props: {
      preview,
    },
  };
}
