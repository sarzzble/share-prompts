// TODO: Implement Search, Click on Tag, View other profiles

import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa beatae
        commodi eveniet repellendus deserunt earum ratione hic error architecto,
        eos ipsum aut dolore sequi soluta vero tenetur reiciendis temporibus
        incidunt.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
