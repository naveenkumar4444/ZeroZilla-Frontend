import React, { Fragment, useEffect, useState } from "react";
import Loader from "./Loader";
import axios from "axios";
import CartButton from "./CartButton";
import toast from "react-hot-toast";

function Products({ search }) {
  const [data, setData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [selected, setSelected] = useState("all");

  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        setCopyData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchTypes = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setTypes(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchCategoryData = (value) => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${value}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
    // return () => {};
  }, []);

  useEffect(() => {
    fetchTypes();
    return () => {};
  }, []);

  useEffect(() => {
    if (search != "") {
      const filteredData = copyData.filter(
        (d) =>
          d.title.toLowerCase().includes(search.toLowerCase()) ||
          d.title.toLowerCase().startsWith(search.toLowerCase())
      );
      setData(filteredData);
    } else {
      setData(copyData);
    }
  }, [search]);

  return (
    <Fragment>
      {!isLoading ? (
        data && data.length > 0 ? (
          <div>
            <div className="flex justify-end m-4 h-[35px]">
              <select
                onChange={(e) => {
                  if (e.target.value != "all") {
                    fetchCategoryData(e.target.value);
                    setSelected(e.target.value);
                  } else {
                    fetchData();
                    setSelected("all");
                  }
                }}
                className="h-full rounded border-0 py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                value={selected}
              >
                <option value={"all"}>All</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                {data.map((product) => (
                  <div key={product.id}>
                    <div
                      // href={`/details/${product.id}`}
                      className="group relative rounded cursor-pointer p-2 md:p-3 lg:p-5"
                    >
                      <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                        <img
                          src={
                            // product.image.includes("https://")
                            //   ? product.image
                            //   : `${imageBaseUrl}${product.image}`
                            product.image
                          }
                          alt="image"
                          className="h-60 w-full object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <a href={`/details/${product.id}`} className="bg-black">
                        <div className="mt-4 flex justify-between">
                          <div className="trunc w-7/12">
                            <h2 className="text-md text-gray-900 tracking-wider">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              />
                              {product.title}
                            </h2>
                          </div>
                          <p className="text-md font-medium text-gray-900">
                            <span>₹</span> {product.price}
                          </p>
                        </div>
                      </a>
                      {/* <p className="mt-2 text-sm text-gray-500 trunc pb-1 tracking-wider">
                    {product.description}
                  </p> */}
                    </div>
                    <CartButton product={product} />
                  </div>
                ))}
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

export default Products;
