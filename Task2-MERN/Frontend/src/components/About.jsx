import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutPage bg-white p-8 rounded-lg shadow-md h-auto">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        About [Your E-commerce Website Name]
      </h1>
      <p className="mb-4 text-gray-600">
        Welcome to [Your E-commerce Website Name]! We are passionate about
        providing high-quality products and exceptional service to our valued
        customers. Our journey began in [year], and since then, we have been
        dedicated to offering a diverse range of products that cater to your
        needs and preferences.
      </p>
      <p className="mb-4 text-gray-600">
        At [Your E-commerce Website Name], we understand the importance of a
        seamless online shopping experience. Our platform is designed to be
        user-friendly, ensuring that you can easily browse, discover, and
        purchase your favorite items from the comfort of your home.
      </p>
      <p className="mb-4 text-gray-600">
        Our commitment to quality extends to every aspect of our business,
        including the products we offer, the customer support we provide, and
        the overall shopping experience. We work with trusted suppliers to
        source the finest products, and we continuously strive to improve and
        expand our selection to meet your evolving needs.
      </p>
      <p className="mb-4 text-gray-600">
        Whether you are looking for the latest fashion trends, cutting-edge
        electronics, or unique home decor, [Your E-commerce Website Name] is
        here to exceed your expectations. We value your trust and loyalty and
        are grateful for the opportunity to serve you.
      </p>
      <p className="mb-4 text-gray-600">
        Thank you for choosing [Your E-commerce Website Name]. Happy shopping!
      </p>
      <Outlet />
    </div>
  );
};

export default About;
