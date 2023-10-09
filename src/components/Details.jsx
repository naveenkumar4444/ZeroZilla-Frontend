import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { AiFillStar } from "react-icons/ai";
import CartButton from "./CartButton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Details() {
  const [product, setProduct] = useState({});
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [params]);

  return (
    <Fragment>
      {!isLoading ? (
        product && product.id ? (
          <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
              <div className="h-full lg:w-80 overflow-hidden rounded-lg sm:col-span-4 lg:col-span-5">
                <img
                  src={product.image}
                  alt={product.category}
                  className="object-cover object-center"
                />
              </div>
              <div className="sm:col-span-8 lg:col-span-7">
                <div className="text-slate-500">{product.category}</div>
                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                  {product.title}
                </h2>

                <section aria-labelledby="information-heading" className="mt-2">
                  <p className="text-2xl text-gray-900">
                    <span className="me-2">₹</span>
                    {product.price}
                  </p>
                  <div className="mt-6">
                    <h4 className="sr-only">Reviews</h4>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <AiFillStar
                            key={rating}
                            className={classNames(
                              product.rating?.rate > rating
                                ? "text-gray-900"
                                : "text-gray-200",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <div className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        {product.rating?.count} reviews
                      </div>
                    </div>
                  </div>
                </section>

                <section aria-labelledby="options-heading" className="mt-10">
                  <div className="lg:h-[200px] lg:overflow-hidden">
                    {product.description}
                  </div>
                  <CartButton product={product} />
                </section>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-center text-2xl text-gray-500 mt-40">
              No Data
            </h1>
          </div>
        )
      ) : (
        <Loader />
      )}
    </Fragment>
  );
}
