import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 max-container"
    >
      <h2 className="flex-1 section-heading lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h2>
      <div className="flex-1 flex justify-center items-center max-lg:flex-col gap-5 w-full xl:max-w-[40%] sm:border sm:border-slate-gray rounded-full p-2.5">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          name="Subscribe"
          id="Subscribe"
          className="input"
        />
        <div className="max-lg:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
