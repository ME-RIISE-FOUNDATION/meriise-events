import Header from "/src/components/Header";
import Carousel from "/src/components/Carousel";
function Event26() {
  return (
    <>
      <Header />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {/* <Carousel images={["", "", ""]} title="" description="" date="" /> */}

        <Carousel
          images={["/assets/events18/eei.jpg"]}
          title="Empowering Entrepreneurship and Innovation"
          description="Students gained knowledge on entrepreneurship and were motivated towards entrepreneurial career."
          date="30th April, 2018 "
        />
      </div>
    </>
  )
}

export default Event26
