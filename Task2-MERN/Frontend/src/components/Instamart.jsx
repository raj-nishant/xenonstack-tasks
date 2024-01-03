import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black mt-3">
      <h1 className="font-bold text-xl bg-slate-300">{title}</h1>

      {isVisible ? (
        <button onClick={() => setIsVisible(false)}>Hide</button>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <>
      <Section
        title={"this is ABOUT instamart"}
        description={"ksdjfjsdfjksksfhsfh"}
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />
      <Section
        title={"this is CONTACT instamart"}
        description={"ksdjfjsdfjksksfhsfh"}
        isVisible={visibleSection === "contact"}
        setIsVisible={() => setVisibleSection("contact")}
      />
      <Section
        title={"this is CARRERS instamart"}
        description={"ksdjfjsdfjksksfhsfh"}
        isVisible={visibleSection === "carrers"}
        setIsVisible={() => setVisibleSection("carrers")}
      />
    </>
  );
};
export default Instamart;
