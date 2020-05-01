import React, { useState } from 'react';
import Slider from 'react-slick';
import Img from '../../img/candidate1.png';
import Img1 from '../../img/candidate2.jpeg';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  const [testimonies] = useState([
    {
      id: '1',
      candidate: 'Mrs. Sarah Jane',
      img: Img,
      testimony:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate debitis, obcaecati cumque nostrum eveniet perspiciatis est distinctio inventore non, autem totam sapiente quod aliquid sequi neque repellat! Ab, hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate debitis, obcaecati cumque nostrum eveniet perspiciatis est distinctio inventore non, autem totam sapiente quod aliquid',
    },
    {
      id: '2',
      candidate: 'Mr. John Doe',
      img: Img1,
      testimony:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate debitis, obcaecati cumque nostrum eveniet perspiciatis est distinctio inventore non, autem totam sapiente quod aliquid sequi neque repellat! Ab, hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate debitis, obcaecati cumque nostrum eveniet perspiciatis est distinctio inventore non, autem totam sapiente quod aliquid',
    },
  ]);

  return (
    <section className='testimonials mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <h2 className='mb-5 text-center'>Testimonials</h2>
          </div>
        </div>

        <div className='card px-5 z-depth-4'>
          <Slider {...settings}>
            {testimonies.map((item) => (
              <div key={item.id}>
                <div className='row py-5'>
                  <div className='col-lg-4 px-5'>
                    <img
                      src={item.img}
                      alt={item.candidate}
                      className='img-fluid rounded-circle mb-3'
                    />
                    <p className='text-center'>{item.candidate}</p>
                  </div>
                  <div className='col-lg-8 mt-5 pl-lg-5'>
                    <p>{item.testimony}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
