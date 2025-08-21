import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import burgerPop from "../assets/burgerPop.png";
import { IoChevronDown } from "react-icons/io5";
import boy from "../assets/boy.jpg";
import girl from "../assets/girl.jpg";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoChevronBackSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


let Webpage = () => {
  const menu = [
    {
      pic: (
        <img
          src={img1}
          alt="check img"
          className="h-[144.99px] mx-auto w-[152.19px] object-cover"
        />
      ),
      item: "Delicious Pizza",
      more: "Veniam debitis quaerat officiis quasi <br />\
       cupiditate quo, quisquam velit, magnam <br />\
       voluptatem repellendus sed eaque",
      price: "$20",
      icon: <FaShoppingCart className="h-[18px] mx-auto w-[18px]" />,
    },
    {
      pic: (
        <img
          src={img2}
          alt="check img"
          className="h-[144.99px] mx-auto w-[196.68px] object-cover"
        />
      ),
      item: "Delicious Burger",
      more: "Veniam debitis quaerat officiis quasi <br />\
       cupiditate quo, quisquam velit, magnam <br />\
       voluptatem repellendus sed eaque",
      price: "$15",
      icon: <FaShoppingCart className="h-[18px] mx-auto w-[18px]" />,
    },
    {
      pic: (
        <img
          src={img3}
          alt="check img"
          className="h-[145px] mx-auto w-[145px] object-cover"
        />
      ),
      item: "Delicious Pizza",
      more: "Veniam debitis quaerat officiis quasi <br />\
       cupiditate quo, quisquam velit, magnam <br />\
       voluptatem repellendus sed eaque",
      price: "$17",
      icon: <FaShoppingCart className="h-[18px] mx-auto w-[18px]" />,
    },
    {
      pic: (
        <img
          src={img4}
          alt="check img"
          className="h-[145px] mx-auto w-[257px] object-cover"
        />
      ),
      item: "Delicious Pasta",
      more: "Veniam debitis quaerat officiis quasi <br />\
       cupiditate quo, quisquam velit, magnam <br />\
       voluptatem repellendus sed eaque",
      price: "$18",
      icon: <FaShoppingCart className="h-[18px] mx-auto w-[18px]" />,
    },
    {
      pic: (
        <img
          src={img5}
          alt="check img"
          className="h-[144.99px] mx-auto w-[218px] object-cover "
        />
      ),
      item: "French Fries",
      more: "Veniam debitis quaerat officiis quasi <br />\
       cupiditate quo, quisquam velit, magnam <br />\
       voluptatem repellendus sed eaque",
      price: "$10",
      icon: <FaShoppingCart className="h-[18px] mx-auto w-[18px]" />,
    },
    {
      pic: (
        <img
          src={img6}
          alt="check img"
          className="h-[145px] mx-auto w-[145px] object-cover"
        />
      ),
      item: "Delicious Pizza",
      more: "Veniam debitis quaerat officiis quasi <br />\
       cupiditate quo, quisquam velit, magnam <br />\
       voluptatem repellendus sed eaque",
      price: "$15",
      icon: <FaShoppingCart className="h-[18px] mx-auto w-[18px]" />,
    },
    {
      pic: (
        <img
          src={img7}
          alt="check img"
          className="h-[144.99px] mx-auto w-[175px] object-cover"
        />
      ),
      item: "Tasty Burger",
      more: "Veniam debitis quaerat officiis quasi <br />\
       cupiditate quo, quisquam velit, magnam <br />\
       voluptatem repellendus sed eaque",
      price: "$12",
      icon: <FaShoppingCart className="h-[18px] mx-auto w-[18px]" />,
    },
    {
      pic: (
        <img
          src={img8}
          alt="check img"
          className="h-[144.99px] mx-auto w-[178.19px] object-cover"
        />
      ),
      item: "Tasty Burger",
      more: "Veniam debitis quaerat officiis quasi <br />\
       cupiditate quo, quisquam velit, magnam <br />\
       voluptatem repellendus sed eaque",
      price: "$14",
      icon: <FaShoppingCart className="h-[18px] mx-auto w-[18px]" />,
    },
    {
      pic: (
        <img
          src={img9}
          alt="check img"
          className="h-[144.99px] mx-auto w-[180px] object-cover"
        />
      ),
      item: "Delicious Pizza",
      more: "Veniam debitis quaerat officiis quasi <br />\
       cupiditate quo, quisquam velit, magnam <br />\
       voluptatem repellendus sed eaque",
      price: "$10",
      icon: <FaShoppingCart className="h-[18px] mx-auto w-[18px]" />,
    },
  ];

  const review = [
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />\
       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />\
       veniam",
      name: "Moana Michell",
      location: "magna aliqua",
      image: (
        <img
          src={boy}
          alt="boyImg"
          className="bg-cover bg-center bg-no-repeat rounded-full"
        />
      ),
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />\
       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />\
       veniam",
      name: "Mike Hamell",
      location: "magna aliqua",
      image: (
        <img
          src={girl}
          alt="girlImg"
          className="bg-cover bg-center bg-no-repeat rounded-full"
        />
      ),
    },
  ];

  return (
    <>
      <nav className="h-[700px] mt-[-27px] w-[1525px] bg-[url('./assets/main_bg.jpg')] bg-cover bg-center bg-no-repeat">
        <h1 className="ml-[190px] w-[100px] mt-[27px] text-[#FFFFFF] text-[32px] font-[Dancing_Script,cursive]">
          Feane
        </h1>
        <ul className="flex gap-10 w-[350px] mt-[-27px] ml-[575px]">
          <li className="text-[#FFBE33] ">HOME</li>
          <li className="text-[#FFFFFF] hover:text-[#FFBE33]">MENU</li>
          <li className="text-[#FFFFFF] hover:text-[#FFBE33]">ABOUT</li>
          <li className="text-[#FFFFFF] hover:text-[#FFBE33]">BOOKTABLE</li>
        </ul>
        <aside className="flex gap-4 w-[300px] ml-[1052px] mt-[-27px] text-[#FFFFFF] ">
          <FaUser className="hover:text-[#FFBE33]" />
          <FaShoppingCart className="hover:text-[#FFBE33]" />
          <FaSearch className="hover:text-[#FFBE33]" />
          <button className="text-[white] bg-[#FFBE33] rounded-full w-[170px] h-[40px] mt-[-10px] hover:bg-[#FFD700]">
            Order Online
          </button>
        </aside>
        <h1 className="text-[#FFFFFF] ml-[190px] w-[555px] h-[67.2px] mt-[110px] text-xl  font-[Dancing,Script_cursive] text-[56px]">
          Fast Food Restaurant
        </h1>
        <br />
        <p className="text-[#FFFFFF] ml-[190px] w-[590px] h-[63px] text-[15px]">
          Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
          ad <br />
          mollitia laborum quam quisquam esse error unde. Tempora ex doloremque,
          labore, <br />
          sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
        </p>{" "}
        <br /> <br />
        <button className="text-[white] bg-[#FFBE33] rounded-full w-[170px] h-[40px] mt-[-10px] ml-[190px] hover:bg-[#FFD700]">
          Order Online
        </button>
      </nav>

      <section className=" h-[215px] w-[1523px] mt-[80px]">
        <div className="  h-[215px] w-[555px] ml-[190px] bg-[#343a40] font-[Dancing_Script,cursive] rounded-[11px] text-white">
          <div className=" ml-[10px] pt-[13px] h-[180px] w-[180px] ">
            <div className="border-4 border-[#ffc107] h-[180px] w-[180px] rounded-full bg-[url('./assets/burger.jpg')] bg-cover bg-center bg-no-repeat"></div>
          </div>

          <div className="h-[180px] w-[180px] ml-[200px] mt-[-185px]">
            <h1 className=" h-[29px] w-[172px] pt-[40px]">Tasty Thursdays</h1>
            <h1 className=" h-[48px] w-[80px] text-[38px] pt-[25px] font-[Dancing_Script,cursive]">
              20%
            </h1>{" "}
            <h2 className=" h-[30px] w-[35px] ml-[80px]">Off</h2>
            <button className=" w-[165.4px] bg-[#FFBE33] mt-[10px] pr-[30px] rounded-full h-[40px] hover:bg-[#FFD700]">
              Order Now
              <FaShoppingCart className=" mt-[-19px] ml-[118px] " />
            </button>
          </div>
        </div>

        <aside className="h-[214px] w-[555px] ml-[770px] mt-[-215px] bg-[#343a40] font-[Dancing_Script,cursive] rounded-[11px] text-white">
          <div className=" ml-[10px] pt-[13px] h-[180px] w-[180px] ">
            <div className="border-4 border-[#ffc107] h-[180px] w-[180px] rounded-full bg-[url('./assets/pizza.jpg')] bg-cover bg-center bg-no-repeat">
              {" "}
            </div>
          </div>

          <div className="h-[180px] w-[180px] ml-[200px] mt-[-185px]">
            <h1 className=" h-[29px] w-[172px] pt-[40px]">Pizza Days</h1>
            <h1 className=" h-[48px] w-[80px] text-[38px] pt-[25px] font-[Dancing_Script,cursive]">
              15%
            </h1>{" "}
            <h2 className=" h-[30px] w-[35px] ml-[80px]">Off</h2>
            <button className="w-[165.4px] bg-[#FFBE33] mt-[10px] pr-[30px] rounded-full h-[40px] hover:bg-[#FFD700]">
              Order Now
              <FaShoppingCart className="mt-[-19px] ml-[118px] " />
            </button>
          </div>
        </aside>
      </section>
      <br />
      <br />
      <br />

      <section className="h-[1600.5px] w-[1520.8px] ">
        <div className="  w-[1140px] h-[48px] ml-[190px]">
          <h2 className="  h-[48px] text-center text-[30px] font-[Dancing_Script,cursive]">
            Our Menu
          </h2>
        </div>
        <br />
        <br />
        <ul className="flex gap-10 w-[350px] mx-auto">
          <li className="text-[#FFFFFF] cursor-pointer h-[38px] w-[69px] pl-[8px] text-center border-2 rounded-[30px] pt-[5px] bg-[#222831]">
            All
          </li>
          <li className="text-[#0C0C0C] cursor-pointer">Burger</li>
          <li className="text-[#0C0C0C] cursor-pointer">Pizzas</li>
          <li className="text-[#0C0C0C] cursor-pointer">Pasta</li>
          <li className="text-[#0C0C0C] cursor-pointer">Fries</li>
        </ul>
        <br />
        <br />

        <aside className=" ">
          <div className="grid w-[1280px] h-[1400px] grid-cols-3 ml-[150px]">
            {menu.map((item, index) => (
              <div
                key={index}
                className=" border-2 rounded-[25px] h-[443px] bg-[#212529] gap-y-10 text-white w-[390px]"
              >
                <div className=" h-[215px] w-[387px] rounded-t-[21px] bg-[#F1F2F3] flex items-center justify-center rounded-bl-4xl">
                  {item.pic}
                </div>
                <h3 className="h-[24px] font-bold pl-5 pt-8 text-xl w-[310px]">
                  {item.item}
                </h3>
                <p
                  className="pl-5 pt-8"
                  dangerouslySetInnerHTML={{ __html: item.more }}
                />
                <p className="flex items-center">
                  <span className="pl-5">{item.price}</span>
                  <button className="bg-[#FFBE33] h-[40px] ml-auto mr-5 w-[40px] rounded-full">
                    {item.icon}
                  </button>
                </p>
              </div>
            ))}
          </div>
        </aside>

        <button className="w-[188.66px] text-lg bg-[#FFBE33] ml-[700px] mt-[10px] text-[#FFFFFF] rounded-full h-[44px] hover:bg-[#FFD700]">
          View More
        </button>
        <br />
        <br />
        <br />
        <br />

        <section />
        <section className="h-[787.84px] bg-[#222831] w-[1520.8px]">
          <div className="h-[607.84px] w-[555px] ml-[248px] pt-[90px]">
            <img
              src={burgerPop}
              alt="check img"
              className="h-[607.84px] w-[445px]"
            />
          </div>

          <div className="h-[180px] ml-[790px] mt-[-340px] w-[555px]">
            <h2 className="text-[#FFFFFF] h-[48px] w-[205.56px] text-[30px] font-[Dancing_Script,cursive]">
              We Are Feane
            </h2>
            <p className="text-[#FFFFFF] h-[120px] mt-1 text-[16.7px] w-[555px]">
              There are many variations of passages of Lorem Ipsum available,
              but the <br />
              majority have suffered alteration in some form, by injected
              humour, or <br />
              randomised words which don't look even slightly believable. If you
              are <br />
              going to use a passage of Lorem Ipsum, you need to be sure there
              isn't <br />
              anything embarrassing hidden in the middle of text. All
            </p>

            <button className="w-[188.66px] text-lg bg-[#FFBE33] mt-[35px] text-[#FFFFFF] rounded-full h-[44px] hover:bg-[#FFD700]">
              Read More
            </button>
          </div>
        </section>

        <section className="h-[687px] w-[1520.8px]">
          <div className=" h-[434px] w-[585px] mt-15 flex flex-col gap-5 ml-40 p-5 ">
            <h1 className="h-[48px] w-[196px] text-3xl font-[Dancing_Script,cursive] pt-4 ">
              Book A Table
            </h1>
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="h-[50px] w-[555px] rounded-[6px] border-1 pl-5"
            />
            <input
              type="mobile"
              name=""
              id=""
              placeholder="Phone Number"
              className="h-[50px] w-[555px] rounded-[6px] border-1 pl-5"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="h-[50px] w-[555px] rounded-[6px] border-1 pl-5"
            />
            <input
              type="number"
              name=""
              id=""
              placeholder="How Many Persons?"
              className="h-[50px] w-[555px] rounded-[6px] border-1 pl-5"
            />{" "}
            <IoChevronDown />
            {/* add chevron animation here and give animation */}
            <input
              type="date"
              name=""
              id=""
              placeholder="dd-mm-yyyy"
              className="h-[50px] w-[555px] rounded-[6px] border-1 pl-5"
            />
          </div>
          <button className="w-[188.66px] text-lg bg-[#FFBE33] mt-[25px] ml-45 text-[#FFFFFF] rounded-full h-[44px] hover:bg-[#FFD700]">
            BOOK NOW
          </button>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30455.30194641754!2d78.41518733251553!3d17.41597464101673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9728e7c230a5%3A0xbf59752f5f7caa0!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1755753124542!5m2!1sen!2sin"
            className="w-[555px] h-[345px] border-0 rounded-[15px] mt-[-420px] ml-[770px]"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <section>
          <div className="w-[1140px] h-[48px] mt-[-120px] mx-auto">
            <h2 className="h-[48px] w-[394.2px] text-3xl mx-auto font-[Dancing_Script,cursive] text-[#0C0C0C]">
              What Says Our Customers
            </h2>
          </div>
          <br />
          <br />
          <div className="grid grid-cols-2 gap-10 w-[1140px] mx-auto">
            {review.map((item, index) => (
              <div
                key={index}
                className=" rounded bg-[#222831] text-white h-[150px] "
              >
                <p
                  className="pl-5 pt-3"
                  dangerouslySetInnerHTML={{ __html: item.comment }}
                />
                <h3 className="text-[18px] pl-5 font-bold">{item.name}</h3>
                <h4 className="pl-5">{item.location}</h4>
                <div className="relative mt-10 border-5 border-[#FFBE33] rounded-full h-[120px] w-[120px] before:content-[''] before:absolute before:top-[-12px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-[20px] before:h-[20px] before:bg-[#FFBE33] before:rotate-45 before:z-[-1]">
                  {item.image}
                </div>
                <div className=""></div>
              </div>
            ))}
          </div>
          <div className="h-[42px] mx-auto mt-[190px] ml-[700px] w-[117px] flex gap-4">
            <button className="p-2 h-[45px] bg-[#FFBE33] rounded-full text-white w-[45px]">
              <IoChevronBackSharp className="ml-[2px]" />
            </button>
            <button className="p-2 h-[45px] bg-[#FFBE33] rounded-full text-white w-[45px]">
              <IoChevronForwardSharp className="ml-[6px]" />
            </button>
          </div>
        </section>
<br /><br /><br />
  <section className="h-[432px] w-[1520.8px] text-center bg-[#222831] text-white">
    <div className="flex gap-20">

      <div className="h-[155px] mt-[80px] ml-[210px] w-[360px]">
            <h1 className="text-2xl font-bold font-[Dancing_Script,cursive]">Contact Us</h1>
        <br />
            <div className="h-[24px] w-[360px] hover:text-[#FFBE33]"><FaLocationDot className="inline-block" />Location</div>
            <div className="h-[24px] mt-[10px] w-[360px] hover:text-[#FFBE33]"><IoCall className="inline-block" /> Call +01 1234567890</div>
            <div className="h-[24px] mt-[10px] w-[360px] hover:text-[#FFBE33]"><MdEmail className="inline-block" /> demo@gmail.com</div>
          </div>


          <div className="w-[360px] ml-[-90px] mt-[80px]">
            <h1 className="h-[38px] w-[360px] text-3xl font-bold font-[Dancing_Script,cursive]">Feane</h1>
            <br />
            <p className="h-[72px] w-[360px]">
              Necessary, making this the first true generator
              on the Internet. It uses a dictionary of over 200
              Latin words, combined with</p>
            <div className="h-[30px] mt-[10px] w-[360px] ml-[90px] flex gap-2 hover cursor:pointer"><FaFacebook className="h-[25px] hover:text-[#FFBE33] w-[25px]"/><FaTwitter className="h-[25px] hover:text-[#FFBE33] w-[25px]"/><FaLinkedin className="h-[25px] hover:text-[#FFBE33] w-[25px]"/><FaInstagram className="h-[25px] hover:text-[#FFBE33] w-[25px]"/><FaPinterest className="h-[25px] hover:text-[#FFBE33] w-[25px]"/></div>
          </div>


          <div className=" w-[260px] mt-[80px]">
            <h1 className="h-[33px] w-[360px] text-2xl font-bold font-[Dancing_Script,cursive]">Opening Hours</h1>
            <p className="h-[24px] mt-[20px] w-[360px]">Everyday</p>
            <p className="h-[24px] mt-[15px] w-[360px]">10.00 Am -10.00 Pm</p>
          </div>
        </div>

          <p className="h-[72px] mt-[55px] ml-[170px] text-lg w-[1140px]">© 2025 All Rights Reserved By Free Html Templates <br />
          <br />
          © Distributed By ThemeWagon</p>

  </section>
      </section>
    </>
  );
};

export default Webpage;
